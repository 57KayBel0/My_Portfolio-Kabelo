import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function CaseStudyArchitecture({ caseStudy }) {
  return (
    <section
        id="architecture"
        className="bg-slate-950 py-24"
    >

      <div className="container mx-auto px-6 max-w-5xl">

        {/* ============================
            Section Title
        ============================ */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          System Architecture
        </motion.h2>

        {/* ============================
            Architecture Flow
        ============================ */}

        <div className="flex flex-col items-center">

          {caseStudy.architecture.map((step, index) => (

            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full flex flex-col items-center"
            >

              <div
                className="
                  w-full
                  max-w-xl
                  bg-slate-800
                  border
                  border-cyan-500/20
                  rounded-2xl
                  px-8
                  py-6
                  text-center
                  shadow-lg
                  hover:border-cyan-400
                  hover:shadow-cyan-500/20
                  transition-all
                  duration-300
                "
              >
                <h3 className="text-xl font-semibold text-cyan-300">
                  {step}
                </h3>
              </div>

              {index < caseStudy.architecture.length - 1 && (
                <div className="py-4">
                  <FaArrowDown className="text-cyan-400 text-2xl animate-bounce" />
                </div>
              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}