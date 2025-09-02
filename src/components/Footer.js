import React from "react";
import { IconBrandGithub } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 py-8 mt-12 border-t border-white/30 dark:border-neutral-800/60">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <div className="text-center md:text-left text-gray-700 dark:text-gray-300 text-base font-medium">
          <div className="mb-1">Gmail: <a href="mailto:paardhavlaveti@gmail.com" className="underline hover:text-indigo-600">paardhavlaveti@gmail.com</a></div>
          <div>Number: <span className="font-semibold">00000000</span></div>
        </div>
        <div className="flex items-center gap-6 mt-2 md:mt-0">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-pink-400 transition-colors">
            <IconBrandGithub size={28} />
          </a>
          <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" width={28} height={28} style={{borderRadius: '6px'}} />
          </a>
          <a href="https://www.codechef.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT822cl64pmLPm1DsJoGj8bZ1qLw3z7Ps98Wg&s" alt="CodeChef" width={28} height={28} style={{borderRadius: '6px'}} />
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 dark:text-gray-600 mt-4">&copy; {new Date().getFullYear()} paardhavlaveti. All rights reserved.</div>
    </footer>
  );
}
