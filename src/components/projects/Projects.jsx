import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import projectsData from "../../data/projects";

import SectionTitle from "../ui/SectionTitle";

import ProjectStats from "./ProjectStats";
import ProjectSearch from "./ProjectSearch";
import ProjectCategoryFilter from "./ProjectCategoryFilter";
import TechnologyFilter from "./TechnologyFilter";
import ProjectSort from "./ProjectSort";
import ProjectGrid from "./ProjectGrid";

export default function Projects() {

  /* =====================================
      STATE
  ===================================== */

  const [searchTerm, setSearchTerm] = useState("");

  const [activeFilter, setActiveFilter] =
    useState("All");

  const [selectedTechnology, setSelectedTechnology] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("featured");

  /* =====================================
      RESET FILTERS
  ===================================== */

  const resetFilters = () => {

    setSearchTerm("");

    setActiveFilter("All");

    setSelectedTechnology("All");

    setSortBy("featured");

  };

  /* =====================================
      FILTER PROJECTS
  ===================================== */

  const filteredProjects = useMemo(() => {

    let filtered = [...projectsData];

    /* ------------------------------- */
    /* Search */
    /* ------------------------------- */

    if (searchTerm.trim()) {

      const search = searchTerm.toLowerCase();

      filtered = filtered.filter((project) =>
        project.title.toLowerCase().includes(search) ||

        project.description
          .toLowerCase()
          .includes(search) ||

        project.category
          .toLowerCase()
          .includes(search) ||

        project.technologies.some((tech) =>
          tech.toLowerCase().includes(search)
        )
      );

    }

    /* ------------------------------- */
    /* Category */
    /* ------------------------------- */

    if (activeFilter !== "All") {

      filtered = filtered.filter(
        (project) =>
          project.category === activeFilter
      );

    }

    /* ------------------------------- */
    /* Technology */
    /* ------------------------------- */

    if (selectedTechnology !== "All") {

      filtered = filtered.filter((project) =>
        project.technologies.includes(
          selectedTechnology
        )
      );

    }

    /* ------------------------------- */
    /* Sorting */
    /* ------------------------------- */

    switch (sortBy) {

      case "alphabetical":

        filtered.sort((a, b) =>
          a.title.localeCompare(b.title)
        );

        break;

      case "category":

        filtered.sort((a, b) =>
          a.category.localeCompare(b.category)
        );

        break;

      case "technologies":

        filtered.sort(
          (a, b) =>
            b.technologies.length -
            a.technologies.length
        );

        break;

      case "featured":

      default:

        filtered.sort(
          (a, b) =>
            Number(b.featured) -
            Number(a.featured)
        );

    }

    return filtered;

  }, [
    searchTerm,
    activeFilter,
    selectedTechnology,
    sortBy,
  ]);

  return (

    <section
      id="projects"
      className="bg-slate-900 py-24"
    >

      <div className="container mx-auto px-6">

       {/* ==========================================
              HERO HEADER
      ========================================== */}

        <div className="text-center mb-20">

          <motion.p

            initial={{
              opacity: 0,
              y: -15,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            className="
              uppercase

              tracking-[0.35em]

              text-cyan-400

              text-sm

              font-semibold

              mb-5
            "

          >

            PROJECT EXPLORER

          </motion.p>

          <motion.h2

            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.1,
            }}

            viewport={{
              once: true,
            }}

            className="
              text-5xl

              lg:text-6xl

              font-extrabold

              leading-tight

              mb-6
            "

          >

            Building Intelligent

            <br />

            <span
              className="
                bg-gradient-to-r

                from-cyan-400

                via-blue-400

                to-purple-500

                bg-clip-text

                text-transparent
              "
            >

              Software & AI Solutions

            </span>

          </motion.h2>

          <motion.p

            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.2,
            }}

            viewport={{
              once: true,
            }}

            className="
              text-slate-400

              text-lg

              max-w-3xl

              mx-auto

              leading-8
            "

          >

            Explore my portfolio of software engineering,
            machine learning, data engineering and data
            analytics projects built with modern technologies
            and real-world problem solving in mind.

          </motion.p>

        </div>
        
        <motion.div

            initial={{
              opacity: 0,
              scaleX: 0,
            }}

            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.8,
            }}

            className="
              h-px

              bg-gradient-to-r

              from-transparent

              via-cyan-500

              to-transparent

              mb-20
            "

          />

        {/* =====================================
            PROJECT STATISTICS
        ===================================== */}

        {/* ==========================================
                PORTFOLIO OVERVIEW
        ========================================== */}

        <div className="mb-20">

          <motion.div

            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.5,
            }}

            className="
              flex

              flex-col

              lg:flex-row

              lg:items-center

              lg:justify-between

              gap-6

              mb-10
            "

          >

            {/* Left Side */}

            <div>

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

                Portfolio Overview

              </p>

              <h2
                className="
                  text-4xl

                  font-bold

                  mb-4
                "
              >

                Project Statistics

              </h2>

              <p
                className="
                  text-slate-400

                  max-w-3xl

                  leading-8
                "
              >

                A quick snapshot of my portfolio, highlighting
                the number of completed projects, technologies
                I've worked with, featured work, and areas of
                specialization.

              </p>

            </div>

            {/* Right Side */}

            <motion.div

              whileHover={{
                scale: 1.05,
              }}

              className="
                self-start

                rounded-2xl

                bg-gradient-to-r

                from-cyan-500/20

                to-blue-500/20

                border

                border-cyan-500/20

                px-6

                py-4
              "

            >

              <p className="text-slate-400 text-sm">

                Total Portfolio Projects

              </p>

              <h3 className="text-5xl font-bold text-cyan-400 mt-2">

                {projectsData.length}

              </h3>

            </motion.div>

          </motion.div>

          {/* Stats Grid */}

          <ProjectStats

            projects={projectsData}

          />

        </div>

        {/* =====================================
            SEARCH
        ===================================== */}

        {/* ==========================================
                PROJECT EXPLORER PANEL
        ========================================== */}

        <motion.div

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
                duration: 0.6,
            }}

            className="
                relative

                overflow-hidden

                rounded-[32px]

                border

                border-white/10

                bg-white/5

                backdrop-blur-2xl

                shadow-2xl

                mb-20

                p-10

                lg:p-14
            "

        >

            {/* Background Glow */}

            <div
                className="
                    absolute

                    -top-40

                    -right-40

                    w-96

                    h-96

                    rounded-full

                    bg-cyan-500/10

                    blur-[120px]
                "
            />

            <div
                className="
                    absolute

                    -bottom-40

                    -left-40

                    w-96

                    h-96

                    rounded-full

                    bg-purple-500/10

                    blur-[120px]
                "
            />

            {/* Heading */}

            <div className="relative z-10 mb-12">

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

                    Explore

                </p>

                <h2
                    className="
                        text-4xl

                        font-bold

                        mb-4
                    "
                >

                    Find The Right Project

                </h2>

                <p
                    className="
                        text-slate-400

                        max-w-3xl

                        leading-8
                    "
                >

                    Search by project name, browse categories,
                    filter technologies, or organize the portfolio
                    in the way that's most useful to you.

                </p>

            </div>

            {/* Search */}

            <ProjectSearch

                searchTerm={searchTerm}

                setSearchTerm={setSearchTerm}

            />

            {/* Divider */}

            <div className="border-t border-white/10 my-12" />

            {/* Categories */}

            <ProjectCategoryFilter

                projects={projectsData}

                activeFilter={activeFilter}

                setActiveFilter={setActiveFilter}

            />

            {/* Divider */}

            <div className="border-t border-white/10 my-12" />

            {/* Technologies */}

            <TechnologyFilter

                projects={projectsData}

                selectedTechnology={selectedTechnology}

                setSelectedTechnology={setSelectedTechnology}

            />

            {/* Divider */}

            <div className="border-t border-white/10 my-12" />

            {/* Sorting */}

            <ProjectSort

                sortBy={sortBy}

                setSortBy={setSortBy}

            />

        </motion.div>

        {/* =====================================
            RESULTS SUMMARY
        ===================================== */}

        {/* ==========================================
                RESULTS HEADER
        ========================================== */}

        <motion.div

            initial={{
                opacity: 0,
                y: 20,
            }}

            whileInView={{
                opacity: 1,
                y: 0,
            }}

            viewport={{
                once: true,
            }}

            transition={{
                duration: 0.5,
            }}

            className="
                mb-14

                rounded-3xl

                border

                border-white/10

                bg-white/5

                backdrop-blur-xl

                p-8
            "

        >

            <div
                className="
                    flex

                    flex-col

                    lg:flex-row

                    justify-between

                    lg:items-center

                    gap-8
                "
            >

                {/* Left */}

                <div>

                    <p
                        className="
                            uppercase

                            tracking-[0.3em]

                            text-cyan-400

                            text-sm

                            font-semibold

                            mb-2
                        "
                    >

                        Results

                    </p>

                    <h2
                        className="
                            text-4xl

                            font-bold

                            mb-3
                        "
                    >

                        Showing

                        <span className="text-cyan-400">

                            {" "}
                            {filteredProjects.length}

                        </span>

                        {" "}of{" "}

                        {projectsData.length}

                        {" "}Projects

                    </h2>

                    <p className="text-slate-400">

                        Refine your search using the filters
                        above to quickly discover relevant
                        projects.

                    </p>

                </div>

                {/* Active Filters */}

                <div
                    className="
                        flex

                        flex-wrap

                        gap-3

                        items-center
                    "
                >

                    {activeFilter !== "All" && (

                        <span
                            className="
                                px-4

                                py-2

                                rounded-full

                                bg-cyan-500/20

                                border

                                border-cyan-400/30

                                text-cyan-300
                            "
                        >

                            📂 {activeFilter}

                        </span>

                    )}

                    {selectedTechnology !== "All" && (

                        <span
                            className="
                                px-4

                                py-2

                                rounded-full

                                bg-purple-500/20

                                border

                                border-purple-400/30

                                text-purple-300
                            "
                        >

                            🛠 {selectedTechnology}

                        </span>

                    )}

                    {searchTerm && (

                        <span
                            className="
                                px-4

                                py-2

                                rounded-full

                                bg-green-500/20

                                border

                                border-green-400/30

                                text-green-300
                            "
                        >

                            🔍 "{searchTerm}"

                        </span>

                    )}

                </div>

            </div>

            {(searchTerm ||
              activeFilter !== "All" ||
              selectedTechnology !== "All") && (

                <div className="mt-8">

                    <button

                        onClick={resetFilters}

                        className="
                            rounded-2xl

                            bg-gradient-to-r

                            from-red-500

                            to-pink-500

                            px-6

                            py-3

                            font-semibold

                            hover:scale-105

                            transition-all

                            duration-300
                        "

                    >

                        Reset All Filters

                    </button>

                </div>

            )}

        </motion.div>

        {/* =====================================
            PROJECT GRID
        ===================================== */}

        <ProjectGrid
          projects={filteredProjects}
          resetFilters={resetFilters}
        />
              </div>

    </section>

  );

}