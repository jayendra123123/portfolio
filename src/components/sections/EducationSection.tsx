import React from "react";

export function EducationSection() {
  return (
    <section id="education" className="max-w-3xl mx-auto py-16 px-4">
      <div className="rounded-2xl bg-white/70 dark:bg-neutral-900/70 shadow-2xl backdrop-blur-md p-8 border border-white/30 dark:border-neutral-800/60">
          <div className="flex flex-col items-center mb-6 animate-fade-in-up">
            {/* Creative adventure cartoon SVG */}
            <svg width="140" height="110" viewBox="0 0 140 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Ground */}
              <ellipse cx="70" cy="104" rx="60" ry="8" fill="#bbf7d0" />
              {/* Mountains */}
              <polygon points="30,104 55,60 80,104" fill="#a5b4fc" />
              <polygon points="60,104 90,50 120,104" fill="#818cf8" />
              <polygon points="90,104 110,70 130,104" fill="#fbbf24" />
              {/* Sun */}
              <circle cx="30" cy="30" r="12" fill="#fde68a" />
              {/* Backpack */}
              <rect x="62" y="80" width="16" height="18" rx="6" fill="#f59e42" stroke="#fff" strokeWidth="2" />
              <rect x="66" y="90" width="8" height="6" rx="2" fill="#fff" opacity=".7" />
              {/* Book */}
              <rect x="100" y="85" width="12" height="8" rx="2" fill="#fff" stroke="#6366f1" strokeWidth="1.5" />
              <rect x="104" y="87" width="4" height="4" rx="1" fill="#6366f1" />
              {/* Character (head) */}
              <circle cx="70" cy="70" r="10" fill="#6366f1" />
              {/* Eyes */}
              <ellipse cx="67" cy="72" rx="1.5" ry="2" fill="#fff" />
              <ellipse cx="73" cy="72" rx="1.5" ry="2" fill="#fff" />
              {/* Smile */}
              <path d="M68 76 Q70 78 72 76" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              {/* Adventure flag */}
              <rect x="85" y="60" width="2.5" height="18" rx="1" fill="#6366f1" />
              <polygon points="87,60 97,65 87,70" fill="#fbbf24" />
            </svg>
          </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center animate-fade-in-up education-section-title" style={{color : "white"}}>Education</h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-900 rounded-xl p-6 shadow-lg border border-white/20 dark:border-neutral-800/40">
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto mb-4 md:mb-0">
              {/* Cartoon: Graduation cap and scroll */}
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="30" cy="52" rx="20" ry="5" fill="#a5b4fc" />
                <rect x="18" y="36" width="24" height="8" rx="3" fill="#fde68a" stroke="#fbbf24" strokeWidth="2" />
                <rect x="25" y="10" width="10" height="18" rx="3" fill="#6366f1" />
                <polygon points="30,6 50,18 10,18" fill="#6366f1" />
                <circle cx="30" cy="18" r="2" fill="#fbbf24" />
                <rect x="28" y="44" width="4" height="8" rx="2" fill="#fbbf24" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-1">VIGNAN’S INSTITUTE OF INFORMATION TECHNOLOGY</h3>
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Bachelor of Engineering, Computer Science and Engineering (CSE)</div>
              <div className="flex flex-wrap gap-2 items-center mb-1">
                <span className="bg-indigo-200 text-indigo-800 text-xs font-semibold px-2 py-1 rounded">CGPA: 8.82/10</span>
                <span className="bg-pink-200 text-pink-800 text-xs font-semibold px-2 py-1 rounded">2022-2026</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-gradient-to-r from-blue-100 via-cyan-100 to-emerald-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-900 rounded-xl p-6 shadow-lg border border-white/20 dark:border-neutral-800/40">
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto mb-4 md:mb-0">
              {/* Cartoon: School building and tree */}
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="30" cy="54" rx="20" ry="5" fill="#bbf7d0" />
                <rect x="15" y="30" width="30" height="18" rx="4" fill="#60a5fa" />
                <rect x="25" y="40" width="10" height="8" rx="2" fill="#fbbf24" />
                <rect x="28" y="44" width="4" height="4" rx="1" fill="#fff" />
                <polygon points="30,18 48,30 12,30" fill="#2563eb" />
                <circle cx="48" cy="38" r="5" fill="#34d399" />
                <rect x="46" y="43" width="4" height="6" rx="2" fill="#10b981" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-1">ST JUDE’S ENGLISH MEDIUM PRIMARY AND HIGH SCHOOL</h3>
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">10+2</div>
              <div className="flex flex-wrap gap-2 items-center mb-1">
                <span className="bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded">CGPA: 9.62/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
