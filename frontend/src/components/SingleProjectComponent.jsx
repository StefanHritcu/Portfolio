import { motion } from "framer-motion";

function SingleProjectComponent() {
  return (
    <>
      <div className="mx-8 sm:mx-10 md:mx-12 lg:mx-36 bg-second-border-padding min-h-[400px]">
        {/* TITLE OF THE PROJECT AND BUTTON/LINK "VISIT" */}
        <div className="flex justify-start items-start">
          <h1 className="text-[144px]">PROJECT 1</h1>
          <motion.button></motion.button>
        </div>
      </div>
    </>
  );
}

export default SingleProjectComponent;
