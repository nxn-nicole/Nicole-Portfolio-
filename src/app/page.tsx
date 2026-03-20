"use client";

import { useCallback, useState } from "react";
import AboutSection from "@/components/about/AboutSection";
import HeroSection from "@/components/HeroSection";
import {
  type CardRect,
  type SkillGroup,
} from "@/components/about/AboutSkills";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ConnectSection from "@/components/connect/ConnectSection";

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<SkillGroup | null>(null);
  const [originRect, setOriginRect] = useState<CardRect | null>(null);
  const [animatingSkill, setAnimatingSkill] = useState(false);
  const [isClosingSkillOverlay, setIsClosingSkillOverlay] = useState(false);
  const [showSelectedSkillItems, setShowSelectedSkillItems] = useState(false);

  const handleOpenSkill = useCallback(
    (event: React.MouseEvent<HTMLDivElement>, group: SkillGroup) => {
      const rect = event.currentTarget.getBoundingClientRect();

      setOriginRect({
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
      setSelectedSkill(group);
      setAnimatingSkill(false);
      setIsClosingSkillOverlay(false);
      setShowSelectedSkillItems(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimatingSkill(true);
          setTimeout(() => {
            setShowSelectedSkillItems(true);
          }, 420);
        });
      });
    },
    [],
  );

  const handleCloseSkill = useCallback(() => {
    setShowSelectedSkillItems(false);

    setTimeout(() => {
      setIsClosingSkillOverlay(true);
      setAnimatingSkill(false);

      setTimeout(() => {
        setSelectedSkill(null);
        setOriginRect(null);
        setIsClosingSkillOverlay(false);
      }, 420);
    }, 160);
  }, []);

  const originStyle: React.CSSProperties = originRect
    ? {
        position: "fixed",
        top: originRect.top,
        left: originRect.left,
        width: originRect.width,
        height: originRect.height,
        transform: "translate(0, 0)",
      }
    : {};

  const targetStyle: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    width: "fit-content",
    height: "auto",
    transform: "translate(-50%, -50%)",
  };

  const flyingStyle: React.CSSProperties = {
    transition:
      animatingSkill || isClosingSkillOverlay
        ? "all 0.42s cubic-bezier(0.4, 0, 0.2, 1)"
        : "none",
    ...(animatingSkill && !isClosingSkillOverlay ? targetStyle : originStyle),
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black">
        <HeroSection />
        <AboutSection
          selectedSkill={selectedSkill}
          skillOriginRect={originRect}
          skillFlyingStyle={flyingStyle}
          showSelectedSkillItems={showSelectedSkillItems}
          activeSkillTitle={selectedSkill?.title ?? null}
          onOpenSkill={handleOpenSkill}
        />
        <ProjectsSection />
        <ConnectSection />
      </main>

      {selectedSkill ? (
        <div
          onClick={handleCloseSkill}
          className="fixed inset-0 z-40 cursor-pointer bg-black"
          style={{
            transition: "opacity 0.42s ease",
            opacity: animatingSkill && !isClosingSkillOverlay ? 0.5 : 0,
          }}
        />
      ) : null}
    </>
  );
}
