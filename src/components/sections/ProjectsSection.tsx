import React from "react";
import { IconBrandGithub } from "@tabler/icons-react";

export function ProjectsSection() {
  return (
  <section id="projects" className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in-up">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Example Project Card */}
        <div className="bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-2xl p-6 flex flex-col border border-white/30 dark:border-neutral-800/60 hover:scale-[1.03] hover:shadow-indigo-200 dark:hover:shadow-indigo-900 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">A personal portfolio website built with React, Tailwind CSS, and cool animated backgrounds.</p>
          <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
            <IconBrandGithub size={20} /> View on GitHub
          </a>
        </div>
        {/* Add more project cards here */}
      </div>
    </section>
  );
}
