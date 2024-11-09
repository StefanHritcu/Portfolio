import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

function InfoCard({ isScrolledBis500px, isScrolledBis200px }) {
  const [scrolled500px, setScrolled500px] = useState(isScrolledBis500px);
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    setScrolled500px(isScrolledBis500px);
  }, [isScrolledBis500px]);

  // Alterna tra "Cologne" e l'icona del cuore ogni 5 secondi, mostrando il cuore per 0.5 secondi
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowHeart(true);
      // Dopo 500ms, nasconde il cuore e mostra "Cologne" di nuovo
      setTimeout(() => {
        setShowHeart(false);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

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
          based in{" "}
          {showHeart ? (
            <motion.span
              key="heart"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
              className="inline-block text-red-400"
            >
              <FaHeart />
            </motion.span>
          ) : (
            <motion.span
              key="cologne"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-red-400"
            >
              Cologne
            </motion.span>
          )}
          .
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
