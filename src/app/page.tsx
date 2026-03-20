import { Dongle, Short_Stack } from "next/font/google";

const dongle = Dongle({ subsets: ["latin"], weight: "700" });
const shortStack = Short_Stack({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="flex h-screen w-full flex-col items-center justify-center">
        <h1
          className={`${dongle.className} text-6xl font-bold text-zinc-900 dark:text-zinc-50`}
        >
          Hi, I'm Nicole
        </h1>
        <p
          className={`${shortStack.className} mt-2 text-2xl text-zinc-500 dark:text-zinc-400`}
        >
          A Software Engineer
        </p>
      </section>
    </main>
  );
}
