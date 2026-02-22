import AboutSection from "@/components/home/AboutSection";
import MainPage from "@/components/home/MainPage";
import Menu from "@/components/home/Menu";
import ProgressBar from "@/components/home/ProgressBar";
import ProjectCard from "@/components/home/ProjectCard";
import Projects from "@/components/home/Projects";
import HueDesktop from "@/components/HueDesktop";
import MouseGlow from "@/components/MouseHue";
import { Button } from "@/components/ui/button";
import useIsDesktop from "@/hooks/useIsDisktop";

import Lenis from "@studio-freight/lenis";
import {
  useSpring,
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Then in your transform:
  const isDesktop = useIsDesktop();
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // How long the "drift" lasts
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // High-end easing
      smoothWheel: true,
    });

    // Make the lensis function golobally available.

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup
  }, []);

  // 2. Handle Responsive Math
  useEffect(() => {
    const compute = () => {
      if (containerRef.current) {
        setScrollRange(
          containerRef.current.scrollWidth - window.innerWidth + 300,
        );
      }
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"], // Ensures 0 at top and 1 at very bottom
  });

  // Now x moves exactly the distance needed to show the last pixel of Section 2
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  // 1. Position: Moving from -450/-120 to the new coordinates
  // const x2 = useTransform(scrollYProgress, [0, 0.2], ["-450px", "-600px"]);
  // const y = useTransform(scrollYProgress, [0, 0.2], ["-320px", "-700px"]);

  // 4. Visibility Fix: Increase opacity or adjust blur if it feels too faint
  return (
    <div
      ref={targetRef}
      className=" lg:h-[900vh] w-full  main-container relative "
    >
      <Menu
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        containerRef={containerRef}
        targetRef={targetRef}
      />
      <ProgressBar
        scrollYProgress={scrollYProgress}
        className=" hidden lg:flex"
      />
      <HueDesktop scrollYProgress={scrollYProgress} />

      <div className="sticky top-0 left-0 lg:h-screen overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x: isDesktop ? x : 0 }}
          className="flex  flex-col  lg:flex-row will-change-transform"
        >
          <MainPage />
          <Projects ref={projectsRef} />
          <AboutSection ref={aboutRef} />
        </motion.div>
      </div>
      <MouseGlow />
    </div>
  );
};

export default Home;

function ProjectsList() {
  return (
    <section className="  overflow-hidden shrink-0 relative">
      <div className=" wrapper w-full max-w-none">
        <div
          className=" relative"
          style={{ padding: "11.33333vh 360px 202px" }}
        >
          {/* ---------- */}
          <div className="  h-full  w-full overflow-hidden">
            <h2 className="  text-[5.3vh] text-off-white mb-3.5 ">Projects</h2>
          </div>
          {/* ---------- */}

          <ul className=" flex gap-x-[30px]">
            {/* <Project title="Auto-zone" link="" image="/public/z.png" />
            <Project title="Auto-zone" link="" image="/public/z.png" />
            <Project title="Auto-zone" link="" image="/public/z.png" /> */}
            <ProjectCard title="Auto-zone" link="" image="/public/z.png" />
          </ul>
        </div>
      </div>
    </section>
  );
}

function Project({
  title,
  image,
  link,
}: {
  title: string;
  image: string;
  link: string;
}) {
  return (
    <li className="">
      <a
        href={link}
        className="  font-medium" // Set a base height (e.g., 80% of screen)
      >
        <div
          className="relative h-[480px] w-[345px] aspect-363/250  overflow-hidden border-2 border-primary group p-2.5  shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"
          /* By setting h-full and aspect-[1/1.41], the browser 
             automatically calculates the correct width.
          */
        >
          <img
            src={image}
            alt={title}
            className="      object-cover object-top max-h-full w-full transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
            // style={{ maxInlineSize: "100%", blockSize: "auto" }}
          />

          <div className="absolute inset-0 pointer-events-none mix-blend-overlay" />
        </div>

        <p className=" font-light mt-2.5  text-xl text-white/90 uppercase tracking-tighter">
          {title}
        </p>
      </a>
    </li>
  );
}
