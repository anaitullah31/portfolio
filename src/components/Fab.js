export default function Fab() {
  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <button className="bg-primary-container text-on-primary-container w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform relative group">
        <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: '"FILL" 1' }}>chat</span>
        <span className="absolute top-3 right-3 w-3 h-3 bg-green-500 border-2 border-primary-container rounded-full animate-pulse"></span>
        <span className="absolute right-20 bg-surface-container px-4 py-2 rounded-lg font-label-caps text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Online Now</span>
      </button>
    </div>
  );
}
