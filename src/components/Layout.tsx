import { motion, MotionValue, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MouseEvent, ReactNode, useRef } from 'react';

export function Magnetic({ children, strength = 0.5 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxImage({
  src,
  alt,
  scrollYProgress,
  range = [0, -100],
}: {
  src: string;
  alt: string;
  scrollYProgress: MotionValue<number>;
  range?: [number, number];
}) {
  const y = useTransform(scrollYProgress, [0, 1], range);

  return (
    <div className="overflow-hidden w-full h-full">
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover scale-110"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function RevealText({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <div className="overflow-hidden inline-block">
      <motion.span
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </div>
  );
}

export function SectionHeading({
  subtitle,
  title,
  description,
  light = false,
}: {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-8 md:mb-12">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`text-[10px] font-black uppercase tracking-[0.5em] mb-4 block ${light ? 'text-white/60' : 'text-brand-orange'}`}
      >
        {subtitle}
      </motion.span>
      <h2
        className={`text-3xl sm:text-5xl md:text-8xl font-display leading-[1.1] md:leading-[0.9] mb-6 md:mb-8 ${light ? 'text-white' : 'text-brand-dark'}`}
      >
        {title.split(' ').map((word, i) => (
          <span key={i} className="inline-block mr-[0.2em]">
            <RevealText delay={i * 0.05}>{word}</RevealText>
          </span>
        ))}
      </h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`max-w-xl text-base md:text-xl font-light leading-relaxed ${light ? 'text-white/60' : 'text-neutral-500'}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
