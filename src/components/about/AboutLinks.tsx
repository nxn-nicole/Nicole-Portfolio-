import { socialLinkIcons } from "./SocialLinks";

type AboutLink = {
  label: string;
  href: string;
};

export default function AboutLinks({
  title,
  links,
}: {
  title?: string;
  links: AboutLink[];
}) {
  return (
    <div>
      {title ? (
        <h3 className="font-dongle text-5xl leading-none text-zinc-900 dark:text-zinc-50">
          {title}
        </h3>
      ) : null}
      <div className="mt-5 flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-zinc-900 bg-white text-zinc-900 transition-transform duration-200 hover:-translate-y-1 dark:border-zinc-100 dark:bg-zinc-950 dark:text-zinc-50"
          >
            {socialLinkIcons[link.label]}
          </a>
        ))}
      </div>
    </div>
  );
}
