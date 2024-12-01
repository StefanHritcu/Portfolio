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
import Id3First from "./../assets/id-projects-images/id-3/id3-first.png";
import Id3Second from "./../assets/id-projects-images/id-3/id3-second.png";
import Id3Third from "./../assets/id-projects-images/id-3/id3-third.png";
import Id3Fourth from "./../assets/id-projects-images/id-3/id3-fourth.png";
import Id3Fifth from "./../assets/id-projects-images/id-3/id3-fifth.png";

//ID 4
import Id4First from "./../assets/id-projects-images/id-4/id4-first.png";
import Id4Second from "./../assets/id-projects-images/id-1/id1-second.png";
import Id4Third from "./../assets/id-projects-images/id-4/id4-third.png";
import Id4Fourth from "./../assets/id-projects-images/id-4/id4-fourth.png";
import Id4Fifth from "./../assets/id-projects-images/id-4/id4-fifth.png";

//ID 5
import id5First from "./../assets/id-projects-images/id-5/id5-first.png";
import id5Second from "./../assets/id-projects-images/id-5/id5-second.png";

//ID 6
import Id6First from "./../assets/id-projects-images/id-6/id6-first.png";
import Id6Second from "./../assets/id-projects-images/id-6/id6-second.png";
import Id6Third from "./../assets/id-projects-images/id-6/id6-third.png";
import Id6Fourth from "./../assets/id-projects-images/id-6/id6-fourth.png";
import Id6Fifth from "./../assets/id-projects-images/id-6/id6-fifth.png";

//ID 7
import Id7First from "./../assets/id-projects-images/id-7/id7-first.png";
import Id7Second from "./../assets/id-projects-images/id-7/id7-second.png";
import Id7Third from "./../assets/id-projects-images/id-7/id7-third.png";
import Id7Fourth from "./../assets/id-projects-images/id-7/id7-fourth.png";
import Id7Fifth from "./../assets/id-projects-images/id-7/id7-fifth.png";

import { useEffect, useState } from "react";

function SingleProjectComponent({ onBackToHome }) {
  {
    /* When this component is mounted, the lower part is not visible for 3 seconds. */
  }
  const [isMainComponentVisible, setIsMainComponentVisible] = useState(false);

  const [isVisible400px, setIsVisible400px] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const closeAlbum = () => {
    setIsOpen(false);
    setCurrentCategory(null);
  };

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

  const projectImages = {
    1: [Id1First, Id1Second, Id1Third, Id1Fourth, Id1Fifth],
    2: [Id2First, Id2Second, Id2Third, Id2Fourth, Id2Fifth],
    3: [Id3First, Id3Second, Id3Third, Id3Fourth, Id3Fifth],
    4: [Id4First, Id4Second, Id4Third, Id4Fourth, Id4Fifth],
    5: [id5First, id5Second],
    6: [Id6First, Id6Second, Id6Third, Id6Fourth, Id6Fifth],
    7: [Id7First, Id7Second, Id7Third, Id7Fourth, Id7Fifth],
  };

  const images = projectImages[selectedProjectId] || [];

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
          <MdOutlineArrowBack className="text-red-300 w-12 h-12 z-[200px]" />
        </Link>
      </header>

      <main className="bg-border-padding py-20 px-2 md:px-4">
        <article
          className="mx-2 md:mx-10 md2:mx-20 md3:mx-32 md4:mx-52 bg-second-border-padding p-6 extraSmall:p-12 md:p-20"
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
          {isMainComponentVisible ? (
            <div>
              {/* LINKS LIKE GITHUB REPO, YOUTUBE PROJECT VIDEO DESCRIPTION */}
              <nav aria-labelledby="external-links" className="my-8 ">
                <h2 id="external-links" className="sr-only">
                  External Links
                </h2>
                <ul className="space-y-4">
                  <motion.li
                    initial={{ x: "-300%" }}
                    animate={{ x: shouldAnimate ? 0 : "-300%" }}
                    transition={{ duration: 1.5 }}
                    className="overflow-hidden"
                  >
                    <Link
                      to={project.deploy}
                      className="relative flex items-center px-4 py-3 w-full rounded-lg shadow-md bg-gradient-to-r from-white to-[#046e66] decoration-transparent transform transition-all duration-300 hover:scale-105"
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
                      <span className="text-lg font-semibold text-[16px] md:text-xl  text-[#333]">
                        Explore the live version of the project hosted on
                        Netlify
                      </span>
                    </Link>
                  </motion.li>
                  {project.gitCodeSource && (
                    <motion.li
                      initial={{ x: "-300%" }}
                      animate={{ x: shouldAnimate ? 0 : "-300%" }}
                      transition={{ duration: 1 }}
                      className="overflow-hidden"
                    >
                      <Link
                        to={project.gitCodeSource}
                        className="flex overflow-hidden items-center px-4 py-3 decoration-transparent bg-gradient-to-r from-[#181717] to-[#3b3a3a] rounded-lg shadow-lg hover:bg-gray-700 hover:shadow-xl transform transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Explore the Code on GitHub"
                      >
                        <img
                          src={githubIcon}
                          alt="GitHub Icon"
                          className="w-12 h-12 mr-4"
                        />
                        <span className="text-lg font-semibold text-gray-200 text-[16px] md:text-xl">
                          Explore the Code on GitHub
                        </span>
                      </Link>
                    </motion.li>
                  )}
                  {project.youTubeVideo && (
                    <motion.li
                      initial={{ x: "-300%" }}
                      animate={{ x: shouldAnimate ? 0 : "-300%" }}
                      transition={{ duration: 1.5 }}
                      className="overflow-hidden"
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
              <section
                aria-labelledby="project-images"
                className="my-20 space-y-12"
              >
                <h2 id="project-images" className="sr-only">
                  Project Images
                </h2>

                {/* Controllo se ci sono immagini */}
                {images.length > 0 ? (
                  <>
                    {/* MAIN IMAGES */}
                    <div className="relative grid grid-cols-1 cursor-pointer sm:grid-cols-2 gap-6 bg-gradient-to-r from-border-padding via-second-border-padding to-third-border-padding p-0 sm:p-4 md:p-6 rounded-xl shadow-xl">
                      <p className="absolute top-2 px-4 left-4 md:left-10 text-red-400 text-[12px] md:text-lg">
                        *Click on an image to view it in fullscreen and zoom in.
                      </p>
                      {images.slice(0, 2).map((img, index) => (
                        <div key={index} className="flex justify-center mt-12">
                          <img
                            src={img}
                            alt={`Screenshot of project ${selectedProjectId} - view ${
                              index + 1
                            }`}
                            className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 w-full object-cover max-w-full sm:max-w-[500px]"
                            onClick={() => {
                              setCurrentCategory({
                                title: `Main Image ${index + 1}`,
                                images: [
                                  {
                                    src: img,
                                    alt: `Screenshot of project ${selectedProjectId} - view ${
                                      index + 1
                                    }`,
                                  },
                                ],
                              });
                              setCurrentIndex(0);
                              setIsOpen(true);
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Overlay for image */}
                    {isOpen && currentCategory && (
                      <div className="fixed bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="relative">
                          <button
                            onClick={closeAlbum}
                            className="absolute top-24 -right-10 text-white text-[60px]"
                          >
                            &times; {/* close */}
                          </button>
                          <img
                            src={currentCategory.images[currentIndex].src}
                            alt={currentCategory.images[currentIndex].alt}
                            className="rounded-lg shadow-lg mt-32"
                          />
                        </div>
                      </div>
                    )}

                    {/* ARTISTIC MOBILE IMAGE */}
                    {images[4] && (
                      <div className="flex flex-col cursor-pointer lg:flex-row items-center justify-between bg-gradient-to-r from-primary-bg via-second-border-padding to-third-border-padding p-6 rounded-xl shadow-xl">
                        <img
                          src={images[4]}
                          alt={`Artistic image of project ${selectedProjectId}`}
                          className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 max-w-full lg:max-w-[60%] mx-auto mb-6 lg:mb-0"
                          onClick={() => {
                            setCurrentCategory({
                              title: `Artistic Image`,
                              images: [
                                {
                                  src: images[4],
                                  alt: `Artistic image of project ${selectedProjectId}`,
                                },
                              ],
                            });
                            setCurrentIndex(0);
                            setIsOpen(true);
                          }}
                        />
                        <div className="lg:w-[35%] text-center lg:text-left">
                          <h3 className="text-xl font-semibold text-text-primary">
                            Artistic Laptop View
                          </h3>
                          <p className="text-secondary-color-text">
                            A creative representation of the project on a laptop
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Overlay for image */}
                    {isOpen && currentCategory && (
                      <div className="fixed bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="relative">
                          <button
                            onClick={closeAlbum}
                            className="absolute top-24 -right-10 text-white text-[60px]"
                          >
                            &times; {/* close */}
                          </button>
                          <img
                            src={currentCategory.images[currentIndex].src}
                            alt={currentCategory.images[currentIndex].alt}
                            className="rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    )}

                    {/* MOBILE IMAGES */}
                    <div className="grid grid-cols-1 cursor-pointer md:grid-cols-2 gap-6 aspect-w-9 aspect-h-16 overflow-hidden bg-gradient-to-r from-primary-bg via-second-border-padding to-third-border-padding p-6 rounded-xl shadow-xl">
                      {images.slice(2, 4).map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`Mobile project image ${index + 1}`}
                          className="rounded-lg shadow-lg hover:shadow-2xl object-cover hover:scale-105 transition-transform duration-1000 w-full sm:w-[60%] lg:w-[50%] mx-auto"
                          onClick={() => {
                            setCurrentCategory({
                              title: `Image ${index + 1}`,
                              images: [
                                {
                                  src: img,
                                  alt: `Mobile project image ${index + 1}`,
                                },
                              ],
                            });
                            setCurrentIndex(0);
                            setIsOpen(true);
                          }}
                        />
                      ))}
                    </div>

                    {isOpen && currentCategory && (
                      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 -top-36">
                        <div className="relative">
                          <button
                            onClick={closeAlbum}
                            className="absolute top-24 -right-10 text-white text-[60px]"
                          >
                            &times; {/* close */}
                          </button>
                          <img
                            src={currentCategory.images[currentIndex].src}
                            alt={currentCategory.images[currentIndex].alt}
                            className="rounded-lg shadow-lg mt-32"
                          />
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  // Fallback in caso di assenza di immagini
                  <p className="text-center text-gray-500">
                    No images available for this project.
                  </p>
                )}
              </section>

              {/* CASE STUDY */}
              <section aria-labelledby="case-study" className="mt-20 px-4">
                <h2
                  id="case-study"
                  className="text-center text-[32px] extraSmall:text-[46px] md:text-[80px] font-extrabold text-text-primary"
                >
                  CASE OF STUDY
                </h2>
                <div className="flex flex-col items-center mt-10 text-text-primary">
                  {/* Descrizione del case study */}
                  <p className="max-w-2xl text-center text-[14px] extraSmall:text-[22px] md:text-[28px] font-medium bg-border-padding p-6 rounded-lg shadow-lg">
                    {project.caseOfStudy}
                  </p>

                  {/* Tag informativi */}
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {project.caseOfStudyInformation.map((info, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-secondary-color-text text-primary-bg rounded-full text-[14px] md:text-[16px] font-semibold shadow-md hover:bg-third-border-padding hover:text-secondary-color-text transition-all duration-300"
                      >
                        {info}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
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
