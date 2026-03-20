interface MemphisCardProps {
  title: string;
  description: string;
  backgroundColor: string;
  illustration: React.ReactNode;
}

export default function MemphisCard({
  title,
  description,
  backgroundColor,
  illustration,
}: MemphisCardProps) {
  return (
    <div className="flex flex-col rounded-3xl overflow-hidden w-80 shrink-0 bg-zinc-100 dark:bg-zinc-900">
      {/* Text area */}
      <div className="px-6 pt-6 pb-4">
        <h3 className="font-dongle text-5xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight mb-2">
          {title}
        </h3>
        <p className="font-short-stack text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Illustration area */}
      <div
        className="flex items-center justify-center rounded-3xl py-10 h-80"
        style={{ backgroundColor }}
      >
        {illustration}
      </div>
    </div>
  );
}
