import HomePage from "./components/HomePage";
import ProjectImage from "./assets/imgPortfolio.png";
import { useState } from "react";

function MainComponent() {
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  return (
    <>
      <div className="relative z-50 h-screen pb-32">
        {/* START RESPONSIVE HEADER */}
        <header className="relative flex items-center justify-between">
          {/* PROJECTS */}
          <div
            onMouseEnter={() => setIsProjectHovered(true)}
            onMouseLeave={() => setIsProjectHovered(false)}
            className="w-[40px] h-[40px] z-50 bg-border-padding mt-4 sm:ml-10 md:ml-12 lg:mx-36 rounded-md flex items-center justify-center overflow-hidden"
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
            className={`absolute w-[180px] left-[180px] bg-border-padding h-[40px] z-10 top-6 overflow-hidden transition-all duration-300 ${
              isProjectHovered ? "w-[180px]" : "w-[0px]"
            }`}
          >
            <a href="#TODO" className="text-white text-center">
              <h2>Projects</h2>
            </a>
          </div>
          {/* CONTACT ME */}
          <div className="w-[40px] h-[40px] bg-border-padding mt-4 sm:mr-10 md:mr-12 lg:mx-36 rounded-md"></div>
        </header>
        {/* END RESPONSIVE HEADER */}

        <HomePage />
      </div>
    </>
  );
}

export default MainComponent;
