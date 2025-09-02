import { color } from "motion/react";
import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-16 px-4">
      <div className="rounded-2xl bg-white/60 dark:bg-neutral-900/60 shadow-xl backdrop-blur-md p-8 border border-white/30 dark:border-neutral-800/60">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in-up text-center" style={{color : "white"}}>About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0 flex flex-col items-center justify-center w-full md:w-auto">
            <img src="/pardhu.jpeg" alt="Pardhu" className="rounded-full w-32 h-32 md:w-40 md:h-40 shadow-lg object-cover mb-3" />
            {/* Cartoon: Laptop and rocket */}
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="32" width="36" height="10" rx="3" fill="#818cf8" />
              <rect x="16" y="18" width="24" height="16" rx="4" fill="#6366f1" />
              <rect x="20" y="22" width="16" height="8" rx="2" fill="#fff" />
              <polygon points="28,10 32,18 24,18" fill="#fbbf24" />
              <rect x="26" y="8" width="4" height="6" rx="2" fill="#fbbf24" />
              <polygon points="28,6 30,8 26,8" fill="#fde68a" />
            </svg>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 animate-fade-in-up delay-200 text-center md:text-left">
            I am an aspiring <b>Full Stack Developer</b> with a solid foundation in JavaScript, React.js, Python, and databases, 
            along with hands-on project experience through hackathons and personal projects. 
            I enjoy building responsive web applications, solving algorithmic problems, 
            and continuously learning new technologies. With a strong interest in scalable application development, 
            I am keen to contribute to impactful projects while growing as a developer in a collaborative team environment.
          </p>
        </div>
      </div>
    </section>
  );
}
