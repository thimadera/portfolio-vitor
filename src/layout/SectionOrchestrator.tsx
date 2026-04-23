import { lazy, Suspense } from 'react';
import { ContentConfig } from '../types';
import { Loading } from '../components/ui/Loading';

const About = lazy(() => import('../components/About').then(m => ({ default: m.About })));
const Contact = lazy(() => import('../components/Contact').then(m => ({ default: m.Contact })));
const FAQ = lazy(() => import('../components/FAQ').then(m => ({ default: m.FAQ })));
const Footer = lazy(() => import('../components/Footer').then(m => ({ default: m.Footer })));
const Gallery = lazy(() => import('../components/Gallery').then(m => ({ default: m.Gallery })));
const Hero = lazy(() => import('../components/Hero').then(m => ({ default: m.Hero })));
const Navbar = lazy(() => import('../components/Navbar').then(m => ({ default: m.Navbar })));
const Services = lazy(() => import('../components/Services').then(m => ({ default: m.Services })));
const Testimonials = lazy(() => import('../components/Testimonials').then(m => ({ default: m.Testimonials })));

interface Props {
  content: ContentConfig;
  scrolled: boolean;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  testimonialIndex: number;
  setTestimonialIndex: React.Dispatch<React.SetStateAction<number>>;
  scrollYProgress: any;
}

export function SectionOrchestrator({ content, scrolled, activeCategory, setActiveCategory, testimonialIndex, setTestimonialIndex, scrollYProgress }: Props) {
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
        iconMap={{}}
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
      <FAQ
        section={content.faqSection}
        faqs={content.faqs}
        whatsapp={content.contact.whatsapp}
      />
      <Contact content={content.contact} />
      <Footer content={content.footer} whatsapp={content.contact.whatsapp} />
    </Suspense>
  );
}
