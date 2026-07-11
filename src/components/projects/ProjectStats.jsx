import { motion } from "framer-motion";

import {
  FaFolderOpen,
  FaTools,
  FaLayerGroup,
  FaStar,
} from "react-icons/fa";

export default function ProjectStats({ projects }) {

  const totalProjects = projects.length;

  const featuredProjects =
    projects.filter((project) => project.featured).length;

  const categories = new Set(
    projects.map((project) => project.category)
  ).size;

  const technologies = new Set(
    projects.flatMap((project) => project.technologies)
  ).size;

  const stats = [
    {
      title: "Projects",
      value: totalProjects,
      subtitle: "Completed Portfolio Projects",
      icon: <FaFolderOpen />,
      color: "from-cyan-500 to-blue-500",
    },

    {
      title: "Technologies",
      value: technologies,
      subtitle: "Modern Development Stack",
      icon: <FaTools />,
      color: "from-green-500 to-emerald-500",
    },

    {
      title: "Categories",
      value: categories,
      subtitle: "Areas of Expertise",
      icon: <FaLayerGroup />,
      color: "from-purple-500 to-pink-500",
    },

    {
      title: "Featured",
      value: featuredProjects,
      subtitle: "Highlighted Projects",
      icon: <FaStar />,
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 mb-16">

      {stats.map((stat, index) => (

        <motion.div

          key={stat.title}

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            delay: index * 0.12,
            duration: 0.6,
          }}

          whileHover={{
            y: -12,
            scale: 1.03,
          }}

          className="
            relative

            overflow-hidden

            rounded-3xl

            border

            border-white/10

            bg-white/5

            backdrop-blur-xl

            p-8

            shadow-xl

            transition-all

            duration-500

            hover:border-cyan-400/40

            hover:shadow-cyan-500/20
          "

        >

          {/* Background Glow */}

          <div

            className={`
              absolute

              -top-20
              -right-20

              w-40
              h-40

              rounded-full

              bg-gradient-to-r

              ${stat.color}

              opacity-20

              blur-3xl
            `}
          />

          {/* Icon */}

          <div

            className={`
              w-16
              h-16

              rounded-2xl

              bg-gradient-to-r

              ${stat.color}

              flex

              items-center

              justify-center

              text-2xl

              text-white

              shadow-lg

              mb-8
            `}

          >

            {stat.icon}

          </div>

          {/* Number */}

          <h2

            className="
              text-5xl

              font-extrabold

              mb-2
            "

          >

            {stat.value}

          </h2>

          {/* Title */}

          <h3

            className="
              text-xl

              font-semibold

              mb-2
            "

          >

            {stat.title}

          </h3>

          {/* Subtitle */}

          <p

            className="
              text-slate-400

              text-sm

              leading-relaxed
            "

          >

            {stat.subtitle}

          </p>

        </motion.div>

      ))}

    </div>

  );

}