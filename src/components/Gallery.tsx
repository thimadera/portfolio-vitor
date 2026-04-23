import { Maximize2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState, useEffect } from 'react';
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
  const [visibleItems, setVisibleItems] = useState(6);

  const filteredGallery =
    activeCategory === 'Todos'
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  const displayedGallery = filteredGallery.slice(0, visibleItems);

  useEffect(() => {
    setVisibleItems(6);
  }, [activeCategory]);

  return (
    <section id="galeria" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-360 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end justify-between mb-12 gap-8">
          <SectionHeading subtitle={section.subtitle} title={section.title} />

          <Tabs
            defaultValue="Todos"
            value={activeCategory}
            onValueChange={(val) => {
              setActiveCategory(val);
              setVisibleItems(6);
            }}
            className="w-full md:w-auto"
          >
            <TabsList className="bg-transparent h-auto p-0 grid grid-flow-col auto-cols-max gap-2 justify-start">
              {section.categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="px-4 py-2 rounded-full border border-brand-dark/10 text-[9px] font-black uppercase tracking-widest transition-all duration-500 data-active:bg-brand-orange data-active:border-brand-orange data-active:text-white hover:border-brand-orange hover:text-brand-orange"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {displayedGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Dialog>
                  <DialogTrigger
                    render={
                      <div className="group relative aspect-4/5 overflow-hidden rounded-[30px] cursor-pointer" />
                    }
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-700 grid content-end p-6">
                      <span className="text-brand-orange font-mono text-[9px] uppercase tracking-widest mb-2">
                        {item.category}
                      </span>
                      <h4 className="text-white text-xl font-display mb-4">{item.title}</h4>
                      <div className="w-8 h-8 rounded-full bg-brand-orange text-white grid place-items-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl p-0 bg-transparent border-none overflow-hidden rounded-[30px] aspect-video">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-brand-dark/20 backdrop-blur-md grid grid-cols-[1fr_auto] items-end pointer-events-none">
                      <div>
                        <span className="text-brand-orange font-mono text-[9px] uppercase tracking-[0.2em] mb-1 block">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-display text-white">{item.title}</h3>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {visibleItems < filteredGallery.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleItems((prev) => prev + 6)}
              className="px-6 py-3 rounded-full border border-brand-dark text-brand-dark font-black uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all duration-500"
            >
              Mostrar mais
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
