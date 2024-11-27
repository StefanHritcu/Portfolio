import { MdArrowOutward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import dataProjects from "./../DATA/dataProjects.json";
import githubIcon from "./../assets/icons/github-icon.svg";
import youtubeIcon from "./../assets/icons/yt-icon.svg";
import NetlifyIcon from "./../assets/icons/netlify-icon.svg";
import { motion } from "framer-motion";

//ID 1
import Id1First from "./../assets/id-projects-images/id-1/id1-first.png";
import Id1Second from "./../assets/id-projects-images/id-1/id1-second.png";
import Id1Third from "./../assets/id-projects-images/id-1/id1-third.png";
import Id1Fourth from "./../assets/id-projects-images/id-1/id1-fourth.png";
import Id1Fifth from "./../assets/id-projects-images/id-1/id1-fifth.png";

//ID 2
import Id2First from "./../assets/id-projects-images/id-2/id2-first.png";
import Id2Second from "./../assets/id-projects-images/id-2/id2-second.png";
import Id2Third from "./../assets/id-projects-images/id-2/id2-third.png";
import Id2Fourth from "./../assets/id-projects-images/id-2/id2-fourth.png";
import Id2Fifth from "./../assets/id-projects-images/id-2/id2-fifth.png";

//ID 3

import { useEffect, useState } from "react";

function SingleProjectComponent({ onBackToHome }) {
  {
    /* When this component is mounted, the lower part is not visible for 3 seconds. */
  }
  const [isMainComponentVisible, setIsMainComponentVisible] = useState(false);

  const [isVisible400px, setIsVisible400px] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMainComponentVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setIsVisible400px(true);
      } else {
        setIsVisible400px(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-100%" },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldAnimate = scrollY > 10;

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
          className="fixed top-6 left-10"
          aria-label="Go back to Home"
        >
          <MdOutlineArrowBack className="text-white w-12 h-12" />
        </Link>
      </header>

      <main className="bg-border-padding py-20 px-4">
        <article
          className="sm:mx-4 md:mx-12 md2:mx-20 md3:mx-32 md4:mx-52 bg-second-border-padding p-8 extraSmall:p-12 md:p-20"
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
          ---------------------------------------------------------------
          {isMainComponentVisible ? (
            <div>
              {/* LINKS LIKE GITHUB REPO, YOUTUBE PROJECT VIDEO DESCRIPTION */}
              <nav aria-labelledby="external-links" className="my-8">
                <h2 id="external-links" className="sr-only">
                  External Links
                </h2>
                <ul className="space-y-4">
                  project.deploy && (
                  <motion.li
                    initial={{ x: "-200%" }}
                    animate={{ x: shouldAnimate ? 0 : "-200%" }}
                    transition={{ duration: 1.5 }}
                    className="relative"
                  >
                    <Link
                      to={project.deploy}
                      className="relative flex items-center px-4 py-3 rounded-lg shadow-md bg-gradient-to-r from-white to-[#046e66] decoration-transparent transform transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Explore the live version of the project hosted on Netlify"
                    >
                      {/* Subtle Neon Border Animation */}
                      <motion.div
                        className="absolute -inset-1 rounded-lg"
                        style={{
                          background:
                            "linear-gradient(90deg, #00C7B7, transparent)",
                          filter: "blur(4px)",
                          zIndex: -1,
                        }}
                        animate={{
                          opacity: [0.3, 0.5, 0.3], // Subtle pulsating glow
                          scale: [1, 1.01, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "mirror",
                        }}
                      ></motion.div>

                      {/* Content */}
                      <img
                        src={NetlifyIcon}
                        alt="Netlify Icon"
                        className="w-12 h-12 mr-4"
                      />
                      <span className="text-lg font-semibold text-[#333]">
                        Explore the live version of the project hosted on
                        Netlify
                      </span>
                    </Link>
                  </motion.li>
                  )
                  {project.gitCodeSource && (
                    <motion.li
                      initial={{ x: "-300%" }}
                      animate={{ x: shouldAnimate ? 0 : "-300%" }}
                      transition={{ duration: 1 }}
                    >
                      <Link
                        to={project.gitCodeSource}
                        className="flex items-center px-4 py-3 decoration-transparent bg-gradient-to-r from-[#181717] to-[#3b3a3a] rounded-lg shadow-lg hover:bg-gray-700 hover:shadow-xl transform transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Explore the Code on GitHub"
                      >
                        <img
                          src={githubIcon}
                          alt="GitHub Icon"
                          className="w-12 h-12 mr-4"
                        />
                        <span className="text-lg font-semibold text-gray-200">
                          Explore the Code on GitHub
                        </span>
                      </Link>
                    </motion.li>
                  )}
                  {project.youTubeVideo && (
                    <motion.li
                      initial={{ x: "-100%" }}
                      animate={{ x: shouldAnimate ? 0 : "-100%" }}
                      transition={{ duration: 1.5 }}
                    >
                      <Link
                        to={project.youTubeVideo}
                        className="flex items-center px-4 py-3 decoration-transparent bg-gradient-to-r from-[#FF0000] to-[#d65f5f] rounded-lg shadow-lg hover:bg-red-500 hover:shadow-xl transform transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Watch the Project Video on YouTube"
                      >
                        <img
                          src={youtubeIcon}
                          alt="YouTube Icon"
                          className="w-12 h-12 mr-4"
                        />
                        <span className="text-lg font-semibold text-black">
                          Watch the Project Video on YouTube
                        </span>
                      </Link>
                    </motion.li>
                  )}
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
                {/* FIRST DIV: MAIN IMAGES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gradient-to-r from-border-padding via-second-border-padding to-third-border-padding p-6 rounded-xl shadow-xl">
                  <div className="flex justify-center">
                    <img
                      src={Id1First}
                      alt={`Screenshot of ${project.title} - main view`}
                      className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 w-full max-w-[500px] object-cover"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={Id1Fourth}
                      alt={`Screenshot of ${project.title} - additional view`}
                      className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 w-full max-w-[500px] object-cover"
                    />
                  </div>
                </div>

                {/* SECOND DIV: ARTISTIC MOBILE IMAGES */}
                <div className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-primary-bg via-second-border-padding to-third-border-padding p-6 rounded-xl shadow-xl">
                  <img
                    src={Id1Fifth}
                    alt="Laptop image of the project"
                    className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 max-w-full lg:max-w-[60%] mx-auto mb-6 lg:mb-0"
                  />
                  {/* Optionally you can add more content or images in this flex layout */}
                  <div className="lg:w-[35%] text-center lg:text-left">
                    <h3 className="text-xl font-semibold text-text-primary">
                      Artistic Laptop View
                    </h3>
                    <p className="text-secondary-color-text">
                      A creative representation of the project on laptop
                    </p>
                  </div>
                </div>

                {/* THIRD DIV: MOBILE DEVICE IMAGES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-primary-bg via-second-border-padding to-third-border-padding p-6 rounded-xl shadow-xl">
                  <img
                    src={Id1Second}
                    alt="Mobile project image"
                    className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 w-full sm:w-[80%] lg:w-[60%] mx-auto"
                  />
                  <img
                    src={Id1Third}
                    alt="Mobile project image"
                    className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 w-full sm:w-[80%] lg:w-[60%] mx-auto"
                  />
                </div>
              </section>

              {/* CASE STUDY */}
              <motion.section
                aria-labelledby="case-study"
                className="mt-20 px-4"
                initial="hidden"
                animate={isVisible400px ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <h2
                  id="case-study"
                  className="text-center text-[32px] extraSmall:text-[46px] md:text-[80px] font-extrabold text-text-primary"
                >
                  CASE OF STUDY
                </h2>
                <div className="flex flex-col items-center mt-10 text-text-primary">
                  {/* Descrizione del case study */}
                  <motion.p
                    className="max-w-2xl text-center text-[18px] extraSmall:text-[22px] md:text-[28px] font-medium bg-border-padding p-6 rounded-lg shadow-lg"
                    variants={variants}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  >
                    {project.caseOfStudy}
                  </motion.p>

                  {/* Tag informativi */}
                  <motion.div
                    className="flex flex-wrap justify-center gap-4 mt-8"
                    variants={variants}
                    transition={{ duration: 1.2, delay: 0.6 }}
                  >
                    {project.caseOfStudyInformation.map((info, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-secondary-color-text text-primary-bg rounded-full text-[14px] md:text-[16px] font-semibold shadow-md hover:bg-third-border-padding hover:text-secondary-color-text transition-all duration-300"
                      >
                        {info}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </motion.section>
            </div>
          ) : (
            ""
          )}
        </article>
      </main>
    </div>
  );
}

export default SingleProjectComponent;
