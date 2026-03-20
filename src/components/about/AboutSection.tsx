import Image from "next/image";
import aboutContent from "./about-content.json";
import AboutLinks from "./AboutLinks";
import AboutSkills from "./AboutSkills";
import AboutExperienceCard from "./AboutExperienceCard";

export default function AboutSection() {
  return (
    <section className="w-full px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-[40px] px-6 py-10 sm:px-10 sm:py-14 dark:border-zinc-800">
        <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-full border-4 border-black bg-white p-1 dark:border-zinc-100 dark:bg-zinc-950">
              <Image
                src={aboutContent.photo.src}
                alt={aboutContent.photo.alt}
                width={240}
                height={240}
                className="h-48 w-48 rounded-full object-cover sm:h-56 sm:w-56"
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
                />
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
    </section>
  );
}
