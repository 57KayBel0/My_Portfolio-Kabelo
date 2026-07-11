import { motion } from "framer-motion";

export default function TechnologyFilter({
  projects,
  selectedTechnology,
  setSelectedTechnology,
}) {
  // ==========================================
  // Get Unique Technologies
  // ==========================================

  const technologies = [
    "All",
    ...new Set(
      projects.flatMap((project) => project.technologies)
    ),
  ];

  const getTechnologyCount = (technology) => {
    if (technology === "All") {
      return projects.length;
    }

    return projects.filter((project) =>
      project.technologies.includes(technology)
    ).length;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className="mb-16"
    >
      {/* ===========================
            Heading
      =========================== */}

      <div className="text-center mb-10">

        <p
          className="
            uppercase
            tracking-[0.3em]
            text-cyan-400
            text-sm
            font-semibold
            mb-3
          "
        >
          Technologies
        </p>

        <h2
          className="
            text-4xl
            font-bold
            mb-3
          "
        >
          Explore By Tech Stack
        </h2>

        <p
          className="
            text-slate-400
            max-w-2xl
            mx-auto
          "
        >
          Browse projects based on the technologies
          used to build them.
        </p>

      </div>

      {/* ===========================
            Technology Chips
      =========================== */}

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-4
        "
      >

        {technologies.map((tech) => (

          <motion.button

            key={tech}

            whileHover={{
              y: -5,
              scale: 1.05,
            }}

            whileTap={{
              scale: 0.96,
            }}

            onClick={() =>
              setSelectedTechnology(tech)
            }

            className={`
              flex
              items-center
              gap-3

              px-5
              py-3

              rounded-full

              border

              transition-all
              duration-300

              ${
                selectedTechnology === tech

                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 shadow-lg shadow-cyan-500/30"

                  : "bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-cyan-400/40"
              }
            `}
          >

            <span
              className="
                font-semibold
              "
            >
              {tech}
            </span>

            <span
              className="
                bg-black/20

                px-2
                py-1

                rounded-full

                text-xs
                font-bold
              "
            >
              {getTechnologyCount(tech)}
            </span>

          </motion.button>

        ))}

      </div>
    </motion.div>
  );
}