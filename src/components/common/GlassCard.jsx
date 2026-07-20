export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        bg-slate-800/70
        border border-slate-700
        rounded-3xl
        p-8
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-500/40
        hover:shadow-cyan-500/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}