import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import DataProjects from "./dataProject.json";

import MernLaptop from "./../../assets/projects-images/mernLaptop.png";
import MernTablet from "./../../assets/projects-images/mernTablet.png";
import MernSmart from "./../../assets/projects-images/mernSmart.png";
import WeatherLaptop from "./../../assets/projects-images/weatherLaptop.png";
import WeatherTablet from "./../../assets/projects-images/weatherTablet.png";
import WeatherSmart from "./../../assets/projects-images/weatherMobile.png";
import SoundLaptop from "./../../assets/projects-images/soundPC.png";
import SoundTablet from "./../../assets/projects-images/soundTablet.png";
import SoundSmart from "./../../assets/projects-images/soundSmart.png";
import GamesLaptop from "./../../assets/projects-images/gameLaptop.png";
import GamesTablet from "./../../assets/projects-images/gameTablet.png";
import GamesSmart from "./../../assets/projects-images/gameSmart.png";

// Funzione per ottenere le immagini in base al progetto
const getImagesForProject = (projectIndex) => {
  switch (projectIndex) {
    case 0: // MERN Restaurant
      return [
        { src: MernLaptop, alt: "MERN Restaurant Laptop View" },
        { src: MernTablet, alt: "MERN Restaurant Tablet View" },
        { src: MernSmart, alt: "MERN Restaurant Mobile View" },
      ];
    case 1: // Weather API
      return [
        { src: WeatherLaptop, alt: "Weather API Laptop View" },
        { src: WeatherTablet, alt: "Weather API Tablet View" },
        { src: WeatherSmart, alt: "Weather API Mobile View" },
      ];
    case 2: // OpenSoundHub
      return [
        { src: SoundLaptop, alt: "OpenSoundHub Laptop View" },
        { src: SoundTablet, alt: "OpenSoundHub Tablet View" },
        { src: SoundSmart, alt: "OpenSoundHub Mobile View" },
      ];
    case 3: // Games
      return [
        { src: GamesLaptop, alt: "Games Laptop View" },
        { src: GamesTablet, alt: "Games Tablet View" },
        { src: GamesSmart, alt: "Games Mobile View" },
      ];
    default:
      return [];
  }
};

function CardProjects() {
  // Stato per ogni progetto
  const [projectsState, setProjectsState] = useState(
    DataProjects.projects.map((_, index) => ({
      images: getImagesForProject(index),
      currentImageIndex: 0,
    }))
  );

  // Funzione per scorrere a destra
  const nextImage = (projectIndex) => {
    setProjectsState((prevState) =>
      prevState.map((projectState, index) => {
        if (
          index === projectIndex &&
          projectState.currentImageIndex < projectState.images.length - 1
        ) {
          return {
            ...projectState,
            currentImageIndex: projectState.currentImageIndex + 1,
          };
        }
        return projectState;
      })
    );
  };

  // Funzione per scorrere a sinistra
  const prevImage = (projectIndex) => {
    setProjectsState((prevState) =>
      prevState.map((projectState, index) => {
        if (index === projectIndex && projectState.currentImageIndex > 0) {
          return {
            ...projectState,
            currentImageIndex: projectState.currentImageIndex - 1,
          };
        }
        return projectState;
      })
    );
  };

  return (
    <>
      <div className="my-4 pb-4">
        <section className="container main-title-component-custom pt-2 pb-4">
          <h1>THINGS, I WORKED ON</h1>
        </section>

        {/* CARD */}
        {DataProjects.projects.map((project, index) => (
          <section key={index} className="card-project">
            {/* TITOLO */}
            <h2>{project.title}</h2>

            {/* Descrizione */}
            <p className="text-center">{project.description}</p>

            {/* Immagine a scorrimento */}
            <figure className="image-gallery position-relative">
              <img
                src={
                  projectsState[index].images[
                    projectsState[index].currentImageIndex
                  ].src
                }
                alt={
                  projectsState[index].images[
                    projectsState[index].currentImageIndex
                  ].alt
                }
                className="img-fluid my-4"
              />

              {/* Bottone per scorrere a sinistra */}
              {projectsState[index].currentImageIndex > 0 && (
                <button
                  onClick={() => prevImage(index)}
                  aria-label="Previous image"
                  className="btn btn-image-direction position-absolute start-0 translate-middle-y"
                  style={{ top: "50%" }}
                >
                  &lt;
                </button>
              )}

              {/* Bottone per scorrere a destra */}
              {projectsState[index].currentImageIndex <
                projectsState[index].images.length - 1 && (
                <button
                  onClick={() => nextImage(index)}
                  aria-label="Next image"
                  className="btn btn-image-direction position-absolute end-0 translate-middle-y"
                  style={{ top: "50%" }}
                >
                  &gt;
                </button>
              )}
            </figure>

            {/* Tecnologie utilizzate */}
            <div className="technologies">
              <p className="card-technologies-paragraph">
                {project.technologies.join(", ")}
              </p>
            </div>

            {/* Link per portare alla repository o sito del progetto */}
            <div className="project-link">
              {project.netlifyLink && (
                <a
                  className="single-project-link"
                  href={project.netlifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
              {project.giiHubRepoLink && (
                <a
                  className="single-project-link"
                  href={project.giiHubRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default CardProjects;
