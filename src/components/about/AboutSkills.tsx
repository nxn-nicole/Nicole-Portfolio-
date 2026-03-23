"use client";

import { motion } from "framer-motion";

export type SkillGroup = {
  title: string;
  items: string[];
};

export type CardRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export default function AboutSkills({
  title,
  skillGroups,
  activeTitle,
  onOpen,
}: {
  title: string;
  skillGroups: SkillGroup[];
  activeTitle: string | null;
  onOpen: (event: React.MouseEvent<HTMLDivElement>, group: SkillGroup) => void;
}) {
  return (
    <div>
      <h3 className="font-dongle text-5xl leading-none text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            onClick={(event) => onOpen(event, group)}
            className={`inline-flex w-fit cursor-pointer select-none rounded-2xl border-2 border-zinc-900 bg-white px-4 py-3 hover:bg-zinc-50 dark:border-zinc-100 dark:bg-zinc-950 dark:hover:bg-zinc-900 ${
              activeTitle === group.title
                ? "pointer-events-none invisible"
                : "visible"
            }`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: i * 0.08,
            }}
          >
            <p className="font-short-stack text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {group.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
