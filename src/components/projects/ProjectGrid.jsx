import { motion, AnimatePresence } from "framer-motion";

import ProjectCard from "../ui/ProjectCard";

export default function ProjectGrid({ projects, resetFilters }) {

  return (

    <AnimatePresence mode="wait">

      {projects.length > 0 ? (

        <motion.div

          key={projects.length}

          layout

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          exit={{
            opacity: 0,
            y: -20,
          }}

          transition={{
            duration: 0.35,
          }}

          className="
            grid
            lg:grid-cols-2
            gap-10
          "

        >

          {projects.map((project, index) => (

            <motion.div

              key={project.id}

              layout

              initial={{
                opacity: 0,
                scale: 0.95,
                y: 30,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.95,
              }}

              transition={{
                duration: 0.35,
                delay: index * 0.08,
              }}

            >

              <ProjectCard

                project={project}

              />

            </motion.div>

          ))}

        </motion.div>

      ) : (

        <motion.div

          initial={{
            opacity: 0,
            scale: 0.95,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          exit={{
            opacity: 0,
          }}

          className="
            text-center
            py-24
          "

        >

          <div

            className="
              text-7xl
              mb-6
            "

          >

            🔍

          </div>

          <h2

            className="
              text-4xl
              font-bold
              mb-4
            "

          >

            No Projects Found

          </h2>

          <p

            className="
              text-slate-400
              max-w-lg
              mx-auto
              mb-8
            "

          >

            No projects match your search,
            selected category or technology.

          </p>

          <button

            onClick={resetFilters}

            className="
              bg-cyan-500

              hover:bg-cyan-600

              px-8
              py-4

              rounded-xl

              font-semibold

              transition-all
              duration-300
            "

          >

            Reset Filters

          </button>

        </motion.div>

      )}

    </AnimatePresence>

  );

}