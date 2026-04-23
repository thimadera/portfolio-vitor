export function Loading() {
  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center bg-brand-cream/80 backdrop-blur-sm">
      <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
