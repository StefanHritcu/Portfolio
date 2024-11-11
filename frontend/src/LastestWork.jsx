import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";

function LastestWork() {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsFixed(scrollPosition >= 800);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Array di progetti
  const projects = [
    { title: "Project 1", link: "#project1" },
    { title: "Project 2", link: "#project2" },
    { title: "Project 3", link: "#project3" },
    { title: "Project 4", link: "#project4" },
  ];

  return (
    <>
      <div
        id="PROJECT"
        className={`my-10 sm:my-20 pb-20 mx-4 lg:mx-36 min-h-[400px] h-auto bg-second-border-padding ${
          isFixed ? "" : ""
        }`}
      >
        <h2 className="sticky top-0 text-center py-10 font-[900] text-[34px] extraSmall:text-[44px] sm:text-[90px] text-text-primary">
          LATEST WORK
        </h2>
        {/* Renderizza tutte le card dei progetti */}
        <div className="relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className="sticky top-40 md:top-56 z-40 transition-all transform duration-300"
            >
              <ProjectCard title={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LastestWork;
