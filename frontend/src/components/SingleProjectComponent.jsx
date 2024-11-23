import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import dataProjects from "./../DATA/dataProjects.json";
import image1 from "./../assets/projects-images/weatherTablet.png";

function SingleProjectComponent({ onBackToHome }) {
  const location = useLocation();

  // VERY IMPORTANT STATE INFORMATION: EACH PROJECT HAS A UNIQUE ID,
  // AND I USE THIS STATE TO RENDER THE SELECTED PROJECT CLICKED IN
  // "LATEST WORK.JSX".
  const selectedProjectId = location.state?.selectedProjectId || null;

  // Trova il progetto corrispondente dal file JSON
  const project = dataProjects.dataProjects.find(
    (item) => item.id === selectedProjectId
  );

  if (!project) {
    return (
      <div className="text-center mt-20 text-red-500 text-2xl">
        <p>Project not found!</p>
        <Link to="/" onClick={onBackToHome} className="text-blue-500 underline">
          Back to the Home
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Bottone per tornare alla home */}
      <Link to="/" onClick={onBackToHome} className="absolute top-6 left-10">
        <MdOutlineArrowBack className="text-white w-12 h-12" />
      </Link>

      <div className="bg-border-padding py-20 px-4">
        <div className="extraSmall:mx-8 sm:mx-10 md:mx-20 lg:mx-80 bg-second-border-padding min-h-[1400px] p-8 extraSmall:p-12 md:p-20">
          {/* Titolo del progetto */}
          <div className="flex justify-start items-start pt-6">
            <h1 className="text-[32px] extraSmall:text-[46px] md:text-[80px] font-extrabold text-text-primary">
              {project.title}
            </h1>
            <motion.button className="border-4 rounded-md border-white ml-8 md:ml-20 lg:ml-48">
              <MdArrowOutward className="text-white w-7 extraSmall:w-8 md:w-10 h-7 extraSmall:h-8 md:h-10" />
            </motion.button>
          </div>

          {/* Descrizione del progetto */}
          <div className="max-w-[500px]">
            <p className="text-text-primary text-lg md:text-2xl mt-10">
              {project.description}
            </p>
          </div>

          {/* Tecnologie usate */}
          <div className="max-w-[600px] flex flex-wrap items-center justify-start gap-2 mt-20">
            {project.technology.map((tech, index) => (
              <p
                key={index}
                className="w-[calc(33%-1rem)] text-center border-2 border-white rounded-lg py-2 text-text-primary text-md"
              >
                {tech}
              </p>
            ))}
          </div>

          {/* Link al progetto */}
          <div className="mt-20">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-lg md:text-2xl flex items-center"
            >
              Visita il progetto <FaArrowRight className="ml-2" />
            </a>
          </div>

          {/* IMAGINES */}
          <div className="flex flex-col items-center justify-center my-12">
            <img
              src={image1}
              className="h-auto min-w-[300px] max-w-[600px]"
              alt="project image"
            />
            <img
              src={image1}
              className="h-auto min-w-[300px] max-w-[600px]"
              alt="project image"
            />
            <a
              href="https://www.jameswilliams.design/enate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center no-underline mt-10 justify-center cursor-pointer hover:scale-125 transform-transition duration-1000 border-2 border-white rounded-lg px-2"
            >
              <p className="text-text-primary pt-2 px-4 text-2xl">Visit site</p>
              <FaArrowRight className="w-6 h-6 text-white mr-2" />
            </a>
          </div>

          {/* RESULTS */}
          <div className="mt-20">
            <h2 className="text-center text-[32px] extraSmall:text-[46px] md:text-[80px] font-extrabold text-text-primary">
              RESULTS
            </h2>
          </div>

          {/* MORE WORKS */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default SingleProjectComponent;
