import { ArrowRight, MapPin, Phone, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { ContactContent } from '../types';

interface ContactProps {
  content: ContactContent;
}

export function Contact({ content }: ContactProps) {
  return (
    <section
      id="contato"
      className="py-24 px-6 bg-brand-dark text-white rounded-[32px] mx-4 md:mx-6 mb-12 overflow-hidden border border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Header & Info */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-[clamp(3.5rem,8vw,6rem)] font-display leading-[0.9] tracking-tighter mb-4">
                {content.title} <br />
                <em className="text-brand-orange font-normal not-italic">{content.subtitle}</em>
              </h2>
              <p className="text-white/60 text-lg md:text-xl max-w-lg">
                Pronto para descobrir sua melhor versão? Vamos conversar.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: MapPin, label: 'Localização', value: content.address },
                { icon: Phone, label: 'Contato', value: content.phone },
                { icon: Instagram, label: 'Instagram', value: content.instagram },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <item.icon className="text-brand-orange mt-1" size={20} />
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">
                      {item.label}
                    </div>
                    <div className="font-sans text-sm md:text-base text-white/90">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-white/3 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 grid gap-8">
              <div className="grid gap-2">
                <span className="text-brand-orange font-mono text-[10px] tracking-[0.3em] uppercase">
                  Entrar em contato
                </span>
                <h3 className="text-3xl font-display font-medium">Agendarvia WhatsApp</h3>
                <p className="text-white/60 text-sm">
                  Respostas rápidas para transformar seu visual.
                </p>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${content.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 bg-brand-orange text-white px-8 py-5 rounded-full font-black text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-brand-dark transition-all duration-500"
              >
                <span>Falar com Vitor</span>
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
