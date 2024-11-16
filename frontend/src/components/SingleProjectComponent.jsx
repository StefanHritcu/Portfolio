import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

function SingleProjectComponent() {
  return (
    <>
      <div className="extraSmall:mx-8 sm:mx-10 md:mx-20 lg:mx-80 bg-second-border-padding min-h-[1400px] p-8 extraSmall:p-12 md:p-20">
        {/* TITLE OF THE PROJECT AND BUTTON/LINK "VISIT" */}
        <div className="flex justify-start items-start md:pt-6">
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
            fugiat optio saepe sequi. Laudantium cumque suscipit possimus vero
            ratione quis illo aperiam culpa.
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
      </div>
    </>
  );
}

export default SingleProjectComponent;
