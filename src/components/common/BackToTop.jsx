import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    visible && (
      <button
        onClick={scrollTop}
        className="
          fixed
          bottom-8
          right-8
          w-14
          h-14
          rounded-full
          bg-cyan-500
          hover:bg-cyan-600
          shadow-xl
          flex
          items-center
          justify-center
          transition
          z-50
        "
      >
        <FaArrowUp />
      </button>
    )
  );
}