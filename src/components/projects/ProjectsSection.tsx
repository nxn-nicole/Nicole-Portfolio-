"use client";

import { useEffect, useRef } from "react";
import projectsContent from "./projects-content.json";
import ProjectCard from "./ProjectCard";
import RoughLine from "./RoughLine";
import MemphisCard from "./MemphisCard";
import BlobBlue from "./icons/BlobBlue";
import BlobOrange from "./icons/BlobOrange";
import BlobPurple from "./icons/BlobPurple";

const illustrations = {
  blobBlue: <BlobBlue size={200} />,
  blobOrange: <BlobOrange size={200} />,
  blobPurple: <BlobPurple size={200} />,
} as const;

const projects = projectsContent.projects;
const memphisCards = projectsContent.memphisCards.map((card) => ({
  ...card,
  illustration: illustrations[card.illustration as keyof typeof illustrations],
  backIllustration:
    illustrations[card.backIllustration as keyof typeof illustrations],
}));

// Duplicate for seamless infinite loop
const loopedCards = [...memphisCards, ...memphisCards];

const CARD_WIDTH = 220;
const CARD_GAP = 16;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const TOTAL_ORIGINAL_WIDTH = CARD_STEP * memphisCards.length;

export default function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      offsetRef.current += 0.5;
      // Seamless jump: when first set fully scrolled off, reset to start
      if (offsetRef.current >= TOTAL_ORIGINAL_WIDTH) {
        offsetRef.current -= TOTAL_ORIGINAL_WIDTH;
      }
      track.style.transform = `translateX(-${offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="w-full py-24 px-8">
      {/* Section Title */}
      <div className="flex items-center justify-center gap-5 mb-16">
        <RoughLine width={60} height={18} strokeWidth={2.5} />
        <h2 className="font-dongle text-6xl font-bold tracking-widest text-zinc-900 dark:text-zinc-50">
          {projectsContent.sectionTitle}
        </h2>
        <RoughLine width={60} height={18} strokeWidth={2.5} />
      </div>

      <div className="flex flex-row w-full">
        {/* Static project cards */}
        <div className="flex gap-6 mx-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Carousel — overflow hidden kills the scrollbar */}
        <div
          className="overflow-hidden"
          style={{ width: `${CARD_STEP * 4 + CARD_GAP}px` }}
        >
          <div
            ref={trackRef}
            className="flex"
            style={{ gap: `${CARD_GAP}px`, willChange: "transform" }}
          >
            {loopedCards.map((card, index) => (
              <div key={index} style={{ minWidth: CARD_WIDTH, flexShrink: 0 }}>
                <MemphisCard
                  title={card.title}
                  description={card.description}
                  backgroundColor={card.backgroundColor}
                  illustration={card.illustration}
                  backIllustration={card.backIllustration}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
