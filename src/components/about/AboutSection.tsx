import Image from "next/image";
import AboutLinks from "./AboutLinks";
import AboutSkills from "./AboutSkills";
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
    shadowColor: "rgba(246, 157, 200)",
  },
  {
    company: "Startups",
    role: "Design + Frontend",
    period: "5+ years",
    summary:
      "Worked across early-stage teams translating rough ideas into shippable interfaces and branded systems.",
    shadowColor: "rgba(162, 210, 239)",
  },
  {
    company: "Independent",
    role: "Creative Technologist",
    period: "Ongoing",
    summary:
      "Building playful interactions, experiments, and portfolio pieces that mix UI craft with code.",
    shadowColor: "rgba(182, 218, 109)",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-[40px] px-6 py-10 sm:px-10 sm:py-14 dark:border-zinc-800">
        <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-full border-4 border-black bg-white p-1 dark:border-zinc-100 dark:bg-zinc-950">
              <Image
                src="/linkedin-photo.jpeg"
                alt="Nicole profile photo"
                width={240}
                height={240}
                className="h-48 w-48 rounded-full object-cover sm:h-56 sm:w-56"
                priority
              />
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="font-short-stack text-sm uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              About
            </p>

            <div className="mt-4 max-w-2xl">
              <h2 className="font-dongle text-6xl leading-none text-zinc-900 dark:text-zinc-50 sm:text-7xl">
                Links, skills, and experience.
              </h2>
              <p className="font-short-stack mt-4 text-lg leading-9 text-zinc-700 dark:text-zinc-300">
                I build full-stack web and mobile applications with a focus on
                intuitive user experiences and AI-powered features. Passionate
                about turning complex ideas into clean, functional products.
              </p>
            </div>

            <div className="flex flex-row mt-12 gap-10 ">
              <div className="space-y-10">
                <AboutLinks />
                <AboutSkills skillGroups={skillGroups} />
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
      </div>
    </section>
  );
}
