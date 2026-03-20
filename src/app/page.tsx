import AboutSection from "@/components/about/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="flex h-screen w-full flex-col items-center justify-center">
        <h1 className="font-dongle text-6xl font-bold text-zinc-900 dark:text-zinc-50">
          Hi, I&apos;m Nicole
        </h1>
        <p className="font-short-stack mt-2 text-2xl text-zinc-500 dark:text-zinc-400">
          A Software Engineer
        </p>
      </section>

      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
