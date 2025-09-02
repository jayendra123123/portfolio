import React from "react";

export function AboutSection() {
  return (
  <section id="about" className="max-w-2xl mx-auto py-16 px-4 text-center">
      <div className="rounded-2xl bg-white/60 dark:bg-neutral-900/60 shadow-xl backdrop-blur-md p-8 border border-white/30 dark:border-neutral-800/60">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 animate-fade-in-up delay-200">
          I am an aspiring <b>Full Stack Developer</b> with a solid foundation in JavaScript, React.js, Python, and databases, along with hands-on project experience through hackathons and personal projects. I enjoy building responsive web applications, solving algorithmic problems, and continuously learning new technologies. With a strong interest in scalable application development, I am keen to contribute to impactful projects while growing as a developer in a collaborative team environment.
        </p>
      </div>
    </section>
  );
}
