import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

import image1 from "./../assets/projects-images/weatherTablet.png";
import image2 from "./../assets/icons/html.svg";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineArrowBack } from "react-icons/md";

function SingleProjectComponent() {
  return (
    <>
      <div className="relative">
        {/* BACK TO THE HOME BUTTON */}
        <div className="absolute top-6 left-10">
          <MdOutlineArrowBack className="text-white w-12 h-12" />
        </div>
        <div className="bg-border-padding py-20 px-4">
          <div className="extraSmall:mx-8 sm:mx-10 md:mx-20 lg:mx-80 bg-second-border-padding min-h-[1400px] p-8 extraSmall:p-12 md:p-20">
            {/* TITLE OF THE PROJECT AND BUTTON/LINK "VISIT" */}
            <div className="flex justify-start items-start pt-6">
              <h1 className="text-[32px] extraSmall:text-[46px] md:text-[80px] font-extrabold text-text-primary">
                PROJECT FIRST
              </h1>
              <motion.button className="border-4 rounded-md border-white ml-8 md:ml-20 lg:ml-48">
                <MdArrowOutward className="text-white w-7 extraSmall:w-8 md:w-10 h-7 extraSmall:h-8 md:h-10" />
              </motion.button>
            </div>
            {/* DESCRIPTION */}
            <div className="max-w-[500px]">
              <p className="text-text-primary text-lg md:text-2xl mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                fugiat optio saepe sequi. Laudantium cumque suscipit possimus
                vero ratione quis illo aperiam culpa.
              </p>
            </div>
            {/* HASTAGS */}
            <div className="max-w-[600px] flex flex-wrap items-center justify-start gap-2 mt-20">
              <p className="w-[calc(33%-1rem)] text-center border-2 border-white rounded-lg py-2 text-text-primary text-md">
                fordevsound
              </p>
              <p className="w-[calc(33%-1rem)] text-center border-2 border-white rounded-lg py-2 text-text-primary text-md">
                non so piu
              </p>
              <p className="w-[calc(33%-1rem)] text-center border-2 border-white rounded-lg py-2 text-text-primary text-md">
                okokokookko
              </p>
              <p className="w-[calc(33%-1rem)] text-center border-2 border-white rounded-lg py-2 text-text-primary text-md">
                saniosainsa
              </p>
              <p className="w-[calc(33%-1rem)] text-center border-2 border-white rounded-lg py-2 text-text-primary text-md">
                bracciano nuoiva
              </p>
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
                <p className="text-text-primary pt-2 px-4 text-2xl">
                  Visit site
                </p>
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
    </>
  );
}

export default SingleProjectComponent;
