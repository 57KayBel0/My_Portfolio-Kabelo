import { motion } from "framer-motion";

export default function StatsCard({
  number,
  label,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg"
    >
      <h2 className="text-4xl font-bold text-cyan-400">
        {number}
      </h2>

      <p className="mt-3 text-slate-300">
        {label}
      </p>
    </motion.div>
  );
}