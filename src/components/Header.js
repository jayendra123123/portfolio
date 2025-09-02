import React from "react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 dark:bg-neutral-900/30 backdrop-blur-md shadow-none border-b border-white/20 dark:border-neutral-800/40">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="font-bold text-xl text-indigo-600 dark:text-indigo-400 tracking-tight">Jayen</div>
        <ul className="flex gap-6 text-base font-medium">
          <li><a href="#home" className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-pink-400 transition-colors">Home</a></li>
          <li><a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-pink-400 transition-colors">Projects</a></li>
          <li><a href="#about" className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-pink-400 transition-colors">About</a></li>
          <li><a href="#education" className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-pink-400 transition-colors">Education</a></li>
          <li><a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-pink-400 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
