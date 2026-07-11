export default function Badge({ children }) {
  return (
    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
      {children}
    </span>
  );
}