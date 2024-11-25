import { MdArrowOutward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import dataProjects from "./../DATA/dataProjects.json";
import githubIcon from "./../assets/icons/github-icon.svg";
import youtubeIcon from "./../assets/icons/yt-icon.svg";
import { motion } from "framer-motion";
import AnimatedText from "./../components/AnimatedText";

//id 1
import Id1First from "./../assets/id-projects-images/id-1/id1-first.png";
import Id1Second from "./../assets/id-projects-images/id-1/id1-second.png";
import Id1Third from "./../assets/id-projects-images/id-1/id1-third.png";
import Id1Fourth from "./../assets/id-projects-images/id-1/id1-fourth.png";
import Id1Fifth from "./../assets/id-projects-images/id-1/id1-fifth.png";

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
      <main className="text-center mt-20 text-red-500 text-2xl">
        <p>Project not found!</p>
        <Link
          to="/"
          onClick={onBackToHome}
          className="text-blue-500 underline"
          aria-label="Back to Home"
        >
          Back to the Home
        </Link>
      </main>
    );
  }

  return (
    <div className="relative">
      {/* Bottone per tornare alla home */}
      <header>
        <Link
          to="/"
          onClick={onBackToHome}
          className="absolute top-6 left-10"
          aria-label="Go back to Home"
        >
          <MdOutlineArrowBack className="text-white w-12 h-12" />
        </Link>
      </header>

      <main className="bg-border-padding py-20 px-4">
        <article
          className="sm:mx-4 md:mx-12 md2:mx-20 md3:mx-32 md4:mx-52 bg-second-border-padding min-h-[1400px] p-8 extraSmall:p-12 md:p-20"
          aria-labelledby="project-title"
        >
          {/* PROJECT TITLE */}
          <header>
            <div className="flex justify-start items-start pt-6">
              <h1
                id="project-title"
                className="text-[32px] extraSmall:text-[36px] md:text-[52px] font-extrabold text-text-primary"
              >
                {project.title}
              </h1>
              <Link
                to={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit the Site"
                className="border-4 rounded-md flex hover:scale-125 transform-transition duration-1000 items-center border-whiten verySmall2:ml-6 md:ml-8 lg:ml-12"
                aria-label={`Visit the site of ${project.title}`}
              >
                <MdArrowOutward className="text-white w-7 extraSmall:w-8 md:w-10 h-7 extraSmall:h-8 md:h-10" />
              </Link>
            </div>
            <div>
              <h2 className="text-red-200 text-sm md:text-lg">
                {project.createdDate}
              </h2>
            </div>
          </header>
          {/* PROJECT DESCRIPTION */}
          <section aria-labelledby="description">
            <h2 id="description" className="sr-only">
              Project Description
            </h2>
            <div className="max-w-[500px]">
              <p className="text-text-primary text-lg md:text-2xl mt-2.5">
                {project.description}
              </p>
            </div>
          </section>
          {/* TECH USED */}
          <section aria-labelledby="technologies">
            <h2 id="technologies" className="sr-only">
              Technologies Used
            </h2>
            <div className="max-w-[600px] flex flex-wrap items-center justify-start gap-2 mt-20">
              {project.technology.map((tech, index) => (
                <p
                  key={index}
                  className="w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] text-center border-2 border-white rounded-lg py-2 text-text-primary text-md"
                >
                  {tech}
                </p>
              ))}
            </div>
          </section>
          {/* LINKS LIKE GITHUB REPO, YOUTUBE PROJECT VIDEO DESCRIPTION */}
          <nav aria-labelledby="external-links" className="my-8">
            <h2 id="external-links" className="sr-only">
              External Links
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  to={project.gitCodeSource}
                  className="flex items-center px-4 py-3 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 hover:shadow-xl transform transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Explore the Code on GitHub"
                >
                  <img
                    src={githubIcon}
                    alt="GitHub Icon"
                    className="w-12 h-12 mr-4"
                  />
                  <span className="text-lg font-semibold text-gray-300 underline decoration-gray-300 hover:decoration-primary-bg">
                    Explore the Code on GitHub
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={project.youtubeVideo}
                  className="flex items-center px-4 py-3 bg-red-600 rounded-lg shadow-lg hover:bg-red-500 hover:shadow-xl transform transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch the Project Video on YouTube"
                >
                  <img
                    src={youtubeIcon}
                    alt="YouTube Icon"
                    className="w-12 h-12 mr-4"
                  />
                  <span className="text-lg font-semibold text-gray-50 underline decoration-gray-50 hover:decoration-gray-200">
                    Watch the Project Video on YouTube
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          {/* IMAGES */}
          <section
            aria-labelledby="project-images"
            className="my-20 mx-2 space-y-12"
          >
            <h2 id="project-images" className="sr-only">
              Project Images
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-border-padding via-second-border-padding to-third-border-padding p-6 rounded-xl shadow-xl">
              <img
                src={Id1First}
                alt={`Screenshot of ${project.title} - main view`}
                className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <img
                src={Id1Fourth}
                alt={`Screenshot of ${project.title} - additional view`}
                className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* SECOND DIV: ARTISTIC MOBILE IMAGES */}
            <div className="grid grid-cols-1 gap-6 bg-gradient-to-r from-primary-bg via-second-border-padding to-third-border-padding p-6 rounded-xl shadow-xl">
              <img
                src={Id1Fifth}
                alt="Laptop image of the project"
                className="rounded-lg shadow-lg mx-auto hover:shadow-2xl hover:scale-105 transition-transform duration-500 max-w-full md:max-w-[80%]"
              />
            </div>

            {/* THIRD DIV: MOBILE DEVICES IMAGES (SMALLER PROPORTION) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-primary-bg via-second-border-padding to-third-border-padding p-6 rounded-xl shadow-xl">
              <img
                src={Id1Second}
                alt="Mobile project image"
                className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 max-w-[70%] md:max-w-[60%] mx-auto"
              />
              <img
                src={Id1Third}
                alt="Mobile project image"
                className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 max-w-[70%] md:max-w-[60%] mx-auto"
              />
            </div>
          </section>

          <section aria-labelledby="case-study" className="mt-20 px-4">
            <h2
              id="case-study"
              className="text-center text-[32px] extraSmall:text-[46px] md:text-[80px] font-extrabold text-text-primary"
            >
              CASE OF STUDY
            </h2>

            {/* Effetto di scrittura */}
            <div className="mt-8 bg-border-padding p-6 md:p-10 rounded-lg shadow-lg">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-text-primary text-lg md:text-xl font-medium flex items-center"
              >
                <AnimatedText text={project.caseOfStudy} speed={100} />
              </motion.p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

export default SingleProjectComponent;
