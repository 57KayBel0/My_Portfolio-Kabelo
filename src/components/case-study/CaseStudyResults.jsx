import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function CaseStudyResults({ caseStudy }) {
  return (
    <section
        id="results"
        className="bg-slate-900 py-24"
    >

      <div className="container mx-auto px-6 max-w-6xl">

        {/* ============================
            Section Title
        ============================ */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Results & Impact
        </motion.h2>

        {/* ============================
            Results Grid
        ============================ */}

        <div className="grid md:grid-cols-2 gap-8">

          {caseStudy.results.map((result, index) => (

            <motion.div
              key={result}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-slate-800
                border
                border-slate-700
                rounded-3xl
                p-8
                flex
                items-start
                gap-5
                hover:border-cyan-400
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              <div className="mt-1">
                <FaCheckCircle className="text-cyan-400 text-2xl" />
              </div>

              <div>
                <p className="text-lg text-slate-200 leading-8">
                  {result}
                </p>
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}