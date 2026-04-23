import { Maximize2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Dialog, DialogContent, DialogTrigger } from '@/src/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger } from '@/src/components/ui/tabs';
import { GalleryItem } from '../types';
import { SectionHeading } from './Layout';

interface GalleryProps {
  section: {
    subtitle: string;
    title: string;
    categories: string[];
    viewLabel: string;
  };
  gallery: GalleryItem[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export function Gallery({ section, gallery, activeCategory, setActiveCategory }: GalleryProps) {
  const filteredGallery =
    activeCategory === 'Todos'
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  return (
    <section id="galeria" className="py-24 md:py-48 px-4 md:px-6">
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end justify-between mb-12 md:mb-24 gap-8 md:gap-12">
          <SectionHeading subtitle={section.subtitle} title={section.title} />

          <Tabs
            defaultValue="Todos"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full md:w-auto"
          >
            <TabsList className="bg-transparent h-auto p-0 grid grid-flow-col auto-cols-max gap-2 md:gap-3 justify-start">
              {section.categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="px-4 md:px-8 py-2 md:py-3 rounded-full border border-brand-dark/10 text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-500 data-[state=active]:bg-brand-orange data-[state=active]:border-brand-orange data-[state=active]:text-white hover:border-brand-orange hover:text-brand-orange"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Dialog>
                  <DialogTrigger
                    render={
                      <div className="group relative aspect-4/5 overflow-hidden rounded-[60px] cursor-pointer" />
                    }
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-700 grid content-end p-12">
                      <span className="text-brand-orange font-mono text-[10px] uppercase tracking-widest mb-4">
                        {item.category}
                      </span>
                      <h4 className="text-white text-3xl font-display mb-6">{item.title}</h4>
                      <div className="w-12 h-12 rounded-full bg-brand-orange text-white grid place-items-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <Maximize2 size={20} />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl p-0 bg-transparent border-none overflow-hidden rounded-[32px] md:rounded-[40px] aspect-3/4 sm:aspect-4/5 md:aspect-video">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 grid grid-cols-[1fr_auto] items-end pointer-events-none">
                      <div>
                        <span className="text-brand-orange font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] mb-1 md:mb-2 block">
                          {item.category}
                        </span>
                        <h3 className="text-2xl md:text-6xl font-display text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
