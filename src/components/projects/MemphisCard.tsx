"use client";

import { useEffect, useRef, useState } from "react";

interface MemphisCardProps {
  title: string;
  description: string;
  backgroundColor: string;
  illustration: React.ReactNode;
  backIllustration: React.ReactNode;
}

export default function MemphisCard({
  title,
  description,
  backgroundColor,
  illustration,
  backIllustration,
}: MemphisCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleFlip = () => {
    setIsFlipped(true);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setIsFlipped(false);
      timeoutRef.current = null;
    }, 2000);
  };

  return (
    <button
      type="button"
      onClick={handleFlip}
      className="w-80 shrink-0 cursor-pointer text-left [perspective:1200px]"
    >
      <div
        className="relative h-[35rem] rounded-3xl transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl bg-zinc-100 [backface-visibility:hidden] dark:bg-zinc-900">
          <div className="px-6 pt-6 pb-4 h-60">
            <h3 className="mb-2 font-dongle text-5xl font-bold leading-tight text-zinc-900 dark:text-zinc-50">
              {title}
            </h3>
            <p className="font-short-stack leading-relaxed text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          </div>

          <div
            className="flex h-80 items-center justify-center rounded-3xl py-10"
            style={{ backgroundColor }}
          >
            {illustration}
          </div>
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl bg-zinc-100 [backface-visibility:hidden] dark:bg-zinc-900"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div
            className="flex h-full w-full items-center justify-center rounded-3xl p-10"
            style={{ backgroundColor }}
          >
            {backIllustration}
          </div>
        </div>
      </div>
    </button>
  );
}
