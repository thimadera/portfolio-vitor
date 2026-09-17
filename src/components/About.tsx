import { motion, useScroll } from 'motion/react';
import { useRef } from 'react';
import { ParallaxImage, SectionHeading } from './Layout';

interface AboutProps {
  content: {
    subtitle: string;
    title: string;
    description: string;
    experienceYears: string;
    experienceLabel: string;
    mainImage: string;
    secondaryImage: string;
    stats: {
      value: string;
      label: string;
      unit: string;
    };
    features: {
      title: string;
      description: string;
    }[];
  };
}

export function About({ content }: AboutProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  return (
    <section id="sobre" ref={container} className="py-16 md:py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 text-[clamp(10rem,40vw,25rem)] font-display font-black text-brand-dark/2 pointer-events-none select-none whitespace-nowrap">
        Vitor Madeira
      </div>

      <div className="max-w-360 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <SectionHeading
              subtitle={content.subtitle}
              title={content.title}
              description={content.description}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {content.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-px bg-brand-orange" />
                  <h4 className="text-2xl font-display italic">{feature.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="aspect-4/3 md:aspect-16/11 rounded-[40px] md:rounded-[80px] overflow-hidden shadow-2xl shadow-brand-orange/5"
              >
                <ParallaxImage
                  src={content.mainImage}
                  alt="Vitor em ação"
                  scrollYProgress={scrollYProgress}
                  range={[0, -50]}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[40px] shadow-2xl hidden md:block"
              >
                <div className="text-5xl font-display font-bold text-brand-orange mb-2">
                  {content.experienceYears}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                  {content.experienceLabel.split(' ').map((w, i) => (
                    <span key={i} className="block">
                      {w}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-20 -left-20 hidden xl:block w-72 aspect-square rounded-[60px] overflow-hidden border-12 border-brand-cream shadow-2xl"
              >
                <ParallaxImage
                  src={content.secondaryImage}
                  alt="Detail"
                  scrollYProgress={scrollYProgress}
                  range={[0, -100]}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
