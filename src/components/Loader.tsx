import { motion } from "motion/react";

interface LoaderProps {
  text: string;
}

export function Loader({ text }: LoaderProps) {
  return (
    <motion.div
      key="loader"
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-200 bg-brand-dark grid place-content-center p-12"
    >
      <div className="overflow-hidden mb-8">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white text-center whitespace-nowrap"
        >
          Vitor Madeira<span className="text-brand-orange">.</span>
        </motion.div>
      </div>
      <div className="w-48 h-px bg-white/10 relative overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-brand-orange"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-[10px] font-black uppercase tracking-[0.5em] text-white/40"
      >
        {text}
      </motion.div>
    </motion.div>
  );
}
