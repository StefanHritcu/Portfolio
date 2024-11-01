import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function InfoCard({ isScrolledBis500px, isScrolledBis200px }) {
  const [scrolled500px, setScrolled500px] = useState(isScrolledBis500px);
  const [scrolled200px, setScrolled200px] = useState(isScrolledBis200px);

  useEffect(() => {
    setScrolled500px(isScrolledBis500px);
  }, [isScrolledBis500px]);

  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{
        x: scrolled500px ? 0 : "-100%",
        opacity: scrolled500px ? 1 : 0,
      }}
      transition={{ duration: 1 }}
      exit={{ x: "-100%", transition: { duration: 1 } }}
      className="mx-8 sm:mx-10 md:mx-12 lg:mx-36 bg-second-border-padding rounded-sm lg:flex h-auto overflow-hidden lg:justify-around lg:items-center lg:text-center"
    >
      {/* Animazione per ogni riga del titolo */}
      <div className="lg:w-1/2 p-4 text-text-primary text-2xl verySmall:text-3xl lg:text-[52px] lg:font-medium lg:leading-tight">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{
            x: scrolled500px ? 0 : "-100%",
            transition: { duration: 1, delay: scrolled500px ? 0 : 0.4 },
          }}
          exit={{
            x: "-100%",
            transition: { duration: 1 },
          }}
        >
          Hi, I’m Stefan,
        </motion.div>
        <motion.div
          initial={{ x: "-120%" }}
          animate={{
            x: scrolled500px ? 0 : "-120%",
            transition: { duration: 1, delay: scrolled500px ? 0.5 : 0.2 },
          }}
          exit={{
            x: "-120%",
            transition: { duration: 1 },
          }}
        >
          an interactive front-end developer
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{
            x: scrolled500px ? 0 : "-100%",
            transition: { duration: 1, delay: scrolled500px ? 1 : 0 },
          }}
          exit={{
            x: "-100%",
            transition: { duration: 1 },
          }}
        >
          based in <span className="text-red-400">Cologne</span>.
        </motion.div>
      </div>

      {/* Animazione di dissolvenza per il paragrafo */}
      <motion.p
        initial={{ x: "100%", opacity: 0 }}
        animate={{
          x: scrolled500px ? 0 : "100%",
          opacity: scrolled500px ? 1 : 0,
          transition: { duration: 1, delay: scrolled500px ? 0.6 : 0.3 },
        }}
        exit={{ x: "100%" }}
        className="px-6 pb-6 text-secondary-color-text lg:w-1/2 lg:text-[22px]"
      >
        With over a year of self-taught experience, I have worked on open-source
        projects, collaborated with other developers, and contributed to
        building a website for a neighborhood council.
      </motion.p>
    </motion.div>
  );
}

export default InfoCard;
