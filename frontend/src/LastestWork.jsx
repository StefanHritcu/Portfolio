import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { Link } from "react-router-dom";
import SingleProjectComponent from "./components/SingleProjectComponent";

function LastestWork({ onSingleProjectClicked }) {
  const [isFixed, setIsFixed] = useState(false);

  const handleSingleProjectClicked = () => {
    onSingleProjectClicked(true);
  };

  // Gestione dello scroll per il controllo dello stato `isFixed`
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
    {
      id: 1,
      title: "Project 112121",
      link: "unbodaje",
      description: "Description for Project 1",
      image: "image1.png",
    },
    {
      id: 2,
      title: "Project 2121",
      link: "gfsdfgsd",
      description: "Description for Project 2",
      image: "image2.png",
    },
    {
      id: 3,
      title: "Project 32121212121",
      link: "che-fai",
      description: "Description for Project 3",
      image: "image3.png",
    },
    {
      id: 4,
      title: "Project 4",
      link: "dajee",
      description: "Description for Project 4",
      image: "image4.png",
    },
  ];

  return (
    <div
      id="PROJECT"
      className={`my-10 sm:my-20 pb-20 mx-4 lg:mx-36 min-h-[400px] h-auto bg-second-border-padding`}
    >
      {/* Titolo della sezione */}
      <h2 className="sticky top-0 text-center py-10 font-[900] text-[34px] extraSmall:text-[44px] sm:text-[90px] text-text-primary">
        LATEST WORK
      </h2>

      {/* Lista delle card */}
      <div className="relative">
        {projects.map((project) => (
          <div
            onClick={handleSingleProjectClicked}
            key={project.id}
            className="sticky top-40 md:top-56 z-40 transition-all transform duration-300"
          >
            <Link key={project.id} to="/project">
              <ProjectCard title={project.title} link={project.link} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastestWork;
