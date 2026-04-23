/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Lenis from 'lenis';
import {
  ArrowDownRight,
  Award,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Scissors,
  Sparkles,
} from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import { SEO } from './components/SEO';
import { CONTENT } from './constants/content';

// Components
import { Toaster } from '@/src/components/ui/sonner';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';

const content = CONTENT;

const iconMap: Record<string, any> = {
  Scissors: <Scissors className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
  MapPin: <MapPin />,
  Phone: <Phone />,
  Instagram: <Instagram />,
  Facebook: <Facebook />,
  Linkedin: <Linkedin />,
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => setScrolled(window.scrollY > 50);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  const nextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % content.testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIndex(
      (prev) => (prev - 1 + content.testimonials.length) % content.testimonials.length
    );

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white bg-brand-cream text-brand-dark grain">
      <SEO />
      <AnimatePresence mode="wait">
        {isLoading && <Loader text={content.loader.text} />}
      </AnimatePresence>

      <Toaster position="top-center" richColors />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-orange z-100 origin-left"
        style={{ scaleX }}
      />

      <Navbar
        scrolled={scrolled}
        navItems={content.navigation.items}
        ctaText={content.navigation.cta}
        socialLinks={{ instagram: content.footer.social.instagram }}
        copyright={content.footer.copyright}
        whatsapp={content.contact.whatsapp}
      />

      <Hero
        content={content.hero}
        scrollYProgress={scrollYProgress}
        whatsapp={content.contact.whatsapp}
        socialLinks={{ instagram: content.footer.social.instagram }}
      />

      <About content={content.about} />

      <Services
        section={content.servicesSection}
        services={content.services}
        iconMap={iconMap}
        whatsapp={content.contact.whatsapp}
      />

      <Gallery
        section={content.gallerySection}
        gallery={content.gallery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <Testimonials
        section={content.testimonialsSection}
        testimonials={content.testimonials}
        testimonialIndex={testimonialIndex}
        prevTestimonial={prevTestimonial}
        nextTestimonial={nextTestimonial}
      />

      <FAQ section={content.faqSection} faqs={content.faqs} whatsapp={content.contact.whatsapp} />

      <Contact
        content={{
          ...content.contact,
          social: { instagram: content.footer.social.instagram },
          email: 'contato@vitormadeira.com',
        }}
      />

      <Footer
        content={{
          ...content.footer,
          social: { instagram: content.footer.social.instagram },
        }}
        whatsapp={content.contact.whatsapp}
      />

      {/* Sticky Mobile CTA & Back to Top */}
      <div className="fixed bottom-6 left-6 right-6 z-100 grid gap-3 md:left-auto md:w-auto">
        <AnimatePresence>
          {scrolled && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hidden md:grid w-14 h-14 bg-white border border-brand-orange/20 rounded-full place-items-center text-brand-orange shadow-xl hover:bg-brand-orange hover:text-white transition-all duration-500"
            >
              <ArrowDownRight className="-rotate-135" size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ x: 100 }}
          animate={{ x: scrolled ? 0 : 100 }}
          className="md:hidden grid justify-end"
        >
          <a
            href={`https://wa.me/${content.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 grid place-items-center bg-brand-orange text-white rounded-full shadow-2xl shadow-brand-orange/40"
          >
            <Phone size={20} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
