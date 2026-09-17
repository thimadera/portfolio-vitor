import { ArrowRight, Instagram } from 'lucide-react';
import { Magnetic } from './Layout';

interface FooterProps {
  content: {
    social: {
      instagram: string;
    };
    copyright: string;
  };
  whatsapp: string;
}

export function Footer({ content, whatsapp }: FooterProps) {
  return (
    <footer className="py-12 md:py-20 px-6 bg-brand-cream overflow-hidden">
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(2rem,10vw,10rem)] font-display font-bold leading-[0.8] tracking-tighter mb-12 whitespace-nowrap">
              Vitor <span className="text-brand-orange italic font-normal">Madeira.</span>
            </h2>
            <div className="grid grid-flow-col justify-start gap-6">
              <Magnetic>
                <a
                  href={content.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-brand-dark/10 grid place-items-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-500"
                >
                  <Instagram size={20} />
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="lg:col-span-6 grid content-end justify-start lg:justify-end">
            <div className="lg:text-right max-w-md">
              <p className="text-xl md:text-2xl font-display mb-12 text-neutral-500 leading-relaxed text-pretty">
                Transformando visões em realidade através do visagismo contemporâneo.
              </p>
              <Magnetic>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-grid grid-flow-col items-center gap-6 bg-brand-dark text-white px-10 py-5 md:px-12 md:py-6 rounded-full font-black text-[10px] tracking-[0.3em] uppercase hover:bg-brand-orange transition-all duration-700 group"
                >
                  Agendar Agora
                  <ArrowRight
                    className="group-hover:translate-x-2 transition-transform"
                    size={16}
                  />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-dark/5 grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8">
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 text-center md:text-left">
            {content.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
