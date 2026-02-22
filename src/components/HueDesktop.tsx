import type { MotionValue } from "motion";
import { useMotionTemplate, useTransform, motion } from "motion/react";
import { useEffect, useState } from "react";

interface Props {
  scrollYProgress: MotionValue<number>;
}
const HueDesktop = ({ scrollYProgress }: Props) => {
  const [startWidthPx, setStartWidthPx] = useState(0);
  const [startHeightPx, setStartHeightPx] = useState(0);

  // 2. Size: Using pixels for both to keep scaling consistent
  // Note: 120% of a standard screen is roughly 1200px-1500px
  // 2. Animate from PIXELS to PIXELS
  // This ensures that after 0.2, the orb is EXACTLY 600px and stays that way.
  const width = useTransform(
    scrollYProgress,
    [0, 0.2],
    [`${startWidthPx}px`, "1100px"],
  );
  const height = useTransform(
    scrollYProgress,
    [0, 0.2],
    [`${startHeightPx}px`, "1100px"],
  );

  const x = useTransform(scrollYProgress, [0, 0.2], ["-25vw", "-27vw"]);

  // y: Originally -120px (roughly 10-15vh)
  // We move it much higher up to create that "exit" animation
  const y = useTransform(scrollYProgress, [0, 0.2], ["-10vh", "-50vh"]);
  // 3. Styling
  const skewX = useTransform(scrollYProgress, [0, 0.2], [-20, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.2], ["50%", "50%"]);
  const blurRaw = useTransform(scrollYProgress, [0, 0.2], [250, 120]); // Use numbers, not strings
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.35, 0.2]);
  const blurValue = useMotionTemplate`blur(${blurRaw}px)`; // This creates

  useEffect(() => {
    setStartWidthPx(window.innerWidth * 1.31); // 131vw in pixels
    setStartHeightPx(window.innerHeight * 1.8); // 120vh in pixels
  }, []);
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      style={{
        x,
        y,
        translateX: "-20%", // Keeps more of the orb "on stage"
        translateY: "-20%",
        filter: blurValue,

        // WebkitBackdropFilter: "blur(10px)", // Optional: gives it a "glass" feel
        // backdropFilter: "blur(10px)",
        opacity,
        width,
        height,
        skewX,
        borderRadius,
      }}
      className="fixed bg-primary/60   pointer-events-none will-change-transform"
    />
  );
};

export default HueDesktop;
