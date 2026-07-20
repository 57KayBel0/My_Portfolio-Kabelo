import { motion } from "framer-motion";

export default function CaseStudyMetrics({ caseStudy }) {
  return (
    <section className="bg-slate-950 py-24">

      <div className="container mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Project Metrics
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {caseStudy.metrics.map((metric) => (

            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className="
                bg-slate-800
                border
                border-slate-700
                rounded-3xl
                p-8
                text-center
                hover:border-cyan-400
                transition-all
              "
            >

              <h3 className="text-5xl font-bold text-cyan-400 mb-4">
                {metric.value}
              </h3>

              <p className="text-slate-400">
                {metric.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}