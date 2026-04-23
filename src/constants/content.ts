import { ContentConfig } from '../types';

export const CONTENT: ContentConfig = {
  loader: {
    text: 'Revelando sua essência',
  },
  navigation: {
    items: ['Início', 'Sobre', 'Serviços', 'Galeria', 'Contato'],
    cta: 'Agendar',
  },
  hero: {
    badge: 'Est. 2018 — Sorocaba/SP',
    title: 'Beleza',
    titleItalic: 'Singular.',
    description:
      'Especialista em transformar não apenas cabelos, mas a forma como você se vê através de um olhar estratégico.',
    cta: 'Agendar Horário',
    image:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1920',
    profileImage:
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800',
    rotatingText: 'Vitor Madeira • Sorocaba • Identidade • ',
  },
  about: {
    subtitle: 'O Artista',
    title: 'Identidade, textura e história.',
    description:
      'Sou cabeleireiro em Sorocaba/SP, com mais de 8 anos de experiência na beleza, especializado em criar resultados que respeitam a identidade, a textura e a história de cada fio. Meu trabalho é guiado por técnica, sensibilidade e um olhar estratégico — porque cada cabelo exige um plano único.',
    experienceYears: '8+',
    experienceLabel: 'Anos de Experiência',
    mainImage:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200',
    secondaryImage:
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=400',
    stats: {
      value: '100%',
      label: 'Foco em Identidade',
      unit: 'Resultado',
    },
    features: [
      {
        title: 'Técnica & Sensibilidade',
        description:
          'Seja em coloridos intensos, definição de cacheados ou alisamentos de alta performance, o foco é unir estética, saúde capilar e durabilidade.',
      },
      {
        title: 'Plano Único',
        description:
          'Loiros bem construídos, morenas iluminadas e ruivos sem descoloração, além de penteados para noivas, tranças nagô e atendimentos masculinos.',
      },
    ],
  },
  servicesSection: {
    subtitle: 'Menu',
    title: 'Experiências sob medida.',
    description:
      'Aqui não existe padrão — existe identidade. Cada atendimento é exclusivo, com atenção aos detalhes e compromisso real com a sua experiência.',
    modal: {
      durationLabel: 'Duração',
      investmentLabel: 'Investimento',
      cta: 'Solicitar Agendamento',
    },
  },
  services: [
    {
      id: '01',
      title: 'Loiros & Iluminadas',
      description: 'Loiros bem construídos e morenas iluminadas com foco na saúde do fio.',
      price: 'Sob Consulta',
      iconName: 'Sparkles',
      details:
        'Resultados estratégicos que harmonizam com seu tom de pele, utilizando técnicas que preservam a integridade e o brilho natural.',
      duration: '180 - 240 min',
    },
    {
      id: '02',
      title: 'Coloridos & Ruivos',
      description: 'Cores intensas e ruivos vibrantes, muitas vezes sem descoloração.',
      price: 'Sob Consulta',
      iconName: 'Scissors',
      details:
        'Especialista em ruivos naturais e coloridos criativos. Um plano único para cada desejo, priorizando sempre a saúde capilar.',
      duration: '120 - 180 min',
    },
    {
      id: '03',
      title: 'Cachos & Alisamentos',
      description: 'Definição de cacheados ou alisamentos de alta performance.',
      price: 'Sob Consulta',
      iconName: 'Clock',
      details:
        'Tratamentos especializados para respeitar a textura do seu fio, seja para potencializar a curvatura ou para um liso perfeito e duradouro.',
      duration: '90 - 150 min',
    },
    {
      id: '04',
      title: 'Penteados & Tranças',
      description: 'Penteados para eventos, noivas e tranças nagô exclusivas.',
      price: 'Sob Consulta',
      iconName: 'Award',
      details:
        'Arte em forma de penteado. Das tranças nagô aos penteados clássicos para noivas, criamos o visual perfeito para o seu momento.',
      duration: '60 - 120 min',
    },
  ],
  gallerySection: {
    subtitle: 'Portfolio',
    title: 'Arte em movimento.',
    categories: ['Todos', 'Cor', 'Cachos', 'Estilo'],
    viewLabel: 'Ver',
  },
  gallery: [
    {
      url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
      title: 'Blonde Perfection',
      category: 'Cor',
    },
    {
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
      title: 'Modern Cut',
      category: 'Estilo',
    },
    {
      url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800',
      title: 'Vibrant Red',
      category: 'Cor',
    },
    {
      url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800',
      title: 'Soft Waves',
      category: 'Estilo',
    },
    {
      url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800',
      title: 'Sleek Look',
      category: 'Estilo',
    },
    {
      url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800',
      title: 'Natural Glow',
      category: 'Cachos',
    },
  ],
  testimonialsSection: {
    subtitle: 'Feedback',
    title: 'O que dizem sobre a experiência.',
  },
  testimonials: [
    {
      name: 'Mariana Silva',
      text: 'O Vitor é um artista! Meu cabelo nunca esteve tão saudável e brilhante.',
      role: 'Cliente desde 2022',
    },
    {
      name: 'Beatriz Costa',
      text: 'As mechas ficaram exatamente como eu queria. Super recomendo o trabalho dele!',
      role: 'Cliente desde 2023',
    },
    {
      name: 'Juliana Mendes',
      text: 'Ambiente maravilhoso e o Vitor é extremamente qualificado. Nota 10!',
      role: 'Cliente desde 2021',
    },
  ],
  faqSection: {
    subtitle: 'FAQ',
    title: 'Dúvidas Frequentes.',
    description: 'Tudo o que você precisa saber para sua primeira visita ao estúdio.',
    ctaTitle: 'Ainda com dúvidas?',
    ctaDescription: 'Se não encontrou o que procurava, entre em contato diretamente pelo WhatsApp.',
    ctaButton: 'Falar com Vitor',
  },
  faqs: [
    {
      question: 'Como funciona o agendamento?',
      answer:
        'O agendamento é feito inicialmente através do formulário no site ou diretamente via WhatsApp. Após o contato, realizamos uma breve consultoria para entender suas necessidades e confirmar a disponibilidade.',
    },
    {
      question: 'Onde fica o estúdio?',
      answer:
        'Estamos localizados na Rua Major João Elias, 460 - Sala 4, em Sorocaba/SP. Um espaço pensado para o seu conforto e privacidade.',
    },
    {
      question: 'Quais formas de pagamento são aceitas?',
      answer: 'Aceitamos cartões de crédito (com parcelamento), débito, PIX e dinheiro.',
    },
    {
      question: 'Você atende atendimentos masculinos?',
      answer:
        'Sim! Realizamos atendimentos masculinos completos, incluindo cortes e tratamentos específicos.',
    },
  ],
  contact: {
    address: 'Rua Major João Elias, 460 - Sala 4, Sorocaba/SP',
    phone: '(15) 99683-1709',
    whatsapp: '5515996831709',
    hours: 'Terça a Sábado: 09h às 19h',
    form: {
      title: 'Agende sua',
      subtitle: 'Transformação.',
      fields: {
        name: 'Nome',
        email: 'E-mail',
        service: 'Serviço',
        message: 'Mensagem',
      },
      button: 'Enviar',
      success: 'Mensagem enviada com sucesso!',
    },
  },
  footer: {
    social: {
      instagram: 'https://instagram.com/vitormadeirahair',
      facebook: 'https://facebook.com/vitormadeirahair',
      linkedin: 'https://linkedin.com/in/vitormadeira',
    },
    copyright: '© 2026 Vitor Madeira Hair',
  },
} as const;
