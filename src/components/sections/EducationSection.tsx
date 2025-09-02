import React from "react";

export function EducationSection() {
  return (
    <section id="education" className="max-w-2xl mx-auto py-16 px-4 text-center">
      <div className="rounded-2xl bg-white/60 dark:bg-neutral-900/60 shadow-xl backdrop-blur-md p-8 border border-white/30 dark:border-neutral-800/60">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Education</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 animate-fade-in-up delay-200">
          {/* Add your education details here */}
          Bachelor of Technology in Computer Science<br />
          XYZ University, 2020 - 2024
        </p>
      </div>
    </section>
  );
}
