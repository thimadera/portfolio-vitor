import { AnimatePresence, motion } from "motion/react";

interface CursorProps {
  mousePos: { x: number; y: number };
  isHoveringGallery: boolean;
  viewLabel: string;
}

export function Cursor({
  mousePos,
  isHoveringGallery,
  viewLabel,
}: CursorProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-brand-orange rounded-full pointer-events-none z-9999 hidden md:grid place-items-center mix-blend-difference"
      animate={{
        x: mousePos.x - (isHoveringGallery ? 40 : 16),
        y: mousePos.y - (isHoveringGallery ? 40 : 16),
        width: isHoveringGallery ? 80 : 32,
        height: isHoveringGallery ? 80 : 32,
        backgroundColor: isHoveringGallery
          ? "rgba(255, 92, 0, 1)"
          : "rgba(255, 92, 0, 0)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.5 }}
    >
      <AnimatePresence>
        {isHoveringGallery && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="text-[10px] font-black uppercase text-white"
          >
            {viewLabel}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
