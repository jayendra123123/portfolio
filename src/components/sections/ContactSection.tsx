import React from "react";

export function ContactSection() {
  return (
    <section id="contact" className="max-w-2xl mx-auto py-16 px-4 text-center">
      <div className="rounded-3xl bg-gradient-to-br from-pink-100 via-indigo-100 to-violet-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 shadow-2xl backdrop-blur-2xl p-10 border-2 border-white/40 dark:border-neutral-800/70 flex flex-col items-center">
        <div className="mb-6 animate-fade-in-up">
          {/* Cartoon SVG illustration */}
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="60" cy="100" rx="40" ry="12" fill="#e0e7ff" />
            <circle cx="60" cy="60" r="40" fill="#a5b4fc" />
            <ellipse cx="60" cy="80" rx="22" ry="10" fill="#fff" />
            <circle cx="48" cy="55" r="5" fill="#fff" />
            <circle cx="72" cy="55" r="5" fill="#fff" />
            <ellipse cx="48" cy="57" rx="2" ry="2.5" fill="#6366f1" />
            <ellipse cx="72" cy="57" rx="2" ry="2.5" fill="#6366f1" />
            <path d="M50 70 Q60 80 70 70" stroke="#6366f1" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <ellipse cx="60" cy="45" rx="12" ry="6" fill="#fff" opacity=".7" />
            <ellipse cx="60" cy="45" rx="8" ry="3" fill="#a5b4fc" opacity=".5" />
          </svg>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fade-in-up bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">Let's Connect!</h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 animate-fade-in-up delay-200 font-semibold">
          Want to work together, chat tech, or just say hi? <br className="hidden sm:block" />
          Drop me a message and let’s create something awesome!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 via-indigo-500 to-violet-500 text-white rounded-full font-bold shadow-xl hover:from-indigo-500 hover:to-pink-500 transition-all animate-fade-in-up delay-300 text-lg tracking-wide border-2 border-white/30 dark:border-neutral-800/60"
        >
          ✉️ Email Me
        </a>
      </div>
    </section>
  );
}
