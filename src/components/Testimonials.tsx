import { ChevronRight, Quote } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Dispatch, SetStateAction } from 'react';
import { Testimonial } from '../types';
import { SectionHeading } from './Layout';

interface TestimonialsProps {
  section: {
    subtitle: string;
    title: string;
  };
  testimonials: Testimonial[];
  testimonialIndex: number;
  setTestimonialIndex: Dispatch<SetStateAction<number>>;
}

export function Testimonials({
  section,
  testimonials,
  testimonialIndex,
  setTestimonialIndex,
}: TestimonialsProps) {
  return (
    <section
      id="avaliações"
      className="py-20 md:py-48 px-4 md:px-6 bg-brand-orange rounded-[40px] md:rounded-[100px] mx-4 md:mx-12 mb-20 md:mb-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-dark/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-360 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5">
            <SectionHeading subtitle={section.subtitle} title={section.title} light />
            <div className="grid grid-flow-col justify-start gap-4">
              <button
                onClick={() => setTestimonialIndex(testimonialIndex - 1)}
                className="w-16 h-16 rounded-full border border-white/20 grid place-items-center text-white hover:bg-white hover:text-brand-orange transition-all duration-500 cursor-pointer"
              >
                <ChevronRight className="rotate-180" />
              </button>
              <button
                onClick={() => setTestimonialIndex(testimonialIndex + 1)}
                className="w-16 h-16 rounded-full border border-white/20 grid place-items-center text-white hover:bg-white hover:text-brand-orange transition-all duration-500 cursor-pointer"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative min-h-75 md:min-h-100 grid items-center">
              <Quote className="absolute -top-6 -left-4 md:-top-12 md:-left-12 w-16 h-16 md:w-24 md:h-24 text-white/10" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <p className="text-[clamp(1.5rem,5vw,3rem)] font-display text-white leading-tight mb-12 italic text-pretty">
                    &quot;{testimonials[testimonialIndex]?.text}&quot;
                  </p>
                  <div className="grid grid-cols-[auto_1fr] items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-white/10 grid place-items-center text-white font-bold text-xl border border-white/20">
                      {testimonials[testimonialIndex]?.name[0]}
                    </div>
                    <div>
                      <div className="text-white font-bold text-xl">
                        {testimonials[testimonialIndex]?.name}
                      </div>
                      <div className="text-white/60 text-sm uppercase tracking-widest font-black">
                        {testimonials[testimonialIndex]?.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
