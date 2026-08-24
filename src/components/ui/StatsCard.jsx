import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function StatsCard({ number, label }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [count, setCount] = useState(0);
  const animationStarted = useRef(false);

  const value = parseInt(number, 10);

  const suffix = number.includes("+")
    ? "+"
    : number.includes("%")
    ? "%"
    : "";

  useEffect(() => {
    if (!inView || animationStarted.current) {
      return;
    }

    animationStarted.current = true;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out animation
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = Math.floor(
        easedProgress * value
      );

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        bg-slate-800
        rounded-2xl
        p-8
        text-center
        shadow-lg
        border
        border-slate-700
        hover:border-cyan-500
        transition-colors
        duration-300
      "
    >
      <h3 className="text-4xl font-bold text-cyan-400">
        {inView ? count : 0}
        {suffix}
      </h3>

      <p className="mt-3 text-slate-300">
        {label}
      </p>
    </motion.div>
  );
}