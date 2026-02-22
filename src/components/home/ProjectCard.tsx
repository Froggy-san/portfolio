interface ProjectProps {
  title: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, image, link }: ProjectProps) {
  return (
    <li className=" z-50">
      <a
        href={link}
        className="  font-medium" // Set a base height (e.g., 80% of screen)
      >
        <div
          className="relative  overflow-hidden border-2 w-fit  border-primary group p-2.5  shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"
          /* By setting h-full and aspect-[1/1.41], the browser 
             automatically calculates the correct width.
          */
        >
          <img
            src={image}
            alt={title}
            className=" lg:h-[58.5vh] aspect-[1/1.41] object-cover object-top transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
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
