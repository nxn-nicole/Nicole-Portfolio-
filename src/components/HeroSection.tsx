import StickyNote from "./shared/StickyNote";

export default function HeroSection() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="font-dongle text-6xl font-bold text-zinc-900 dark:text-zinc-50">
        Hi, I&apos;m Nicole
      </h1>
      <p className="font-short-stack mt-2 text-2xl text-zinc-500 dark:text-zinc-400">
        A Software Engineer
      </p>
      <StickyNote
        text="Available for hiring"
        textSize={16}
        initialX={400}
        initialY={500}
        color="#b8ffbf"
        rotate={3}
      />

      <StickyNote
        text="👋"
        textSize={40}
        initialX={830}
        initialY={340}
        color="#FFF4B0"
        rotate={-6}
      />
    </section>
  );
}
