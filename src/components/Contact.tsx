import { Section } from './Section';
import { Mail, Youtube } from 'lucide-react';

export function Contact() {
  return (
    <Section id="contact" className="flex flex-col items-center text-center pb-32">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Want to build something together?
      </h2>
      
      <div className="flex flex-col items-center gap-8">
        <a 
          href="mailto:contact@vasanthkumar.work" 
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-base font-semibold hover:scale-105 transition-transform duration-300"
        >
          <Mail className="w-5 h-5" />
          <span>Say Hello</span>
          <div className="absolute inset-0 rounded-full ring-2 ring-white/20 ring-offset-2 ring-offset-[#0a0a0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>

        <div className="flex items-center gap-6 mt-4">
          <a 
            href="https://x.com/VasanthKumar_16" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#5272c6]/20 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="X (Twitter)"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a 
            href="https://www.youtube.com/@vasanthkumar_entrepreneur" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-[#5272c6]/20 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="YouTube"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </Section>
  );
}
