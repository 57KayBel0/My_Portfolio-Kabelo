import { useState, useEffect, useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function ProjectModal({
  project,
  details,
  isOpen,
  onClose,
}) {

  if (!project || !details) return null;

  // ===========================
  // Image Gallery
  // ===========================

  const images =
    details.screenshots &&
    details.screenshots.length > 0
      ? details.screenshots
      : [project.image];

  const [currentImage, setCurrentImage] =
    useState(0);
    // ===========================
    // Modal Reference
    // ===========================

  const modalRef = useRef(null);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1
        ? 0
        : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );
  };

// ===========================
// Keyboard Shortcuts
// ===========================

useEffect(() => {
  if (!isOpen) return;

  const handleKeyDown = (event) => {

    switch (event.key) {

      case "Escape":
        onClose();
        break;

      case "ArrowLeft":
        previousImage();
        break;

      case "ArrowRight":
        nextImage();
        break;

      default:
        break;

    }

  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };

}, [isOpen, onClose, currentImage, images.length]);

// ===========================
// Lock Background Scroll
// ===========================

useEffect(() => {
  if (!isOpen) return;

  const originalOverflow = document.body.style.overflow;

  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = originalOverflow;
  };
}, [isOpen]);

// ===========================
// Close Modal When Clicking Outside
// ===========================

useEffect(() => {
  if (!isOpen) return;

  const handleMouseDown = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target)
    ) {
      onClose();
    }
  };

  document.addEventListener(
    "mousedown",
    handleMouseDown
  );

  return () => {
    document.removeEventListener(
      "mousedown",
      handleMouseDown
    );
  };
}, [isOpen, onClose]);

  return (

    <AnimatePresence>

      {isOpen && (
        
        <motion.div        
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25,}}
          className="
            fixed
            inset-0
            bg-black/80
            backdrop-blur-sm
            flex
            justify-center
            items-center
            p-6
            z-[9999]
          "
        >
            
            <motion.div

            ref={modalRef}

            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}

            transition={{
              duration: 0.3,
            }}

            className="
              relative
              bg-slate-900
              border
              border-slate-700
              rounded-3xl
              shadow-2xl
              w-full
              max-w-6xl
              max-h-[90vh]
              overflow-y-auto
            "
          >

            {/* ===========================
                Close Button
            =========================== */}

            <button

              onClick={onClose}

              className="
                absolute
                top-6
                right-6
                z-50

                bg-slate-800
                hover:bg-red-500

                w-12
                h-12

                rounded-full

                flex
                items-center
                justify-center

                transition
                duration-300
              "

            >

              <FaTimes className="text-xl" />

            </button>
            {/* =======================================
                    PROJECT IMAGE GALLERY
            ======================================== */}

            <div className="relative overflow-hidden rounded-t-3xl">

              <motion.img
                key={currentImage}

                initial={{
                opacity: 0,
                scale: 1.03,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                scale: 0.98,
              }}

              transition={{
                duration: 0.45,
              }}
                src={images[currentImage]}

                alt={project.title}

                className="
                  w-full
                  h-72
                  md:h-96
                  lg:h-[450px]
                  object-cover
                "
              />

              {/* Previous Button */}

              {images.length > 1 && (

                <button
                  onClick={previousImage}

                  className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2

                    w-12
                    h-12

                    rounded-full

                    bg-black/60

                    hover:bg-cyan-500

                    flex
                    items-center
                    justify-center

                    transition
                  "
                >

                  <FaChevronLeft className="text-xl" />

                </button>

              )}

              {/* Next Button */}

              {images.length > 1 && (

                <button
                  onClick={nextImage}

                  className="
                    absolute
                    right-5
                    top-1/2
                    -translate-y-1/2

                    w-12
                    h-12

                    rounded-full

                    bg-black/60

                    hover:bg-cyan-500

                    flex
                    items-center
                    justify-center

                    transition
                  "
                >

                  <FaChevronRight className="text-xl" />

                </button>

              )}

              {/* =======================================
                          Navigation Dots
                  ======================================= */}

              {images.length > 1 && (

              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  -translate-x-1/2

                  flex
                  gap-3

                  bg-black/40

                  px-4
                  py-2

                  rounded-full
                "
              >

                {images.map((_, index) => (

                  <button

                    key={index}

                    onClick={() => setCurrentImage(index)}

                    className={`
                      w-3
                      h-3

                      rounded-full

                      transition-all
                      duration-300

                      ${
                        currentImage === index
                          ? "bg-cyan-400 scale-125"
                          : "bg-white/50 hover:bg-white"
                      }
                    `}
                  />

                ))}

              </div>

              )}

              {/* Image Counter */}

              <div
                className="
                  absolute
                  bottom-5
                  right-5

                  bg-black/70

                  px-4
                  py-2

                  rounded-full

                  text-sm
                "
              >

                {currentImage + 1} / {images.length}

              </div>

            </div>

            {/* =======================================
                    THUMBNAIL GALLERY
            ======================================== */}

            {images.length > 1 && (

              <div
                className="
                  flex
                  gap-4
                  overflow-x-auto

                  p-6

                  bg-slate-950
                "
              >

                {images.map((image, index) => (

                  <img

                    key={index}

                    src={image}

                    alt={`Screenshot ${index + 1}`}

                    onClick={() =>
                      setCurrentImage(index)
                    }

                    className={`
                      w-28
                      h-20

                      rounded-lg

                      object-cover

                      cursor-pointer

                      border-2

                      transition-all

                      ${
                        currentImage === index
                          ? "border-cyan-400 scale-110 shadow-lg shadow-cyan-500/50"
                          : "border-transparent hover:border-cyan-400"
                      }
                    `}
                  />

                ))}

              </div>

            )}

            {/* =======================================
                    PROJECT CONTENT STARTS HERE
            ======================================== */}

            <div className="p-10">
              {/* =======================================
                      PROJECT HEADER
              ======================================== */}

              <div className="mb-10">

                <span
                  className="
                    inline-block
                    bg-cyan-500/20
                    text-cyan-400
                    px-4
                    py-2
                    rounded-full
                    font-semibold
                    mb-5
                  "
                >
                  {project.category}
                </span>

                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  {project.title}
                </h2>

                <p
                  className="
                    text-slate-400
                    text-lg
                    leading-8
                  "
                >
                  {project.description}
                </p>

              </div>

              {/* =======================================
                      OVERVIEW
              ======================================== */}

              <div className="mb-12">

                <h3
                  className="
                    text-3xl
                    font-bold
                    mb-4
                    text-cyan-400
                  "
                >
                  Project Overview
                </h3>

                <p
                  className="
                    text-slate-300
                    leading-8
                  "
                >
                  {details.overview}
                </p>

              </div>

              {/* =======================================
                      PROBLEM
              ======================================== */}

              <div className="mb-12">

                <h3
                  className="
                    text-3xl
                    font-bold
                    mb-4
                    text-cyan-400
                  "
                >
                  Problem Statement
                </h3>

                <p
                  className="
                    text-slate-300
                    leading-8
                  "
                >
                  {details.problem}
                </p>

              </div>

              {/* =======================================
                      SOLUTION
              ======================================== */}

              <div className="mb-12">

                <h3
                  className="
                    text-3xl
                    font-bold
                    mb-4
                    text-cyan-400
                  "
                >
                  Solution
                </h3>

                <p
                  className="
                    text-slate-300
                    leading-8
                  "
                >
                  {details.solution}
                </p>

              </div>

              {/* =======================================
                      ARCHITECTURE
              ======================================== */}

              <div className="mb-12">

                <h3
                  className="
                    text-3xl
                    font-bold
                    mb-6
                    text-cyan-400
                  "
                >
                  System Architecture
                </h3>

                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-3
                  "
                >

                  {details.architecture.map((item, index) => (

                    <div
                      key={index}
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >

                      <div
                        className="
                          bg-slate-800
                          px-4
                          py-3
                          rounded-xl
                          border
                          border-slate-700
                        "
                      >
                        {item}
                      </div>

                      {index !== details.architecture.length - 1 && (

                        <span className="text-cyan-400 text-xl">
                          →
                        </span>

                      )}

                    </div>

                  ))}

                </div>

              </div>
              {/* =======================================
                      TECHNOLOGIES
              ======================================== */}

              <div className="mb-12">

                <h3
                  className="
                    text-3xl
                    font-bold
                    mb-6
                    text-cyan-400
                  "
                >
                  Technologies Used
                </h3>

                <div className="flex flex-wrap gap-3">

                  {details.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        bg-slate-800
                        border
                        border-slate-700
                        hover:border-cyan-400

                        px-5
                        py-3

                        rounded-full

                        transition
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

              {/* =======================================
                      KEY FEATURES
              ======================================== */}

              <div className="mb-12">

                <h3
                  className="
                    text-3xl
                    font-bold
                    mb-6
                    text-cyan-400
                  "
                >
                  Key Features
                </h3>

                <div className="grid md:grid-cols-2 gap-5">

                  {details.features.map((feature) => (

                    <motion.div

                      key={feature}

                      whileHover={{
                        y: -5,
                      }}

                      className="
                        bg-slate-800
                        border
                        border-slate-700

                        rounded-2xl

                        p-5

                        hover:border-cyan-400

                        transition
                      "
                    >

                      <div className="flex items-center gap-4">

                        <div
                          className="
                            w-10
                            h-10

                            rounded-full

                            bg-cyan-500/20

                            flex
                            items-center
                            justify-center

                            text-cyan-400
                            font-bold
                          "
                        >
                          ✓
                        </div>

                        <p>{feature}</p>

                      </div>

                    </motion.div>

                  ))}

                </div>

              </div>

              {/* =======================================
                      CHALLENGES
              ======================================== */}

              <div className="mb-12">

                <h3
                  className="
                    text-3xl
                    font-bold
                    mb-6
                    text-cyan-400
                  "
                >
                  Challenges
                </h3>

                <div className="space-y-4">

                  {details.challenges.map((challenge) => (

                    <div
                      key={challenge}
                      className="
                        bg-slate-800
                        border
                        border-slate-700

                        rounded-xl

                        p-5
                      "
                    >

                      <span className="text-red-400 mr-3">
                        ●
                      </span>

                      {challenge}

                    </div>

                  ))}

                </div>

              </div>

              {/* =======================================
                      ACHIEVEMENTS
              ======================================== */}

              <div className="mb-12">

                <h3
                  className="
                    text-3xl
                    font-bold
                    mb-6
                    text-cyan-400
                  "
                >
                  Achievements
                </h3>

                <div className="grid md:grid-cols-2 gap-5">

                  {details.achievements.map((achievement) => (

                    <div
                      key={achievement}
                      className="
                        bg-gradient-to-r

                        from-cyan-500/10

                        to-slate-800

                        border

                        border-cyan-500/30

                        rounded-2xl

                        p-5
                      "
                    >

                      🏆 {achievement}

                    </div>

                  ))}

                </div>

              </div>

              {/* =======================================
                      LESSONS LEARNED
              ======================================== */}

              <div className="mb-12">

                <h3
                  className="
                    text-3xl
                    font-bold
                    mb-6
                    text-cyan-400
                  "
                >
                  Lessons Learned
                </h3>

                <div className="grid md:grid-cols-2 gap-5">

                  {details.lessonsLearned.map((lesson) => (

                    <div
                      key={lesson}
                      className="
                        bg-slate-800

                        border

                        border-slate-700

                        rounded-2xl

                        p-5

                        hover:border-cyan-400

                        transition
                      "
                    >

                      📚 {lesson}

                    </div>

                  ))}

                </div>

              </div>
              {/* =======================================
                      ACTION BUTTONS
              ======================================== */}

              <div
                className="
                  flex
                  flex-wrap
                  justify-center
                  gap-5
                  pt-6
                  border-t
                  border-slate-700
                "
              >

                {/* GitHub */}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    gap-3

                    bg-cyan-500
                    hover:bg-cyan-600

                    px-8
                    py-4

                    rounded-xl

                    font-semibold

                    transition
                  "
                >
                  <FaGithub />

                  View Source Code
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

                      px-8
                      py-4

                      rounded-xl

                      font-semibold

                      transition
                    "
                  >

                    <FaExternalLinkAlt />

                    Live Demo

                  </a>

                )}

                {/* Close */}

                <button

                  onClick={onClose}

                  className="
                    flex
                    items-center
                    gap-3

                    bg-slate-700
                    hover:bg-red-500

                    px-8
                    py-4

                    rounded-xl

                    font-semibold

                    transition
                  "
                >

                  <FaTimes />

                  Close

                </button>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}

