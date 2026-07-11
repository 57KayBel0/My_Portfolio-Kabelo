import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function ProjectSearch({
  searchTerm,
  setSearchTerm,
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
      className="max-w-4xl mx-auto mb-14"
    >
      <div className="relative group">

        {/* Background Glow */}

        <div
          className="
            absolute
            inset-0

            rounded-3xl

            bg-cyan-500/10

            blur-xl

            opacity-0

            group-focus-within:opacity-100

            transition-all

            duration-500
          "
        />

        {/* Search Box */}

        <div
          className="
            relative

            flex
            items-center

            rounded-3xl

            border

            border-white/10

            bg-white/5

            backdrop-blur-xl

            px-6

            py-5

            shadow-xl

            transition-all

            duration-300

            group-focus-within:border-cyan-400
          "
        >

          {/* Search Icon */}

          <FaSearch
            className="
              text-slate-400

              text-xl

              mr-5

              transition-all

              duration-300

              group-focus-within:text-cyan-400
            "
          />

          {/* Input */}

          <input
            type="text"

            value={searchTerm}

            onChange={(e) =>
              setSearchTerm(e.target.value)
            }

            placeholder="Search projects, technologies or categories..."

            className="
              flex-1

              bg-transparent

              outline-none

              text-lg

              placeholder:text-slate-500
            "
          />

          {/* Keyboard Shortcut */}

          <div
            className="
              hidden

              md:flex

              items-center

              gap-2

              rounded-xl

              border

              border-white/10

              bg-slate-900/70

              px-3

              py-2

              text-xs

              text-slate-400
            "
          >

            <span>Ctrl</span>

            <span>+</span>

            <span>K</span>

          </div>

        </div>

      </div>
    </motion.div>
  );
}