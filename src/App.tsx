import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] selection:bg-[#5272c6]/30 selection:text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} Vasanth Kumar. Built with React & Tailwind.
        </p>
      </footer>
    </main>
  );
}
