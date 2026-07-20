import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaBookOpen,
} from "react-icons/fa";

import projectDetails from "../../data/projectDetails";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  const details = projectDetails.find(
    (item) => item.id === project.id
  );

  return (
    <>
      {/* ================= CARD ================= */}

      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          bg-slate-900
          rounded-3xl
          overflow-hidden
          border
          border-slate-800
          shadow-lg
          hover:border-cyan-500
          transition-all
          duration-300
        "
      >
        {/* ================= IMAGE ================= */}

        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              h-60
              object-cover
              hover:scale-110
              transition-transform
              duration-500
            "
          />
        </div>

        {/* ================= CONTENT ================= */}

        <div className="p-8">

          {/* Category */}

          <span
            className="
              inline-block
              bg-cyan-500/20
              text-cyan-400
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
              mb-4
            "
          >
            {project.category}
          </span>

          {/* Title */}

          <h3 className="text-2xl font-bold mb-4">
            {project.title}
          </h3>

          {/* Description */}

          <p
            className="
              text-slate-400
              leading-7
              mb-6
            "
          >
            {project.description}
          </p>

          {/* Technologies */}

          <div className="flex flex-wrap gap-2 mb-8">

            {project.technologies.map((tech) => (

              <span
                key={tech}
                className="
                  bg-slate-800
                  text-sm
                  px-3
                  py-2
                  rounded-full
                "
              >
                {tech}
              </span>

            ))}

          </div>

          {/* ================= ACTION BUTTONS ================= */}

          <div className="flex flex-wrap gap-4">

            {/* Existing Modal */}

            <button
              onClick={() => setIsOpen(true)}
              className="
                flex
                items-center
                gap-3
                bg-cyan-500
                hover:bg-cyan-600
                px-5
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              View Details

              <FaArrowRight />
            </button>

            {/* NEW CASE STUDY BUTTON */}

            {project.slug && (
              <Link
                to={`/preview/${project.slug}`}
                className="
                  flex
                  items-center
                  gap-3
                  border
                  border-cyan-500
                  text-cyan-400
                  hover:bg-cyan-500
                  hover:text-white
                  px-5
                  py-3
                  rounded-xl
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                <FaBookOpen />

                Case Study
              </Link>
            )}

            {/* GitHub */}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-3
                bg-slate-700
                hover:bg-slate-600
                px-5
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              <FaGithub />

              GitHub
            </a>

            {/* Live Demo */}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-3
                  bg-green-600
                  hover:bg-green-700
                  px-5
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                <FaExternalLinkAlt />

                Live Demo
              </a>
            )}

          </div>

        </div>

      </motion.div>

      {/* ================= MODAL ================= */}

      <ProjectModal
        project={project}
        details={details}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}