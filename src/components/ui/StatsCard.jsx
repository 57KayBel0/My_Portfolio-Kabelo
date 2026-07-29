import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function StatsCard({ number, label }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const value = parseInt(number);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg"
    >
      <h2 className="text-5xl font-bold text-cyan-400">
        {inView ? <CountUp end={value} duration={2} /> : 0}
        {number.includes("+") ? "+" : ""}
      </h2>

      <p className="mt-3 text-slate-300">
        {label}
      </p>
    </motion.div>
  );
}