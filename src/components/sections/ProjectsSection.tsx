import React from "react";
import { IconBrandGithub } from "@tabler/icons-react";

export function ProjectsSection() {
  return (
  <section id="projects" className="max-w-4xl mx-auto py-16 px-4">
    <div className="flex flex-col items-center mb-2 animate-fade-in-up">
      {/* Cartoon: Lightbulb and gears for creativity */}
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="54" rx="20" ry="5" fill="#fbbf24" />
        <circle cx="30" cy="28" r="14" fill="#fde68a" stroke="#fbbf24" strokeWidth="2" />
        <rect x="26" y="42" width="8" height="8" rx="3" fill="#6366f1" />
        <rect x="28" y="50" width="4" height="4" rx="2" fill="#818cf8" />
        <circle cx="18" cy="18" r="3" fill="#818cf8" />
        <circle cx="42" cy="16" r="2.5" fill="#6366f1" />
        <circle cx="46" cy="34" r="2" fill="#818cf8" />
        <circle cx="16" cy="36" r="2" fill="#6366f1" />
      </svg>
    </div>
    <h2 className="projects-section-title text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in-up">My Creations</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Student Attendance Tracking System */}
        <div className="project-card bg-white/80 dark:bg-neutral-900/80 rounded-2xl p-6 flex flex-col border border-white/30 dark:border-neutral-800/60">
          <div className="flex items-center justify-center mb-3">
            {/* Cartoon: Serverless cloud and code */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="24" cy="40" rx="18" ry="5" fill="#a5b4fc" />
              <ellipse cx="16" cy="30" rx="7" ry="7" fill="#fbbf24" />
              <ellipse cx="32" cy="32" rx="10" ry="10" fill="#818cf8" />
              <rect x="20" y="18" width="8" height="8" rx="2" fill="#fff" />
              <rect x="23" y="21" width="2" height="2" rx="1" fill="#6366f1" />
              <rect x="25" y="21" width="2" height="2" rx="1" fill="#6366f1" />
              <rect x="23" y="23" width="4" height="1.5" rx="0.75" fill="#6366f1" />
            </svg>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="project-tag">AWS Lambda</span>
            <span className="project-tag">Python</span>
            <span className="project-tag">WebSocket</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">
            <b>Motivation:</b> Simplified the time-consuming manual attendance process, especially in areas with unreliable internet.
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 text-sm space-y-1">
            <li>Python backend on AWS Lambda scrapes and retrieves attendance data directly.</li>
            <li>Secure login with AES encryption; BeautifulSoup for efficient HTML parsing.</li>
            <li>Real-time summaries and daily updates for nearly 2,000 daily users (avg. 5 requests/user/day).</li>
            <li>Zero operational cost using serverless; 1.5-2s average response time.</li>
          </ul>
          {/* <a href="#" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline hover:text-pink-500 dark:hover:text-pink-400 transition-colors"><IconBrandGithub size={20} /> View on GitHub</a> */}
        </div>
        {/* Movie Review Platform */}
        <div className="project-card bg-white/80 dark:bg-neutral-900/80 rounded-2xl p-6 flex flex-col border border-white/30 dark:border-neutral-800/60">
          <div className="flex items-center justify-center mb-3">
            {/* Cartoon: Movie clapper and stars */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="24" cy="40" rx="18" ry="5" fill="#fbbf24" />
              <rect x="12" y="18" width="24" height="14" rx="4" fill="#6366f1" />
              <rect x="12" y="14" width="24" height="6" rx="2" fill="#818cf8" />
              <rect x="14" y="16" width="4" height="2" rx="1" fill="#fff" />
              <rect x="20" y="16" width="4" height="2" rx="1" fill="#fff" />
              <rect x="26" y="16" width="4" height="2" rx="1" fill="#fff" />
              <rect x="32" y="16" width="4" height="2" rx="1" fill="#fff" />
              <polygon points="18,32 20,36 22,32" fill="#fde68a" />
              <polygon points="26,32 28,36 30,32" fill="#fde68a" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-400">CineScope: Movie Review Platform</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="project-tag">React</span>
            <span className="project-tag">Tailwind CSS</span>
            <span className="project-tag">MongoDB</span>
            <span className="project-tag">JWT</span>
            <span className="project-tag">TMDB API</span>
          </div>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 text-sm space-y-1">
            <li>Fully responsive movie review web app with real-time movie data from TMDB API.</li>
            <li>Secure user authentication with JWT for personalized experiences.</li>
            <li>Intuitive UI/UX for seamless navigation and engagement.</li>
            <li>Planned: smarter recommendations and social features (reviews, sharing).</li>
          </ul>
          {/* <a href="#" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline hover:text-pink-500 dark:hover:text-pink-400 transition-colors"><IconBrandGithub size={20} /> View on GitHub</a> */}
        </div>
      </div>
    </section>
  );
}
