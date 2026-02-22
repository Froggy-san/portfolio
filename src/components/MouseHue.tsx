import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  // 1. Create Motion Values for X and Y
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Add "Physics" to the movement (Smoothness)
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half the width/height (150px / 2 = 75) to center it on the cursor
      mouseX.set(e.clientX - 75);
      mouseY.set(e.clientY - 75);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="fixed top-0 left-0 w-[150px] h-[150px] bg-primary/40 blur-[80px] rounded-full pointer-events-none  z-[-2] mix-blend-screen"
    />
  );
}
