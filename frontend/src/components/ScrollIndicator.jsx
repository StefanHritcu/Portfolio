import { motion } from "framer-motion";

function ScrollIndicator() {
  return (
    <div className="w-10 h-16 border-secondary-color-text border-4 overflow-hidden rounded-2xl flex flex-col justify-start items-center">
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.5 }}
        animate={{
          y: [40, 40, 0, 0, 40],
          opacity: [0, 1, 1, 0, 0],
          scale: [0.5, 1, 1, 0.5, 0.5],
        }}
        transition={{
          duration: 4,
          times: [0, 0.25, 0.45, 0.7, 1],
          repeat: Infinity,
        }}
        className="w-3 h-3 rounded-full bg-secondary-color-text my-1"
      ></motion.div>
    </div>
  );
}

export default ScrollIndicator;
