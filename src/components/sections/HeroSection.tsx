import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision.tsx";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[60vh] flex items-center justify-center px-2 sm:px-4 py-8">
      <BackgroundBeamsWithCollision className="">
        <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 drop-shadow-xl animate-fade-in-up leading-tight">
            I’m Levati Pardhu sai Ganesh
          </h1>
          <h2 className="mt-3 text-base xs:text-lg sm:text-2xl md:text-3xl font-semibold text-center text-black dark:text-white/90 tracking-tight animate-fade-in-up delay-150 leading-snug">
            Aspiring Full Stack Developer
          </h2>
          <p className="mt-5 max-w-full sm:max-w-2xl text-sm xs:text-base sm:text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 font-medium animate-fade-in-up delay-300 shadow-lg rounded-xl bg-white/70 dark:bg-neutral-900/70 px-3 xs:px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-md">
            I’m an aspiring Full Stack Developer with experience in <span className="font-semibold text-indigo-600 dark:text-indigo-400">React.js</span>, <span className="font-semibold text-green-700 dark:text-green-400">Node.js</span>, <span className="font-semibold text-yellow-700 dark:text-yellow-400">Python</span>, and <span className="font-semibold text-emerald-700 dark:text-emerald-400">MongoDB</span>. I enjoy solving problems, building responsive web applications, and continuously learning new technologies to create impactful solutions.
          </p>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}
