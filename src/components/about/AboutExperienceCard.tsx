import LinkIcon from "./LinkIcon";

type ExperienceLink = {
  label: string;
  href: string;
};

interface AboutExperienceCardProps {
  company: string;
  role: string;
  period: string;
  summary: string;
  shadowColor: string;
  links?: ExperienceLink[];
}

export default function AboutExperienceCard({
  company,
  role,
  period,
  summary,
  shadowColor,
  links = [],
}: AboutExperienceCardProps) {
  return (
    <article
      className="rounded-[28px] border-2 border-zinc-900 bg-white/90 p-6 dark:border-zinc-100 dark:bg-zinc-950/80"
      style={{ boxShadow: `8px 8px 0 ${shadowColor}` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col">
          <h4 className="font-dongle text-4xl leading-none text-zinc-900 dark:text-zinc-50">
            {company}
          </h4>
          <p className="font-short-stack text-sm text-zinc-500 dark:text-zinc-400">
            {role}
          </p>
          <span className="w-fit mt-2 rounded-full bg-zinc-100 px-3 py-1 font-short-stack text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
            {period}
          </span>
        </div>
        <div className="flex flex-col items-end gap-3">
          {links.length > 0 ? (
            <div className="flex items-center gap-2">
              {links.map((link) => (
                <a
                  key={`${company}-${link.label}`}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center text-zinc-900 transition-transform duration-200 hover:-translate-y-0.5 dark:text-zinc-100"
                >
                  <LinkIcon className="h-7 w-7" />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <p className="mt-4 font-short-stack text-sm leading-7 text-zinc-600 dark:text-zinc-300">
        {summary}
      </p>
    </article>
  );
}
