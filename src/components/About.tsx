import { Section } from './Section';
import { ScrollRevealText } from './ScrollRevealText';

export function About() {
  return (
    <Section id="about" className="flex flex-col items-center text-center">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#5272c6] mb-8">About Me</h2>
      <ScrollRevealText
        text="I'm Vasanth Kumar, a 14-year-old developer who builds apps that solve real problems — starting with my own. I'm obsessed with productivity, clean UI, and shipping things that actually work."
        className="text-2xl md:text-3xl lg:text-4xl leading-relaxed md:leading-snug max-w-4xl"
      />
    </Section>
  );
}
