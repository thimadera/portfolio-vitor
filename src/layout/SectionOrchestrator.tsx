import { Suspense } from 'react';
import { Award, Clock, Scissors, Sparkles } from 'lucide-react';
import { ContentConfig } from '../types';
import { Loading } from '../components/ui/Loading';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';

interface Props {
  content: ContentConfig;
  scrolled: boolean;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  testimonialIndex: number;
  setTestimonialIndex: React.Dispatch<React.SetStateAction<number>>;
  scrollYProgress: any;
}

export function SectionOrchestrator({
  content,
  scrolled,
  activeCategory,
  setActiveCategory,
  testimonialIndex,
  setTestimonialIndex,
  scrollYProgress,
}: Props) {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar
        scrolled={scrolled}
        navItems={content.navigation.items}
        ctaText={content.navigation.cta}
        socialLinks={content.footer.social}
        copyright={content.footer.copyright}
        whatsapp={content.contact.whatsapp}
      />
      <Hero
        content={content.hero}
        scrollYProgress={scrollYProgress}
        whatsapp={content.contact.whatsapp}
        socialLinks={content.footer.social}
      />
      <About content={content.about} />
      <Services
        section={content.servicesSection}
        services={content.services}
        iconMap={{ Sparkles, Scissors, Clock, Award }}
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
        setTestimonialIndex={setTestimonialIndex}
      />
      <FAQ section={content.faqSection} faqs={content.faqs} whatsapp={content.contact.whatsapp} />
      <Contact content={content.contact} />
      <Footer content={content.footer} whatsapp={content.contact.whatsapp} />
    </Suspense>
  );
}
