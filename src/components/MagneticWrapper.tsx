import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";

export default function MagneticWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for the position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for the "heavy" feeling
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { width, height, left, top } = ref.current.getBoundingClientRect();

      // Calculate center of the button
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Calculate distance from center
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      // Pull strength (0.35 means it moves 35% of the distance to the mouse)
      x.set(distanceX * 0.35);
      y.set(distanceY * 0.35);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
