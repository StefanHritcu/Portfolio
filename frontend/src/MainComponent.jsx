import HomePage from "./components/HomePage";
import ProjectImage from "./assets/imgPortfolio.png";
import { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { motion } from "framer-motion";

function MainComponent() {
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  return (
    <>
      <div className="relative z-50 h-screen pb-32">
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
                ? "left-[80px] md:left-[120px] w-[120px]"
                : "left-[30px] md:left-[40px] w-[0px]"
            }`}
          >
            <a href="#TODO" className="text-white text-center no-underline">
              <h2 className="hover:text-red-100 text-2xl cursor-pointer font-light pt-[12px]">
                Projects
              </h2>
            </a>
          </div>
          {/* CONTACT ME */}
          <div className="w-[60px] h-[60px] hover:scale-105 duration-300 transition-transform cursor-pointer bg-border-padding mt-4 mr-8 sm:mr-10 md:mr-12 lg:mx-36 rounded-md flex items-center justify-center">
            <div className="w-[28px] h-[28px] text-black border-2 rounded-md flex items-center justify-center">
              <FaMessage className="text-white" />
            </div>
          </div>
        </motion.header>
        {/* END RESPONSIVE HEADER */}

        <HomePage />
      </div>
    </>
  );
}

export default MainComponent;
