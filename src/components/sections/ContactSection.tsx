import React from "react";

export function ContactSection() {
  return (
  <section id="contact" className="max-w-2xl mx-auto py-16 px-4 text-center">
      <div className="rounded-2xl bg-white/60 dark:bg-neutral-900/60 shadow-xl backdrop-blur-md p-8 border border-white/30 dark:border-neutral-800/60">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Contact</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 animate-fade-in-up delay-200">
          Interested in working together or want to connect? Feel free to reach out!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg hover:from-pink-500 hover:to-indigo-500 transition-all animate-fade-in-up delay-300"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
