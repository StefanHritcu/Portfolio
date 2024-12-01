import { LuArrowUpRightSquare } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

function ProjectCard({ title, description, star, image }) {
  // Stato per gestire il hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative my-6 md:mx-14 lg:mx-20 lg2:mx-40 w-auto cursor-pointer hover:scale-105 transform transition duration-1000"
      onMouseEnter={() => setIsHovered(true)} // Gestione hover
      onMouseLeave={() => setIsHovered(false)} // Gestione hover
    >
      {/* Animazione rotazione iniziale e hover */}
      {star && (
        <motion.div
          className="absolute top-6 left-4"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <FaStar className="text-yellow-500 w-8 h-8" />
        </motion.div>
      )}
      <header className="flex rounded-t-2xl justify-between p-6 pb-3 -mb-1 bg-[#353535]">
        <h2 className="text-secondary-color-text ml-10 md:ml-12 font-monospace font-semibold text-xl extraSmall:text-3xl md:text-[34px] lg:text-[46px]">
          {title}
        </h2>
        <LuArrowUpRightSquare className="min-w-10 min-h-10 pl-2 text-red-300 hover:text-red-400" />
      </header>
      <div className="bg-gray-600 rounded-b-2xl flex flex-col md:flex-row items-center p-4 md:p-6">
        <div className="relative w-full md:w-1/2 overflow-hidden rounded-lg shadow-3xl">
          <img
            src={image}
            alt="prova image"
            className="h-48 w-full object-cover md:h-60 lg:h-72 transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <h3 className="hidden verySmall:block text-text-primary px-4 py-4 md:py-0 md:px-6 lg:mx-12 text-sm sm:text-base md:text-lg lg:text-xl">
          {description}
        </h3>
      </div>
    </section>
  );
}

export default ProjectCard;
