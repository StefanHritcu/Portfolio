import HomePage from "./components/HomePage";
import ProjectImage from "./assets/imgPortfolio.png";
import { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { motion } from "framer-motion";

function MainComponent({ isScrolledBis200px, isMounted }) {
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  return (
    <>
      <div className="relative z-50 h-auto pb-32">
        {/* START RESPONSIVE HEADER */}
        <motion.header
          className="relative flex items-center justify-between"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* PROJECTS */}
          <div
            onMouseEnter={() => setIsProjectHovered(true)}
            onMouseLeave={() => setIsProjectHovered(false)}
            className="w-[60px] h-[60px] z-50 bg-border-padding mt-4 ml-8 sm:ml-10 md:ml-12 lg:mx-36 rounded-md flex items-center justify-center overflow-hidden"
          >
            <div className="w-[28px] h-[28px] bg-gray-50 rounded-full overflow-hidden p-[3px] opacity-70">
              <img
                src={ProjectImage}
                alt="project images"
                className="object-cover grayscale opacity-90 hover:grayscale-0 cursor-pointer duration-300 transition"
              />
            </div>
          </div>
          {/* PROJECT SLIDE HOVERED */}
          <div
            onMouseEnter={() => setIsProjectHovered(true)}
            onMouseLeave={() => setIsProjectHovered(false)}
            className={`absolute rounded-r-md bg-border-padding h-[60px] z-10 top-6 overflow-hidden transition-all duration-300 ${
              isProjectHovered
                ? "left-[80px] w-[120px] md:left-[100px] md:w-[130px] lg:left-[200px] lg:w-[150px]"
                : "left-[30px] w-[0px] md:left-[80px] lg:left-[180px]"
            }`}
          >
            <a href="#PROJECT" className="text-white text-center no-underline">
              <h2 className="hover:text-red-100 text-2xl cursor-pointer font-light pt-[12px]">
                Projects
              </h2>
            </a>
          </div>
          {/* CONTACT ME */}
          <div className="w-[60px] h-[60px] hover:scale-105 duration-300 transition-transform cursor-pointer bg-border-padding mt-4 mr-8 sm:mr-10 md:mr-12 lg:mx-36 rounded-md flex items-center justify-center">
            <a
              href="mailto:stefano.94h@gmail.com?subject=Hello&body=I%20have%20a%20question."
              className="w-[28px] h-[28px] text-black border-2 rounded-md flex items-center justify-center"
            >
              <FaMessage className="text-white" />
            </a>
          </div>
        </motion.header>
        {/* END RESPONSIVE HEADER */}

        <HomePage
          isScrolledBis200px={isScrolledBis200px}
          isMounted={isMounted}
        />
      </div>
    </>
  );
}

export default MainComponent;
