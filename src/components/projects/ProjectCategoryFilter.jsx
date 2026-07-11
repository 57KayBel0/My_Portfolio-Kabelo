import { motion } from "framer-motion";

import {
  FaLayerGroup,
  FaDatabase,
  FaBrain,
  FaChartBar,
  FaLaptopCode,
} from "react-icons/fa";

const filters = [
  {
    name: "All",
    icon: <FaLayerGroup />,
  },
  {
    name: "Data Engineering",
    icon: <FaDatabase />,
  },
  {
    name: "Machine Learning",
    icon: <FaBrain />,
  },
  {
    name: "Data Analysis",
    icon: <FaChartBar />,
  },
  {
    name: "Full Stack Development",
    icon: <FaLaptopCode />,
  },
];

export default function ProjectCategoryFilter({
  activeFilter,
  setActiveFilter,
  projects,
}) {
  const getProjectCount = (category) => {
    if (category === "All") {
      return projects.length;
    }

    return projects.filter(
      (project) => project.category === category
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
      {/* Header */}

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
          Categories
        </p>

        <h2
          className="
            text-4xl
            font-bold
            mb-3
          "
        >
          Browse Projects
        </h2>

        <p
          className="
            text-slate-400
            max-w-2xl
            mx-auto
          "
        >
          Explore projects based on your area of
          interest and discover the technologies
          behind each solution.
        </p>

      </div>

      {/* Filter Chips */}

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-5
        "
      >

        {filters.map((filter) => (

          <motion.button

            key={filter.name}

            whileHover={{
              y: -6,
              scale: 1.04,
            }}

            whileTap={{
              scale: 0.96,
            }}

            onClick={() =>
              setActiveFilter(filter.name)
            }

            className={`
              relative

              overflow-hidden

              flex

              items-center

              gap-4

              rounded-2xl

              px-6

              py-4

              border

              transition-all

              duration-300

              ${
                activeFilter === filter.name

                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 shadow-xl shadow-cyan-500/30"

                  : "bg-white/5 backdrop-blur-xl border-white/10 hover:border-cyan-400/50 hover:bg-white/10"
              }
            `}
          >

            {/* Icon */}

            <div
              className="
                w-11
                h-11

                rounded-xl

                bg-black/20

                flex

                items-center

                justify-center

                text-lg
              "
            >
              {filter.icon}
            </div>

            {/* Text */}

            <div className="text-left">

              <h4 className="font-semibold">

                {filter.name}

              </h4>

              <p
                className="
                  text-xs

                  opacity-80
                "
              >
                {getProjectCount(filter.name)} Project
                {getProjectCount(filter.name) !== 1 &&
                  "s"}
              </p>

            </div>

          </motion.button>

        ))}

      </div>
    </motion.div>
  );
}