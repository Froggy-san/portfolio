import React from "react";
import { AnimatePresence, motion } from "motion/react";
import useIsDesktop from "@/hooks/useIsDisktop";
import MagneticButton from "../MagneticButton";
import MagneticWrapper from "../MagneticWrapper";

export const ProFormSlideVariants = {
  initial: (isDesktop: boolean) =>
    isDesktop ? { x: -16, opacity: 0 } : { height: 0, opacity: 0 }, // Force height 0
  animate: (isDesktop: boolean) =>
    isDesktop
      ? { x: 0, opacity: 1 }
      : {
          height: "auto",
          opacity: 1,
          transition: { height: { duration: 0.4 } },
        },
  exit: (isDesktop: boolean) =>
    isDesktop ? { x: -16, opacity: 0 } : { height: 0, opacity: 0 },
};

const Menu = ({
  projectsRef,
  aboutRef,
  containerRef,
  targetRef,
}: {
  projectsRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  targetRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isDesktop = useIsDesktop();
  const LINKS = [
    { text: "Projects", link: "#projects", element: projectsRef },
    { text: "About", link: "#about", element: aboutRef },
    { text: "Contact", link: "mailto:moeosama1@outlook.com" },
  ];

  const handleNavigate = (ref: React.RefObject<HTMLDivElement | null>) => {
    const element = ref.current;
    if (!element || !(window as any).lenis) return;

    if (isDesktop) {
      // --- DESKTOP: Horizontal Math Mode ---
      const container = containerRef.current;
      const wrapper = targetRef.current;
      if (!container || !wrapper) return;

      const elementOffsetLeft = element.offsetLeft;
      const totalHorizontalScroll = container.scrollWidth - window.innerWidth;
      const horizontalPercent = elementOffsetLeft / totalHorizontalScroll;

      const totalVerticalScroll = wrapper.offsetHeight - window.innerHeight;
      const targetVerticalPos = horizontalPercent * totalVerticalScroll;

      (window as any).lenis.scrollTo(targetVerticalPos, { duration: 2 });
    } else {
      // --- MOBILE: Standard Vertical Mode ---
      // On mobile, the element actually sits at a real Y position on the page.
      (window as any).lenis.scrollTo(element, {
        offset: -80, // Offset for your fixed menu height
        duration: 1.2,
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className=" fixed   right-[22px] lg:left-[42px] top-[62px] z-50 lg:right-auto">
      <div className="  flex  flex-col  lg:flex-row  items-end lg:items-start text-white ">
        <MagneticWrapper>
          <button
            onClick={() => setIsOpen((is) => !is)}
            className="menu-button"
          >
            Menu
          </button>
        </MagneticWrapper>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              custom={isDesktop}
              variants={ProFormSlideVariants}
              initial={"initial"}
              animate={"animate"}
              exit={"exit"}
              className="  mt-4  h-full overflow-hidden lg:overflow-visible   lg:ml-6"
            >
              <div className="   border lg:border-0   p-2 lg:p-0 rounded-[1.25rem] ">
                <ul className=" bg-off-white  text-lg  lg:text-base text-primary/80  p-[25px_34px_25px_49px] lg:p-0 lg:bg-transparent lg:text-white  rounded-[1.25rem]  space-y-5">
                  {LINKS.map((link, i) => (
                    <motion.li
                      key={i}
                      className=" cursor-pointer"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.25, delay: 0.2 * i }}
                      onClick={() => {
                        if (link.element) handleNavigate(link.element);
                      }}
                    >
                      <FlipText>{link.text}</FlipText>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Menu;

export function FlipText({
  children,
  className,
  style,
  duration = 0.22,
  stagger = 0.025,
}: {
  children: string;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`relative  overflow-hidden truncate  font-semibold  ${
        className || ""
      }`}
      style={style}
    >
      <p>
        {children.split("").map((letter, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: stagger * i,
            }}
            key={i}
            className=" inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </p>
      <p className=" absolute inset-0">
        {" "}
        {children.split("").map((letter, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: stagger * i,
            }}
            key={i}
            className=" inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}
/*
    <motion.div
      initial="initial"
      whileHover="hovered"
      className=" relative  overflow-hidden truncate text-[3rem] font-semibold "
    >
      <motion.p
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
      >
        {children}
      </motion.p>
      <motion.p
        className=" absolute inset-0"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
      >
        {children}
      </motion.p>
    </motion.div>
*/
