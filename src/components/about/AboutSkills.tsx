type SkillGroup = {
  title: string;
  items: string[];
};

export default function AboutSkills({
  skillGroups,
}: {
  skillGroups: SkillGroup[];
}) {
  return (
    <div>
      <h3 className="font-dongle text-5xl leading-none text-zinc-900 dark:text-zinc-50">
        Skills
      </h3>
      <div className="mt-5 flex flex-wrap gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="inline-flex w-fit max-w-full rounded-2xl border-2 border-zinc-900 bg-white px-4 py-3 dark:border-zinc-100 dark:bg-zinc-950"
          >
            <p className="font-short-stack whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100">
              {group.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
