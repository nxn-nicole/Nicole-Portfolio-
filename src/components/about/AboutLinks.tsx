import { SocialLinks } from "./SocialLinks";

export default function AboutLinks() {
  return (
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
  );
}
