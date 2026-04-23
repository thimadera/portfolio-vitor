import { ArrowDownRight, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { Magnetic } from "./Layout";

interface ContactProps {
  content: {
    address: string;
    phone: string;
    email: string;
    hours: string;
    whatsapp: string;
    social: {
      instagram: string;
    };
    form: {
      title: string;
      subtitle: string;
    };
  };
}

export function Contact({ content }: ContactProps) {
  return (
    <section
      id="contato"
      className="py-32 md:py-64 px-6 bg-brand-dark text-white rounded-[40px] md:rounded-[100px] mx-4 md:mx-12 mb-12 overflow-hidden"
    >
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(3.5rem,10vw,8rem)] font-display font-bold leading-[0.8] tracking-tighter mb-12 text-balance">
              {content.form.title} <br />
              <span className="text-brand-orange italic font-normal">
                {content.form.subtitle}
              </span>
            </h2>

            <div className="grid gap-12 md:gap-16">
              <div className="grid grid-cols-[auto_1fr] items-start gap-6 md:gap-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 grid place-items-center text-brand-orange border border-white/10 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">
                    Localização
                  </div>
                  <div className="text-lg md:text-xl font-display text-pretty">
                    {content.address}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-start gap-6 md:gap-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 grid place-items-center text-brand-orange border border-white/10 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">
                    Contato
                  </div>
                  <div className="text-lg md:text-xl font-display">
                    {content.phone}
                  </div>
                  <div className="text-lg md:text-xl font-display text-brand-orange/60">
                    {content.email}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-orange/20 blur-[60px] rounded-full group-hover:bg-brand-orange/40 transition-all duration-700" />
              <Magnetic>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/${content.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 grid place-items-center w-64 h-64 md:w-80 md:h-80 rounded-full bg-brand-orange text-white text-center p-8 border border-white/10 shadow-2xl"
                >
                  <div className="grid gap-4 place-items-center">
                    <Phone size={32} className="mb-2" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                      Falar com Vitor
                    </span>
                    <span className="text-2xl md:text-3xl font-display font-bold leading-tight">
                      Agendar via WhatsApp
                    </span>
                    <ArrowDownRight className="mt-4" size={24} />
                  </div>
                </motion.a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
