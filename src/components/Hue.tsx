import useIsDesktop from "@/hooks/useIsDisktop";
import type { MotionValue } from "motion";
import { useMotionTemplate, useTransform, motion } from "motion/react";
import { useEffect, useState } from "react";

interface Props {
  scrollYProgress: MotionValue<number>;
}
const HueDesktop = ({ scrollYProgress }: Props) => {
  const [startWidthPx, setStartWidthPx] = useState(0);
  const [startHeightPx, setStartHeightPx] = useState(0);
  const isDesktop = useIsDesktop();
  console.log("isDesktop:", isDesktop);
  const widthAnimation = isDesktop
    ? [`${startWidthPx}px`, "1100px"]
    : [`${startWidthPx}px`, "450px"];
  const heightAnimation = isDesktop
    ? [`${startHeightPx}px`, "1100px"]
    : [`${startHeightPx}px`, "450px"];
  const xAnimation = isDesktop ? ["-25vw", "-27vw"] : ["0vw", "-27vw"];
  const yAnimation = isDesktop ? ["-10vh", "-50vh"] : ["-25vh", "-20vh"];
  const skewXAnimation = isDesktop ? [-20, 0] : [22, 0];
  const borderRadiusAnimation = isDesktop ? ["50%", "50%"] : ["0%", "50%"];
  const blurAnimation = isDesktop ? [250, 120] : [150, 120];
  const opacityAnimation = isDesktop ? [0.35, 0.2] : [0.5, 0.2];

  // 2. Size: Using pixels for both to keep scaling consistent
  // Note: 120% of a standard screen is roughly 1200px-1500px
  // 2. Animate from PIXELS to PIXELS
  // This ensures that after 0.2, the orb is EXACTLY 600px and stays that way.
  const width = useTransform(scrollYProgress, [0, 0.2], widthAnimation);
  const height = useTransform(scrollYProgress, [0, 0.2], heightAnimation);

  const x = useTransform(scrollYProgress, [0, 0.2], xAnimation);

  // y: Originally -120px (roughly 10-15vh)
  // We move it much higher up to create that "exit" animation
  const y = useTransform(scrollYProgress, [0, 0.2], yAnimation);
  // 3. Styling
  const skewX = useTransform(scrollYProgress, [0, 0.2], skewXAnimation);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.2],
    borderRadiusAnimation,
  );
  const blurRaw = useTransform(scrollYProgress, [0, 0.2], blurAnimation); // Use numbers, not strings
  const opacity = useTransform(scrollYProgress, [0, 0.2], opacityAnimation);
  const blurValue = useMotionTemplate`blur(${blurRaw}px)`; // This creates

  useEffect(() => {
    // setStartWidthPx(window.innerWidth * 1.31); // 131vw in pixels
    // setStartHeightPx(window.innerHeight * 1.8); // 120vh in pixels
    if (isDesktop) {
      setStartWidthPx(window.innerWidth * 1.31); // 131vw in pixels
      setStartHeightPx(window.innerHeight * 1.8); // 120vh in pixels
    } else {
      setStartHeightPx(window.innerHeight * 0.95); // 120vh in pixels
      setStartWidthPx(window.innerWidth); // 131vw in pixels
    }
  }, [isDesktop]);
  return (
    <motion.div
      key={isDesktop ? "desktop" : "mobile"}
      initial={{
        scale: 0,
      }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      style={{
        x,
        y,
        translateX: isDesktop ? "-20%" : "0%",
        translateY: isDesktop ? "-20%" : "0%",
        filter: blurValue,
        opacity,

        // WebkitBackdropFilter: "blur(10px)", // Optional: gives it a "glass" feel
        // backdropFilter: "blur(10px)",
        width,
        height,
        skewX: isDesktop ? skewX : undefined,
        skewY: isDesktop ? 0 : skewX,
        borderRadius,
      }}
      className="fixed bg-primary/60   pointer-events-none will-change-transform"
    />
  );
};

export default HueDesktop;

//! imporant: When we attempted to change the opacity animation based on the size of the screen, and we face a prblem where it was defaulting to the mobile animation even on desktop, we can use the transformer function inside useTransform to dynamically calculate the opacity based on the scroll progress and the screen size. This way, we can ensure that the correct opacity values are applied for both desktop and mobile views without needing to switch between different animations. Or you can add the "isDesktop" key to the hue div and use it to trigger a re-render when the screen size changes, ensuring that the correct animation is applied based on the current screen size.

/*
 
 // 1. Keep your logic inside the transform function
const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1], {
  // Use the transform function to return the correct value dynamically
  transformer: (v) => {
    // Map the 0-1 progress of the scrollYProgress to your specific ranges
    const p = Math.min(Math.max((v - 0) / (0.2 - 0), 0), 1); // Manual lerp
    
    if (isDesktop) {
      // Desktop: 0.35 -> 0.2
      return 0.35 + p * (0.2 - 0.35);
    } else {
      // Mobile: 0.5 -> 0.2
      return 0.5 + p * (0.2 - 0.5);
    }
  }
});
 */
