import { cn } from "@/lib/utils";
import type { MotionValue } from "motion";
import { motion } from "motion/react";
import React from "react";

interface Props {
  scrollYProgress: MotionValue<number>;
  className?: string;
}
const ProgressBar = ({ scrollYProgress, className }: Props) => {
  console.log(scrollYProgress, "SCROLL");
  return (
    <div
      className={cn(
        " w-50 fixed flex  h-[3px] rounded-[3px] right-[48px] top-[55px] z-10 pointer-events-none bg-primary/50",
        className,
      )}
    >
      {/* bg-[#3c6754 */}
      <motion.div
        className=" w-full bg-accent/75 h-full"
        style={{
          transformOrigin: "left center",
          scaleX: scrollYProgress,
        }}
      />
    </div>
  );
};

export default ProgressBar;
