import { useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrevious, onNext]);

  if (!images?.length) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        bg-black/90
        flex
        items-center
        justify-center
        p-6
      "
    >
      {/* Close */}

      <button
        onClick={onClose}
        className="
          absolute
          top-6
          right-6
          text-white
          text-3xl
          hover:text-cyan-400
        "
      >
        <FaTimes />
      </button>

      {/* Previous */}

      <button
        onClick={onPrevious}
        className="
          absolute
          left-6
          text-white
          text-4xl
          hover:text-cyan-400
        "
      >
        <FaChevronLeft />
      </button>

      {/* Image */}

      <img
        src={images[currentIndex]}
        alt=""
        className="
          max-w-full
          max-h-[90vh]
          rounded-2xl
          shadow-2xl
        "
      />

      {/* Next */}

      <button
        onClick={onNext}
        className="
          absolute
          right-6
          text-white
          text-4xl
          hover:text-cyan-400
        "
      >
        <FaChevronRight />
      </button>
    </div>
  );
}