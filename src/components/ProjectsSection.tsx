import ProjectCard from "./ProjectCard";
import RoughLine from "./RoughLine";

const projects = [
  {
    title: "BlotzTask",
    role: "Tech Lead",
    description:
      "A productivity app designed for people with ADHD — helping users break tasks into manageable steps and stay on track.",
    techStack: ["React Native", "Expo", ".NET", "Azure", "Auth0"],
    githubUrl: "https://github.com/sol-wizard/Blotz-Task-App",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full py-24 px-8">
      {/* Section Title */}
      <div className="flex items-center justify-center gap-5 mb-16">
        <RoughLine width={60} height={18} strokeWidth={2.5} />
        <h2 className="font-dongle text-6xl font-bold tracking-widest text-zinc-900 dark:text-zinc-50">
          Projects
        </h2>
        <RoughLine width={60} height={18} strokeWidth={2.5} />
      </div>

      {/* Project Cards */}
      <div className="flex gap-6 overflow-x-auto pb-4 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
