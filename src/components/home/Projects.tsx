import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      id="projects"
      ref={ref}
      className=" py-44 lg:py-0  overflow-hidden shrink-0 relative"
    >
      <div className=" wrapper  w-[88%] max-w-120 mx-auto lg:w-full lg:max-w-none">
        <div
          className=" relative  lg:p-[11.33333vh_360px_202px]"
          // style={{ padding: "11.33333vh 360px 202px" }}
        >
          {/* ---------- */}
          <div className="  h-full  w-full overflow-hidden">
            <h2 className="  text-[5.3vh] text-off-white mb-3.5 ">Projects</h2>
          </div>
          {/* ---------- */}

          <ul className=" flex lg:flex-row flex-col gap-y-13.5 gap-x-7.5">
            {/* <Project title="Auto-zone" link="" image="/public/z.png" />
            <Project title="Auto-zone" link="" image="/public/z.png" />
            <Project title="Auto-zone" link="" image="/public/z.png" /> */}
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <ProjectCard
                  key={i}
                  title="Auto-zone"
                  link=""
                  image="/public/z.png"
                />
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

export default Projects;
