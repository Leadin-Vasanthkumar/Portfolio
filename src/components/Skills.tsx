import { Section } from './Section';
import { Code2, Server, Smartphone, PenTool } from 'lucide-react';

const skills = [
  { name: 'React/Next.js', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'Flutter', icon: Smartphone },
  { name: 'UI/UX Design', icon: PenTool },
];

export function Skills() {
  return (
    <Section id="skills" className="flex flex-col items-center">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#5272c6] mb-12 text-center">Core Skills</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div 
              key={skill.name}
              className="glass-card group rounded-2xl p-6 flex flex-col items-center justify-center gap-4 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#5272c6]/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-6 h-6 text-white/60 group-hover:text-[#5272c6] transition-colors" />
              </div>
              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
