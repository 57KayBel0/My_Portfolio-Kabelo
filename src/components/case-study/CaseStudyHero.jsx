import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CaseStudyHero({ caseStudy }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      {/* Background Glow */}

      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">

        {/* Back Button */}

        <Link
          to="/"
          className="
            inline-flex
            items-center
            gap-2
            text-slate-400
            hover:text-cyan-400
            transition
            mb-10
          "
        >
          <FaArrowLeft />

          Back to Portfolio
        </Link>

        {/* Featured Badge */}

        {caseStudy.featured && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              inline-flex
              items-center
              gap-2
              bg-yellow-500/10
              border
              border-yellow-500/30
              text-yellow-400
              px-5
              py-2
              rounded-full
              font-semibold
              mb-8
            "
          >
            <FaStar />

            Featured Project

          </motion.div>

        )}

        {/* Category */}

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            uppercase
            tracking-[0.3em]
            text-cyan-400
            text-sm
            font-semibold
            mb-4
          "
        >
          {caseStudy.category}
        </motion.p>

        {/* Title */}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
            text-5xl
            lg:text-7xl
            font-extrabold
            leading-tight
            mb-6
          "
        >
          {caseStudy.title}
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            text-slate-400
            text-xl
            leading-9
            max-w-4xl
            mb-14
          "
        >
          {caseStudy.subtitle}
        </motion.p>

        {/* Project Information */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            grid
            grid-cols-2
            lg:grid-cols-5
            gap-6
            mb-14
          "
        >

          <InfoCard
            title="Role"
            value={caseStudy.role}
          />

          <InfoCard
            title="Duration"
            value={caseStudy.duration}
          />

          <InfoCard
            title="Status"
            value={caseStudy.status}
          />

          <InfoCard
            title="Industry"
            value={caseStudy.industry}
          />

          <InfoCard
            title="Database"
            value={caseStudy.database}
          />

        </motion.div>

        {/* Technologies */}

        <div className="flex flex-wrap gap-3 mb-14">

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

        <div className="flex flex-wrap gap-5">

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

function InfoCard({ title, value }) {
  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-5
      "
    >
      <p className="text-sm text-slate-500 mb-2">
        {title}
      </p>

      <p className="font-semibold text-lg">
        {value}
      </p>
    </div>
  );
}