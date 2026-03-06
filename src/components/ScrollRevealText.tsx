import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface CharProps {
    children: string;
    progress: any;
    range: [number, number];
}

function Char({ children, progress, range }: CharProps) {
    const opacity = useTransform(progress, range, [0.15, 1]);
    const fontWeight = useTransform(progress, range, [300, 600]);

    // Spaces need to be preserved as actual space characters
    if (children === ' ') {
        return <span className="inline">{' '}</span>;
    }

    return (
        <motion.span
            style={{ opacity, fontWeight }}
            className="inline text-white transition-none"
        >
            {children}
        </motion.span>
    );
}

interface ScrollRevealTextProps {
    text: string;
    className?: string;
}

export function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
    const containerRef = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 0.95', 'end 0.55'],
    });

    const chars = text.split('');

    return (
        <p ref={containerRef} className={className}>
            {chars.map((char, i) => {
                // Each char occupies a portion of the full 0–1 progress range
                const start = i / chars.length;
                const end = (i + 1) / chars.length;

                return (
                    <Char key={i} progress={scrollYProgress} range={[start, end]}>
                        {char}
                    </Char>
                );
            })}
        </p>
    );
}
