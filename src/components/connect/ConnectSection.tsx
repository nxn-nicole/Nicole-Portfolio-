"use client";

import { useState } from "react";
import content from "./connection-content.json";
import aboutContent from "@/components/about/about-content.json";
import AboutLinks from "@/components/about/AboutLinks";
import RoughLine from "@/components/projects/RoughLine";

export default function ConnectSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${content.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailto, "_blank");
  };

  return (
    <section className="w-full py-24 px-8">
      {/* Section Title */}
      <div className="flex items-center justify-center gap-5 mb-12">
        <RoughLine width={60} height={18} strokeWidth={2.5} />
        <h2 className="font-dongle text-6xl font-bold tracking-widest text-zinc-900 dark:text-zinc-50">
          {content.sectionTitle}
        </h2>
        <RoughLine width={60} height={18} strokeWidth={2.5} />
      </div>

      <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
        {/* Email */}
        <a
          href={`mailto:${content.email}`}
          className="font-short-stack text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors text-lg"
        >
          {content.email}
        </a>

        <AboutLinks links={aboutContent.links} />

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 mt-4"
        >
          <div className="flex gap-4">
            <input
              type="text"
              placeholder={content.form.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 outline-none focus:border-zinc-500 dark:focus:border-zinc-400 transition-colors"
            />
            <input
              type="email"
              placeholder={content.form.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 outline-none focus:border-zinc-500 dark:focus:border-zinc-400 transition-colors"
            />
          </div>
          <textarea
            placeholder={content.form.messagePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 outline-none focus:border-zinc-500 dark:focus:border-zinc-400 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-zinc-800 dark:bg-zinc-100 py-3 text-sm font-semibold text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            {content.form.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
