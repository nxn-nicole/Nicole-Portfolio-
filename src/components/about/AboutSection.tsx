import Image from "next/image";
import aboutContent from "./about-content.json";
import AboutLinks from "./AboutLinks";
import AboutSkills, { type CardRect, type SkillGroup } from "./AboutSkills";
import AboutExperienceCard from "./AboutExperienceCard";
import StickyNote from "../shared/StickyNote";

const skillItemRotations = [-7, -3, 2, 6, 4, -2, 5, -5];

export default function AboutSection({
  selectedSkill,
  skillOriginRect,
  skillFlyingStyle,
  showSelectedSkillItems,
  activeSkillTitle,
  onOpenSkill,
}: {
  selectedSkill: SkillGroup | null;
  skillOriginRect: CardRect | null;
  skillFlyingStyle: React.CSSProperties;
  showSelectedSkillItems: boolean;
  activeSkillTitle: string | null;
  onOpenSkill: (
    event: React.MouseEvent<HTMLDivElement>,
    group: SkillGroup,
  ) => void;
}) {
  return (
    <section className="w-full px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-[40px] px-6 py-10 sm:px-10 sm:py-14 dark:border-zinc-800">
        <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
          <div className="flex justify-center">
            <div className="group overflow-hidden rounded-full border-4 border-black bg-white p-1 dark:border-zinc-100 dark:bg-zinc-950">
              <Image
                src={aboutContent.photo.src}
                alt={aboutContent.photo.alt}
                width={240}
                height={240}
                className="h-48 w-48 rounded-full object-cover transition-transform duration-300 ease-out group-hover:scale-110 sm:h-56 sm:w-56"
                priority
              />
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="font-short-stack text-sm uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              {aboutContent.sectionLabel}
            </p>

            <div className="mt-4 max-w-2xl">
              <h2 className="font-dongle text-6xl leading-none text-zinc-900 dark:text-zinc-50 sm:text-7xl">
                {aboutContent.title}
              </h2>
              <p className="font-short-stack mt-4 text-lg leading-9 text-zinc-700 dark:text-zinc-300">
                {aboutContent.summary}
              </p>
            </div>

            <div className="flex flex-row mt-12 gap-10 ">
              <div className="space-y-10">
                <AboutLinks
                  title={aboutContent.linksTitle}
                  links={aboutContent.links}
                />

                <AboutSkills
                  title={aboutContent.skillsTitle}
                  skillGroups={aboutContent.skillGroups}
                  activeTitle={activeSkillTitle}
                  onOpen={onOpenSkill}
                />
                <div>
                  <a
                    href={aboutContent.resume.href}
                    download
                    className="inline-flex items-center py-3 font-short-stack text-lg text-zinc-900 underline underline-offset-4 transition-transform duration-200 hover:-translate-y-1 dark:border-zinc-100 dark:bg-zinc-950 dark:text-zinc-100"
                  >
                    {aboutContent.resume.label}
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-dongle text-5xl leading-none text-zinc-900 dark:text-zinc-50">
                  {aboutContent.experienceTitle}
                </h3>
                <div className="mt-5 space-y-4">
                  {aboutContent.experience.map((item) => (
                    <AboutExperienceCard
                      key={`${item.company}-${item.role}`}
                      {...item}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedSkill && skillOriginRect ? (
        <>
          <div
            className="z-50 rounded-2xl border-2 border-zinc-900 bg-white dark:border-zinc-100 dark:bg-zinc-950"
            style={skillFlyingStyle}
          >
            <div className="flex w-fit items-center justify-between px-4 pt-3 pb-2">
              <p className="font-short-stack text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {selectedSkill.title}
              </p>
            </div>
          </div>

          {selectedSkill.items.length > 0 ? (
            <div
              className="fixed top-3/4 left-2/3 z-50 flex min-w-52 -translate-y-1/2 flex-col gap-2"
              style={{ transform: "translate(calc(-50% + 150px), -50%)" }}
            >
              {selectedSkill.items.map((item, index) => (
                <div
                  key={`${selectedSkill.title}-${item}`}
                  className="rounded-2xl border-2 border-zinc-900 bg-white px-4 py-3 font-short-stack text-sm text-zinc-900 shadow-[6px_6px_0_rgba(0,0,0,0.08)] dark:border-zinc-100 dark:bg-zinc-950 dark:text-zinc-100"
                  style={{
                    opacity: showSelectedSkillItems ? 1 : 0,
                    transform: showSelectedSkillItems
                      ? `translateX(0) translateY(${index * 6}px) rotate(${skillItemRotations[index % skillItemRotations.length]}deg)`
                      : "translateX(-28px) translateY(12px) rotate(0deg) scale(0.96)",
                    transformOrigin: "left center",
                    transition:
                      "opacity 0.28s ease, transform 0.36s cubic-bezier(0.22, 1, 0.36, 1)",
                    transitionDelay: showSelectedSkillItems
                      ? `${index * 90}ms`
                      : "0ms",
                    zIndex: selectedSkill.items.length - index,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          ) : null}
        </>
      ) : null}

      <StickyNote
        text="2 years of experience"
        textSize={16}
        initialX={50}
        initialY={1200}
        color="#b8ffbf"
        rotate={3}
      />

      <StickyNote
        text="Agile & Scrum"
        textSize={16}
        initialX={240}
        initialY={1250}
        color="#79EDFF"
        rotate={-8}
      />

      <StickyNote
        text="University of Melbourne"
        textSize={16}
        initialX={240}
        initialY={1400}
        color="#FF9EA2"
        rotate={0}
      />

      <StickyNote
        text="🥘 Cooking & 🐱 Cat person"
        textSize={16}
        initialX={60}
        initialY={1480}
        color="#FFE69A"
        rotate={-2}
      />
    </section>
  );
}
