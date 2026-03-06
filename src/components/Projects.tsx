import { Section } from './Section';
import { ExternalLink, ArrowRight } from 'lucide-react';

export function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#5272c6] mb-12">Selected Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured Project - Flowlock */}
        <a
          href="https://flowlock-lime.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card group md:col-span-2 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start md:items-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#5272c6]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#5272c6]/20 transition-colors duration-500" />

          <div className="flex-1 z-10">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white">Flowlock</h3>
              <span className="px-3 py-1 rounded-full bg-[#5272c6]/20 text-[#5272c6] text-xs font-semibold uppercase tracking-wider border border-[#5272c6]/30">Featured</span>
            </div>
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl">
              A deep work operating system that guides you through focus, guided breaks, and goal alignment. Built to eliminate the gap where focus dies.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
              Visit Flowlock <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </a>

        {/* Coorse Web Development Agency */}
        <a
          href="https://coorse.online"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card group rounded-3xl p-8 flex flex-col relative overflow-hidden hover:bg-white/5 transition-colors cursor-pointer"
        >
          <div className="flex-1 z-10 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-3">Coorse Agency</h3>
            <p className="text-white/50 leading-relaxed mb-8">
              A modern, high-converting website for a web development agency, showcasing sleek design and dynamic user experience.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors mt-auto">
              Visit Website <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </a>

        {/* Luminous Habit Tracker */}
        <a
          href="https://luminous-froyo-0620db.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card group rounded-3xl p-8 flex flex-col relative overflow-hidden hover:bg-white/5 transition-colors cursor-pointer"
        >
          <div className="flex-1 z-10 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-3">Habit Tracker</h3>
            <p className="text-white/50 leading-relaxed mb-8">
              A beautifully designed personal habit tracking application focused on daily streaks, progress, and maintaining consistent routines.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors mt-auto">
              Visit Tracker <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </a>
      </div>
    </Section>
  );
}
