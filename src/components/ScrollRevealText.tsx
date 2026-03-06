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
        offset: ['start 0.95', 'end 0.6'],
    });

    const chars = text.split('');

    return (
        <p ref={containerRef} className={className}>
            {chars.map((char, i) => {
                // Each char occupies a portion of 0–0.85 of total progress
                const start = (i / chars.length) * 0.85;
                const end = ((i + 1) / chars.length) * 0.85;

                return (
                    <Char key={i} progress={scrollYProgress} range={[start, end]}>
                        {char}
                    </Char>
                );
            })}
        </p>
    );
}
