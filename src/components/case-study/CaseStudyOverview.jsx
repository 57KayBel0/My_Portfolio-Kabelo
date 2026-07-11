import { motion } from "framer-motion";

export default function CaseStudyOverview({ caseStudy }) {
  return (
    <section className="bg-slate-900 py-24">

      <div className="container mx-auto px-6 max-w-6xl">

        {/* ============================
            SECTION TITLE
        ============================ */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-14 text-center"
        >
          Project Overview
        </motion.h2>

        {/* ============================
            OVERVIEW
        ============================ */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            bg-slate-800
            border
            border-slate-700
            rounded-3xl
            p-10
            shadow-xl
            mb-10
          "
        >
          <h3 className="text-2xl font-semibold mb-5 text-cyan-400">
            Overview
          </h3>

          <p className="text-slate-300 leading-8">
            {caseStudy.overview}
          </p>
        </motion.div>

        {/* ============================
            PROBLEM & SOLUTION
        ============================ */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Problem */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-slate-800
              border
              border-red-500/20
              rounded-3xl
              p-8
            "
          >
            <h3 className="text-2xl font-semibold text-red-400 mb-5">
              The Problem
            </h3>

            <p className="text-slate-300 leading-8">
              {caseStudy.problem}
            </p>
          </motion.div>

          {/* Solution */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-slate-800
              border
              border-cyan-500/20
              rounded-3xl
              p-8
            "
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-5">
              The Solution
            </h3>

            <p className="text-slate-300 leading-8">
              {caseStudy.solution}
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}