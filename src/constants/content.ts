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
    badge: 'Desde 2018 — Sorocaba/SP',
    title: 'Beleza',
    titleItalic: 'Singular.',
    description: 'Especialista em transformar não apenas cabelos, mas a forma como você se vê.',
    cta: 'Agendar Horário',
    image: 'ASSET%20(2).jpeg',
    profileImage: 'ASSET (4).jpeg',
    rotatingText: 'Vitor Madeira • Sorocaba • Identidade • ',
  },
  about: {
    subtitle: 'O Artista',
    title: 'Identidade, textura e história.',
    description:
      'Sou cabeleireiro em Sorocaba/SP, com mais de 8 anos de experiência na beleza, especializado em criar resultados que respeitam a identidade, a textura e a história de cada fio. Meu trabalho é guiado por técnica, sensibilidade e um olhar estratégico — porque cada cabelo exige um plano único.',
    experienceYears: '8+',
    experienceLabel: 'Anos de Experiência',
    mainImage: 'ASSET (4).jpeg',
    secondaryImage: 'ASSET (3).jpeg',
    stats: {
      value: '100%',
      label: 'Foco em Identidade',
      unit: 'Resultado',
    },
    features: [
      {
        title: 'Técnica & Sensibilidade',
        description:
          'Seja pra mudar, manter ou recuperar a saúde do cabelo, meu objetivo é sempre o mesmo: resultado bem feito, com técnica e responsabilidade.',
      },
      {
        title: 'Plano Único',
        description:
          'Loiros bem construídos, morenas iluminadas e ruivos sem descoloração, além de penteados para noivas, tranças nagô e atendimentos masculinos.',
      },
    ],
  },
  servicesSection: {
    subtitle: 'Serviços',
    title: 'Experiências sob medida.',
    description:
      'Aqui não existe padrão — existe identidade. Cada atendimento é exclusivo, com atenção aos detalhes e compromisso real com a sua experiência.',
    modal: {
      investmentLabel: 'Investimento',
      cta: 'Solicitar Agendamento',
    },
  },
  services: [
    {
      id: '01',
      title: 'Loiros & Iluminadas',
      description: 'Loiros bem construídos e morenas iluminadas com foco na saúde do fio.',
      price: 'A partir de R$ 300,00',
      iconName: 'Sparkles',
      details:
        'Resultados estratégicos que harmonizam com seu tom de pele, utilizando técnicas que preservam a integridade e o brilho natural.',
    },
    {
      id: '02',
      title: 'Coloridos & Ruivos',
      description: 'Cores intensas e ruivos vibrantes, muitas vezes sem descoloração.',
      price: 'A partir de R$ 130,00',
      iconName: 'Scissors',
      details:
        'Especialista em ruivos naturais e coloridos criativos. Um plano único para cada desejo, priorizando sempre a saúde capilar.',
    },
    {
      id: '03',
      title: 'Cachos & Alisamentos',
      description: 'Definição de cacheados ou alisamentos de alta performance.',
      price: 'A partir de R$ 180,00',
      iconName: 'Clock',
      details:
        'Tratamentos especializados para respeitar a textura do seu fio, seja para potencializar a curvatura ou para um liso perfeito e duradouro.',
    },
    {
      id: '04',
      title: 'Penteados & Maquiagem',
      description: 'Penteados e maquiagem para eventos e noivas.',
      price: 'A partir de R$ 150,00',
      iconName: 'Award',
      details:
        'Arte em forma de penteado. Dos penteados clássicos até os mais elaborados, crio o visual perfeito para o seu momento.',
    },
  ],
  gallerySection: {
    subtitle: 'Portfolio',
    title: 'Arte em movimento.',
    categories: ['Todos', 'Cor', 'Tranças', 'Maquiagem', 'Barbearia'],
    viewLabel: 'Ver',
  },
  gallery: [
    {
      url: 'ASSET (6).jpeg',
      title: 'Cherry Red',
      category: 'Cor',
    },
    {
      url: 'ASSET (1).jpeg',
      title: 'Morena Iluminada',
      category: 'Cor',
    },
    {
      url: 'ASSET (5).jpeg',
      title: 'Honey Golden',
      category: 'Cor',
    },
    {
      url: 'ASSET (10).jpeg',
      title: 'Honey Golden',
      category: 'Cor',
    },
    {
      url: 'ASSET (12).jpeg',
      title: 'Avelã e Canela',
      category: 'Cor',
    },
    {
      url: 'ASSET (11).jpeg',
      title: 'Purple Hair',
      category: 'Cor',
    },
    {
      url: 'ASSET (14).jpeg',
      title: 'Galaxy Hair',
      category: 'Cor',
    },
    {
      url: 'ASSET (23).jpeg',
      title: 'Trança Nagô',
      category: 'Tranças',
    },
    {
      url: 'ASSET (24).jpeg',
      title: 'Trança Nagô',
      category: 'Tranças',
    },
    {
      url: 'ASSET (25).jpeg',
      title: 'Trança Nagô',
      category: 'Tranças',
    },
    {
      url: 'ASSET (7).jpeg',
      title: 'Boho Braids',
      category: 'Tranças',
    },
    {
      url: 'ASSET (9).jpeg',
      title: 'Maquiagem Evento',
      category: 'Maquiagem',
    },
    {
      url: 'ASSET (13).jpeg',
      title: 'Maquiagem Evento',
      category: 'Maquiagem',
    },
    {
      url: 'ASSET (16).jpeg',
      title: 'Maquiagem Evento',
      category: 'Maquiagem',
    },
    {
      url: 'ASSET (19).jpeg',
      title: 'Maquiagem Evento',
      category: 'Maquiagem',
    },
    {
      url: 'ASSET (20).jpeg',
      title: 'Maquiagem Evento',
      category: 'Maquiagem',
    },
    {
      url: 'ASSET (21).jpeg',
      title: 'Old Money',
      category: 'Barbearia',
    },
    {
      url: 'ASSET (22).jpeg',
      title: 'Old Money',
      category: 'Barbearia',
    },
    {
      url: 'ASSET (26).jpeg',
      title: 'Platinado',
      category: 'Cor',
    },
    {
      url: 'ASSET (27).jpeg',
      title: 'Golden Hair',
      category: 'Cor',
    },
    {
      url: 'ASSET (29).jpeg',
      title: 'Corte Americano',
      category: 'Cor',
    },
    {
      url: 'ASSET (28).jpeg',
      title: 'Corte Tribal',
      category: 'Cor',
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
      name: 'Pedro Henrique',
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
        'O agendamento é feito diretamente via WhatsApp. Após o contato, realizamos uma breve consultoria para entender suas necessidades e confirmar a disponibilidade.',
    },
    {
      question: 'Onde fica o estúdio?',
      answer:
        'Estou localizado na Rua Major João Elias, 460 - Sala 4, em Sorocaba/SP. Um espaço pensado para o seu conforto e privacidade.',
    },
    {
      question: 'Quais formas de pagamento são aceitas?',
      answer: 'Aceito cartões de crédito, débito, PIX e dinheiro.',
    },
    {
      question: 'Você faz atendimentos masculinos?',
      answer:
        'Sim! Realizo atendimentos masculinos completos, incluindo cortes e tratamentos específicos.',
    },
  ],
  contact: {
    title: 'Agende sua',
    subtitle: 'Transformação.',
    address: 'Rua Major João Elias, 460 - Sala 4, Sorocaba/SP',
    phone: '(15) 99683-1709',
    whatsapp: '5515996831709',
    instagram: '@vitormadeirahair',
    hours: 'Terça a Sábado: 09h às 19h',
  },
  footer: {
    social: {
      instagram: 'https://instagram.com/vitormadeirahair',
    },
    copyright: '© 2026 Vitor Madeira Hair',
  },
} as const;
