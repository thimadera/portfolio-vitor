import { ArrowDownRight, Instagram } from 'lucide-react';
import { motion, MotionValue, useTransform } from 'motion/react';
import { HeroContent } from '../types';
import { Magnetic } from './Layout';

interface HeroProps {
  content: HeroContent;
  scrollYProgress: MotionValue<number>;
  whatsapp: string;
  socialLinks: {
    instagram: string;
  };
}

export function Hero({ content, scrollYProgress, whatsapp, socialLinks }: HeroProps) {
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const altText = `Retrato profissional de Vitor Madeira: ${content.description.substring(0, 50)}...`;

  return (
    <section
      id="início"
      className="relative h-screen grid items-center overflow-hidden bg-brand-dark"
    >
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y }} className="w-full h-full opacity-40">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            src={content.image}
            alt="Fundo artístico sugerindo beleza e transformação"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid grid-cols-[auto_1fr] items-center gap-4 mb-8">
                <span className="w-12 h-px bg-brand-orange" />
                <span className="text-brand-orange font-mono text-[10px] tracking-[0.5em] uppercase">
                  {content.badge}
                </span>
              </div>
              <h1 className="text-[clamp(3.5rem,14vw,11rem)] font-display text-white leading-[0.9] tracking-tighter mb-8 md:mb-12">
                {content.title} <br />
                <span className="italic font-normal text-brand-orange">{content.titleItalic}</span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start md:items-center gap-8 md:gap-12">
                <Magnetic>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-flow-col items-center gap-4 md:gap-6 bg-brand-orange text-white px-8 py-5 md:px-12 md:py-7 rounded-full font-black text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-brand-dark transition-all duration-700 shadow-2xl shadow-brand-orange/20"
                  >
                    {content.cta}
                    <ArrowDownRight
                      className="group-hover:rotate-45 transition-transform duration-500"
                      size={16}
                    />
                  </motion.a>
                </Magnetic>
                <p className="max-w-70 text-white/60 text-[10px] md:text-xs leading-relaxed uppercase tracking-widest font-medium text-pretty">
                  {content.description}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="aspect-3/4 rounded-[80px] overflow-hidden border border-white/10 p-3 bg-white/5 backdrop-blur-md relative group"
            >
              <motion.img
                style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, 50]) }}
                src={content.profileImage}
                alt={altText}
                className="w-full h-full object-cover rounded-[70px] grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-16 -left-16 w-32 h-32 md:w-48 md:h-48"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full fill-brand-orange">
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  fill="transparent"
                />
                <text className="text-[7.5px] uppercase tracking-[0.25em] font-black">
                  <textPath href="#circlePath">{content.rotatingText}</textPath>
                </text>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 hidden md:grid">
        <div className="grid gap-6">
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <Instagram
              className="text-white/20 hover:text-brand-orange cursor-pointer transition-colors"
              size={18}
            />
          </a>
          <div className="w-px h-20 bg-white/10 mx-auto" />
        </div>
      </div>
    </section>
  );
}
