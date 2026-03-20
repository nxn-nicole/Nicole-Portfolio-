interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  role,
  description,
  techStack,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-3xl  dark:bg-zinc-900 p-8 w-80 shrink-0 h-96">
      {/* Top */}
      <div>
        <span className="inline-block rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1  font-short-stack text-zinc-500 dark:text-zinc-400 mb-2">
          {role}
        </span>
        <h3 className="font-dongle text-7xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-200 hover:scale-110 origin-left"
          >
            {title}
          </a>
        </h3>
        <p className="mb-10 font-short-stack text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-short-stack text-zinc-600 transition-transform duration-200 hover:scale-105 dark:border-zinc-700 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
