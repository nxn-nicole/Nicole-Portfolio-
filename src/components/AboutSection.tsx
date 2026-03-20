import { SocialLinks } from "./about/SocialLinks";
import AboutExperienceCard from "./AboutExperienceCard";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  shadowColor: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Front-end development",
    items: [
      "Next.js",
      "React",
      "React Native",
      "Expo",
      "HTML5",
      "CSS3",
      "Zustand",
      "Vite",
    ],
  },
  {
    title: "Back-end development",
    items: ["Node.js", ".NET 8", "RESTful API", "Supabase", "Python"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "GitHub Actions",
      "Azure",
      "App Service",
      "App Insights",
      "OpenAI",
      "AWS",
      "Docker",
    ],
  },
  {
    title: "Others",
    items: [
      "MySQL",
      "MSSQL",
      "Git",
      "Auth0",
      "Posthog",
      "Relational Database Design",
    ],
  },
];

const experience: ExperienceItem[] = [
  {
    company: "Framer",
    role: "Product Designer",
    period: "2022 - Present",
    summary:
      "Shaping polished product experiences, motion systems, and visual direction for web-first launches.",
    shadowColor: "rgba(244, 114, 182, 0.18)",
  },
  {
    company: "Startups",
    role: "Design + Frontend",
    period: "5+ years",
    summary:
      "Worked across early-stage teams translating rough ideas into shippable interfaces and branded systems.",
    shadowColor: "rgba(134, 239, 172, 0.22)",
  },
  {
    company: "Independent",
    role: "Creative Technologist",
    period: "Ongoing",
    summary:
      "Building playful interactions, experiments, and portfolio pieces that mix UI craft with code.",
    shadowColor: "rgba(125, 211, 252, 0.22)",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-[40px]   px-6 py-10 sm:px-10 sm:py-14 dark:border-zinc-800 ">
        <div className="ml-auto max-w-3xl">
          <p className="font-short-stack text-sm uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
            About
          </p>

          <div className="mt-4 max-w-2xl">
            <h2 className="font-dongle text-6xl leading-none text-zinc-900 dark:text-zinc-50 sm:text-7xl">
              Links, skills, and experience.
            </h2>
            <p className="mt-4 text-lg leading-9 text-zinc-700 dark:text-zinc-300">
              Software developer with 2 years of hands-on experience building
              and shipping full-stack web and mobile applications. Specialising
              in .NET, React (React Native), Next.js, and Node.js, with
              practical experience integrating AI and LLM-powered features into
              production systems. Experienced in CI/CD pipelines and cloud-based
              deployment.
            </p>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.15fr]">
            <div className="space-y-10">
              <div>
                <h3 className="font-dongle text-5xl leading-none text-zinc-900 dark:text-zinc-50">
                  Links
                </h3>
                <div className="mt-5 flex flex-wrap gap-4">
                  {SocialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-zinc-900 bg-white text-zinc-900 transition-transform duration-200 hover:-translate-y-1 dark:border-zinc-100 dark:bg-zinc-950 dark:text-zinc-50"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-dongle text-5xl leading-none text-zinc-900 dark:text-zinc-50">
                  Skills
                </h3>
                <div className="mt-5 grid gap-4">
                  {skillGroups.map((group) => (
                    <section
                      key={group.title}
                      className="rounded-[28px] border-2 border-zinc-900 bg-white/80 p-5 dark:border-zinc-100 dark:bg-zinc-950/70"
                    >
                      <h4 className="font-short-stack text-sm uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                        {group.title}
                      </h4>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {group.items.map((skill) => (
                          <span
                            key={`${group.title}-${skill}`}
                            className="rounded-full border-2 border-zinc-900 px-4 py-2 font-short-stack text-sm text-zinc-900 dark:border-zinc-100 dark:text-zinc-100"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-dongle text-5xl leading-none text-zinc-900 dark:text-zinc-50">
                Experience
              </h3>
              <div className="mt-5 space-y-4">
                {experience.map((item) => (
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
    </section>
  );
}
