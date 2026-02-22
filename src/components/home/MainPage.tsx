import React from "react";
import { Button } from "../ui/button";

const MainPage = () => {
  return (
    <section className=" h-screen relative w-screen  shrink-0  ">
      {/* <Button
        size="sm"
        className=" absolute left-7  top-7   h-fit  "
        style={{ writingMode: "sideways-lr" }}
      >
        Menu
      </Button> */}

      <span
        className="   absolute  hidden lg:inline-block  rotate-[-90deg]  font bottom-[10%] left-[-26px]  text-off-white  text-lg"
        // style={{ writingMode: "vertical-rl" }}
      >
        Mohammed Osama
      </span>

      {/* <h1 className=" text-xl lg:text-2xl pl-3.5 font-bold  text-white  max-w-[500px] lg:max-w-[70vw]  absolute bottom-[26%]  right-[50px]   lg:bottom-[25vh] lg:right-[14vw] "> */}
      <svg
        viewBox="0 0 600 500"
        preserveAspectRatio="xMidYMid meet"
        className="  max-w-[350px]  sm:max-w-[400px]  -rotate-90 lg:rotate-0 lg:max-w-[35vw]  absolute bottom-[26%]  right-[-30px]  sm:right-[10px]   lg:bottom-[15vh] lg:right-[14vw] font-bold overflow-visible mx-auto block"
      >
        <defs>
          <linearGradient id="m-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="white" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <g transform="translate(-50, 250) rotate(-90)">
          <text
            textAnchor="middle"
            x="20"
            y="30"
            className="fill-white/20 text-6xl uppercase tracking-[1.2rem] font-thin"
          >
            React
          </text>
        </g>
        {/* 1. THE HORIZONTAL LOCKUP (Left Side) */}
        <g transform="translate(50, 200)">
          {/* Full Name */}
          <text
            y="-69"
            x="-30"
            fill="url(#m-gradient)"
            className="fill-primary text-7xl  font-normal uppercase tracking-[1rem] "
          >
            Osama
          </text>
          {/* Subtitle */}
          <text
            y="-20"
            x="-10"
            className="fill-white/70  text-4xl uppercase tracking-[0.45em] font-thin not-italic"
          >
            Frontend
          </text>
          <text
            y="25"
            x="-10"
            className="fill-white/70  text-4xl uppercase tracking-[0.36em] font-thin not-italic"
          >
            Developer
          </text>

          {/* <text
              y="-170"
              x="-290"
              className="fill-primary  -scale-x-100  -scale-y-100 text-7xl uppercase tracking-widest font-black"
            >
              Osama
            </text> */}
        </g>
        <g transform="translate(320, 290) scale(-1, -1)">
          {/* Full Name */}
          <text
            y="-69"
            x="-20"
            fill="url(#m-gradient)"
            className="fill-primary text-7xl  font-normal uppercase tracking-[1rem] "
          >
            Osama
          </text>
          {/* Subtitle */}
          <text
            y="-20"
            x="-10"
            className="fill-white/70  text-4xl uppercase tracking-[0.45em] font-thin not-italic"
          >
            Frontend
          </text>
          <text
            y="25"
            x="-10"
            className="fill-white/70  text-4xl uppercase tracking-[0.36em] font-thin not-italic"
          >
            Developer
          </text>

          {/* <text
              y="-170"
              x="-290"
              className="fill-primary  -scale-x-100  -scale-y-100 text-7xl uppercase tracking-widest font-black"
            >
              Osama
            </text> */}
        </g>
        {/* 2. THE ROTATED BLOCK (Right Side) */}
        <g className="rotate-90 origin-center translate-x-24">
          <text
            x="50%"
            y="40%"
            textAnchor="middle"
            className="fill-white text-[120px] font-thin uppercase tracking-wider"
          >
            <tspan fill="url(#m-gradient)" className="fill-primary">
              M
            </tspan>
            oha
            <tspan x="50%" dy="90" textAnchor="middle">
              mmed
            </tspan>
          </text>
        </g>
      </svg>
      {/* I build things for the web. Results-driven frontend developer with a
        strong foundation in React and its ecosystem. Proficient in [React
        Query, Redux, Next.js, React Router, React Hook Form]. Demonstrated
        ability to create highly interactive and user-friendly web applications
        through personal project */}
      {/* </h1> */}
    </section>
  );
};

export default MainPage;

/*

       <g transform="translate(50, 200)">
      
            <text
              y="-69"
              x="-20"
              className="fill-primary text-7xl uppercase tracking-widest font-black"
            >
              Osama
            </text>
         
            <text
              y="35"
              className="fill-white/70 text-base uppercase tracking-[0.4em] font-medium not-italic"
            >
              Frontend Developer
            </text>

            <text
              y="-170"
              x="-290"
              className="fill-primary  -scale-x-100  -scale-y-100 text-7xl uppercase tracking-widest font-black"
            >
              Osama
            </text> 
          </g>
*/
