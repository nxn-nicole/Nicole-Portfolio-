interface AboutExperienceCardProps {
  company: string;
  role: string;
  period: string;
  summary: string;
  shadowColor: string;
}

export default function AboutExperienceCard({
  company,
  role,
  period,
  summary,
  shadowColor,
}: AboutExperienceCardProps) {
  return (
    <article
      className="rounded-[28px] border-2 border-zinc-900 bg-white/90 p-6 dark:border-zinc-100 dark:bg-zinc-950/80"
      style={{ boxShadow: `8px 8px 0 ${shadowColor}` }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h4 className="font-dongle text-4xl leading-none text-zinc-900 dark:text-zinc-50">
            {company}
          </h4>
          <p className="font-short-stack text-sm text-zinc-500 dark:text-zinc-400">
            {role}
          </p>
        </div>
        <span className="rounded-full bg-zinc-100 px-3 py-1 font-short-stack text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
          {period}
        </span>
      </div>
      <p className="mt-4 font-short-stack text-sm leading-7 text-zinc-600 dark:text-zinc-300">
        {summary}
      </p>
    </article>
  );
}
