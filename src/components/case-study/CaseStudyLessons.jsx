import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";

export default function CaseStudyLessons({ caseStudy }) {
  return (
    <section className="bg-slate-900 py-24">

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
          Lessons Learned
        </motion.h2>

        {/* ============================
            Lessons Grid
        ============================ */}

        <div className="grid md:grid-cols-2 gap-8">

          {caseStudy.lessons.map((lesson, index) => (

            <motion.div
              key={lesson}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                bg-slate-800
                border
                border-slate-700
                rounded-3xl
                p-8
                shadow-lg
                transition-all
                duration-300
                hover:border-cyan-400
              "
            >

              <div className="flex items-start gap-5">

                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-cyan-500/10
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "
                >
                  <FaLightbulb className="text-cyan-400 text-xl" />
                </div>

                <p className="text-slate-300 leading-8 text-lg">
                  {lesson}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}