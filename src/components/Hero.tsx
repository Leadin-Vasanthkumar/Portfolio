import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Animated Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5272c6]/20 rounded-full blur-[120px] animate-blob mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/3 w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            Vasanth Kumar
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-white/60 font-medium tracking-wide mb-12"
        >
          Builder. <span className="text-[#5272c6]">14.</span> Turning ideas into products.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToProjects}
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#5272c6]/50 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10">See My Work</span>
          <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5272c6]/0 via-[#5272c6]/10 to-[#5272c6]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.button>
      </div>
    </section>
  );
}
