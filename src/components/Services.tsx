import { ArrowDownRight, LucideIcon, Wallet } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/src/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/components/ui/dialog';
import { Service } from '../types';
import { SectionHeading } from './Layout';

interface ServicesProps {
  section: {
    subtitle: string;
    title: string;
    description: string;
    modal: {
      investmentLabel: string;
      cta: string;
    };
  };
  services: Service[];
  iconMap: any;
  whatsapp: string;
}

function RenderIcon(Icon: LucideIcon) {
  return <Icon size={24} />;
}

export function Services({ section, services, iconMap, whatsapp }: ServicesProps) {
  return (
    <section id="serviços" className="py-12 md:py-20 px-4 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle={section.subtitle}
          title={section.title}
          description={section.description}
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div key={service.id}>
              <Dialog>
                <DialogTrigger
                  render={
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="group p-0 transition-all duration-700 grid content-between min-h-40 sm:min-h-60 md:min-h-80 cursor-pointer h-full border-t border-white/10"
                    />
                  }
                >
                  <div>
                    <span className="text-brand-orange group-hover:text-brand-orange font-mono text-[10px] md:text-xs mb-4 sm:mb-8 block transition-colors">
                      {service.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-display mb-2 sm:mb-4 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/40 group-hover:text-neutral-500 text-[10px] sm:text-sm leading-relaxed transition-colors line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] items-end mt-4 sm:mt-6">
                    <div className="text-brand-orange group-hover:text-brand-orange font-bold text-sm sm:text-lg transition-colors">
                      {service.price}
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-white/20 grid place-items-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                      <ArrowDownRight size={16} />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="bg-brand-cream border-none max-w-2xl rounded-[40px] md:rounded-[60px] p-8 md:p-16 gap-0">
                  <div className="grid grid-flow-col auto-cols-max items-center gap-4 mb-6 md:mb-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-brand-orange/10 grid place-items-center text-brand-orange">
                      {RenderIcon(iconMap[service.iconName])}
                    </div>
                    <span className="text-brand-orange font-mono text-[10px] md:text-xs tracking-widest uppercase">
                      {service.id}
                    </span>
                  </div>
                  <DialogHeader className="mb-6 md:mb-8">
                    <DialogTitle className="text-3xl md:text-5xl font-display text-brand-dark text-left leading-tight">
                      {service.title}
                    </DialogTitle>
                  </DialogHeader>
                  <p className="text-neutral-500 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
                    {service.details}
                  </p>
                  <div className="grid mb-8 md:mb-12">
                    <div className="grid grid-cols-[auto_1fr] items-start gap-4">
                      <div className="mt-1 text-brand-orange">
                        <Wallet size={16} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-1">
                          {section.modal.investmentLabel}
                        </div>
                        <div className="text-lg md:text-xl font-display font-bold text-brand-dark">
                          {service.price}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      const message = encodeURIComponent(
                        `Olá! Gostaria de agendar o serviço: ${service.title}`
                      );
                      window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
                    }}
                    className="w-full bg-brand-dark text-white py-8 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-brand-orange transition-all duration-500 h-auto"
                  >
                    {section.modal.cta}
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
