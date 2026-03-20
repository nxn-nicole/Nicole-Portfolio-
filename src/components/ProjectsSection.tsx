import RoughLine from "./RoughLine";

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
    </section>
  );
}
