import { motion } from "framer-motion";

import {
  FaStar,
  FaSortAlphaDown,
  FaLayerGroup,
  FaTools,
} from "react-icons/fa";

const sortOptions = [
  {
    value: "featured",
    label: "Featured",
    icon: <FaStar />,
  },

  {
    value: "alphabetical",
    label: "A - Z",
    icon: <FaSortAlphaDown />,
  },

  {
    value: "category",
    label: "Category",
    icon: <FaLayerGroup />,
  },

  {
    value: "technologies",
    label: "Technologies",
    icon: <FaTools />,
  },
];

export default function ProjectSort({
  sortBy,
  setSortBy,
}) {
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

      <div className="text-center mb-8">

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
          Sort
        </p>

        <h2
          className="
            text-4xl
            font-bold
            mb-3
          "
        >
          Organize Projects
        </h2>

        <p
          className="
            text-slate-400
            max-w-xl
            mx-auto
          "
        >
          Choose how you'd like to browse my portfolio.
        </p>

      </div>

      {/* ===========================
          Segmented Control
      =========================== */}

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-4
        "
      >

        {sortOptions.map((option) => (

          <motion.button

            key={option.value}

            whileHover={{
              y: -4,
              scale: 1.03,
            }}

            whileTap={{
              scale: 0.96,
            }}

            onClick={() =>
              setSortBy(option.value)
            }

            className={`
              flex
              items-center
              gap-3

              px-6
              py-4

              rounded-2xl

              border

              font-medium

              transition-all
              duration-300

              ${
                sortBy === option.value

                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 shadow-xl shadow-cyan-500/30"

                  : "bg-white/5 backdrop-blur-xl border-white/10 hover:border-cyan-400/40 hover:bg-white/10"
              }
            `}
          >

            <span className="text-lg">

              {option.icon}

            </span>

            <span>

              {option.label}

            </span>

          </motion.button>

        ))}

      </div>

    </motion.div>
  );
}