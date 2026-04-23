export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  iconName: string;
  details: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface GalleryItem {
  url: string;
  title: string;
  category: string;
}

export interface Testimonial {
  name: string;
  text: string;
  role: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  titleItalic: string;
  description: string;
  cta: string;
  image: string;
  profileImage: string;
  rotatingText: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  address: string;
  phone: string;
  instagram: string;
  whatsapp: string;
  hours: string;
}

export interface ContentConfig {
  loader: {
    text: string;
  };
  navigation: {
    items: string[];
    cta: string;
  };
  hero: HeroContent;
  about: {
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
  servicesSection: {
    subtitle: string;
    title: string;
    description: string;
    modal: {
      investmentLabel: string;
      cta: string;
    };
  };
  services: Service[];
  gallerySection: {
    subtitle: string;
    title: string;
    categories: string[];
    viewLabel: string;
  };
  gallery: GalleryItem[];
  testimonialsSection: {
    subtitle: string;
    title: string;
  };
  testimonials: Testimonial[];
  faqSection: {
    subtitle: string;
    title: string;
    description: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  };
  faqs: Faq[];
  contact: ContactContent;
  footer: {
    social: {
      instagram: string;
    };
    copyright: string;
  };
}
