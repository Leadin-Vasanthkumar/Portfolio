'use client'

import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";


// Tech Stack Data
// Tech Stack Data
const techStack = [
  // Core Languages
  { name: "JavaScript", category: "language", icon: "/tech-icons/javascript.svg", color: "bg-yellow-500" },
  { name: "TypeScript", category: "language", icon: "/tech-icons/typescript.svg", color: "bg-blue-600" },
  { name: "Python", category: "language", icon: "/tech-icons/python.svg", color: "bg-blue-400" },
  { name: "Java", category: "language", icon: "/tech-icons/java.svg", color: "bg-red-500" },
  { name: "SQL", category: "language", icon: "/tech-icons/sql.svg", color: "bg-orange-500" },
  
  // Frameworks & Libraries
  { name: "React.js", category: "framework", icon: "/tech-icons/react.svg", color: "bg-blue-300" },
  { name: "Next.js", category: "framework", icon: "/tech-icons/nextjs.svg", color: "bg-black" },
  { name: "Node.js", category: "framework", icon: "/tech-icons/nodejs.svg", color: "bg-green-600" },
  { name: "Tailwind CSS", category: "framework", icon: "/tech-icons/tailwind.svg", color: "bg-sky-400" },

  // Vibe Coding & AI Tools
  { name: "Claude", category: "ai", icon: "/tech-icons/claude.webp", color: "bg-orange-700" },
  { name: "Gemini", category: "ai", icon: "/tech-icons/gemini.png", color: "bg-blue-500" },
  { name: "Lovable.dev", category: "tool", icon: "/tech-icons/lovable.png", color: "bg-purple-500" },
  { name: "Cursor", category: "tool", icon: "/tech-icons/cursor.png", color: "bg-neutral-800" },
  { name: "Figma", category: "design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "bg-fuchsia-500" },
  { name: "Google AI Studio", category: "ai", icon: "/tech-icons/aistudio.png", color: "bg-blue-400" },
  { name: "OpenRouter", category: "tool", icon: "/tech-icons/openrouter.png", color: "bg-neutral-900" },
  { name: "Antigravity", category: "ai", icon: "/tech-icons/antigravity.png", color: "bg-violet-600" },
  { name: "Code Rabbit", category: "tool", icon: "/tech-icons/coderabbit.png", color: "bg-orange-400" },
  { name: "Supabase", category: "database", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg", color: "bg-emerald-500" },
  { name: "Firebase", category: "database", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg", color: "bg-amber-500" },
  { name: "Github", category: "tool", icon: "/tech-icons/github-new.png", color: "bg-zinc-800" },
  { name: "Git", category: "tool", icon: "/tech-icons/Git.svg", color: "bg-orange-600" },
  { name: "Docker", category: "tool", icon: "/tech-icons/docker.svg", color: "bg-sky-600" },
];

interface TechIconProps {
  tech: typeof techStack[0];
  className?: string;
}

function TechIcon({ tech, className = "" }: TechIconProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:scale-105 min-w-[80px] sm:min-w-[90px] group ${className}`}>
      {/* Icon Container */}
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 mb-1.5 sm:mb-2 flex items-center justify-center">
        {/* Try to load actual SVG, fallback to grey placeholder */}
        <div className="w-full h-full relative">
          <Image
            src={tech.icon}
            alt={tech.name}
            width={40}
            height={40}
            className="w-full h-full object-contain grayscale opacity-70 hover:opacity-90 transition-opacity"
            onError={(e) => {
              // If image fails to load, replace with grey placeholder
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full ${tech.color} rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    ${tech.name.charAt(0)}
                  </div>
                `;
              }
            }}
          />
        </div>
      </div>
      
      {/* Tech Name */}
      <span className="text-[10px] sm:text-xs text-center font-medium text-gray-700 dark:text-gray-300 leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {tech.name}
      </span>
    </div>
  );
}

interface TechStackMarqueeProps {
  className?: string;
}

export default function TechStackMarquee({ className = "" }: TechStackMarqueeProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Title - matching other component styles */}
      <div className="mb-4">
        <h2 className="text-base font-[family-name:var(--font-instrument-serif)] sm:text-xl mb-3 opacity-20 mt-4 sm:mt-6 -tracking-[0.01em]">
          Stack I use
        </h2>
        <p className="text-sm sm:text-base dark:text-white/70 text-black/70 leading-relaxed">
          Technologies I work with to build products that solve real problems
        </p>
      </div>

      {/* Single Marquee Container */}
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:80s] [--gap:1rem]">
          {techStack.map((tech, index) => (
            <TechIcon key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </Marquee>

        {/* Fade edges for better visual effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-linear-to-r from-white dark:from-zinc-900 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-linear-to-l from-white dark:from-zinc-900 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
