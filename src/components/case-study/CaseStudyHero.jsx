import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function CaseStudyHero({ caseStudy }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      {/* Background Glow */}

      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">

        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="uppercase tracking-[0.3em] text-cyan-400 text-sm font-semibold mb-5"
        >
          {caseStudy.category}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          {caseStudy.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg max-w-4xl leading-8"
        >
          {caseStudy.subtitle}
        </motion.p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-3 mt-10">

          {caseStudy.technologies.map((tech) => (

            <span
              key={tech}
              className="
                px-5
                py-2
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/30
                text-cyan-300
                font-medium
              "
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-5 mt-12">

          <a
            href={caseStudy.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-3
              bg-cyan-500
              hover:bg-cyan-600
              px-8
              py-4
              rounded-2xl
              font-semibold
              transition
            "
          >
            <FaGithub />
            View Source Code
          </a>

          {caseStudy.live && (

            <a
              href={caseStudy.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3
                border
                border-slate-700
                hover:border-cyan-400
                px-8
                py-4
                rounded-2xl
                transition
              "
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

          )}

        </div>

      </div>

    </section>
  );
}