import { Section } from './Section';

export function About() {
  return (
    <Section id="about" className="flex flex-col items-center text-center">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#5272c6] mb-8">About Me</h2>
      <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed md:leading-snug font-light text-white/80 max-w-4xl">
        I'm Vasanth Kumar, a 14-year-old developer who builds apps that solve real problems — starting with my own. I'm obsessed with <span className="text-white font-medium">productivity</span>, <span className="text-white font-medium">clean UI</span>, and shipping things that actually work.
      </p>
    </Section>
  );
}
