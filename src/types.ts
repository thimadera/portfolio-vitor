export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  iconName: string;
  details: string;
  duration: string;
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
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  hours: string;
  social: {
    instagram: string;
  };
  form: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      service: string;
      message: string;
    };
    button: string;
    success: string;
  };
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
      durationLabel: string;
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
      facebook: string;
      linkedin: string;
    };
    copyright: string;
  };
}
