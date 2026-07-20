import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        bg-slate-800/70
        backdrop-blur-md
        border
        border-slate-700
        rounded-3xl
        p-8
        shadow-xl
        transition-all
        duration-300
        hover:border-cyan-500/40
        hover:shadow-cyan-500/10
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}