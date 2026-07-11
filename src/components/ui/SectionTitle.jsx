import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .6 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="text-slate-400 mt-4 text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}