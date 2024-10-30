import { motion } from "framer-motion";

function InfoCard() {
  return (
    <div className="mx-8 sm:mx-10 md:mx-12 lg:mx-36 bg-second-border-padding rounded-sm lg:flex h-auto overflow-hidden lg:justify-around lg:items-center lg:text-center">
      {/* Animazione per ogni riga del titolo */}
      <div className="lg:w-1/2 p-4 text-text-primary text-2xl verySmall:text-3xl sm:text- lg:text-[52px] lg:font-medium lg:leading-tight">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0 }}
        >
          Hi, I’m Stefan,
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          an interactive front-end developer
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          based in <span className="text-red-400">Cologne</span>.
        </motion.div>
      </div>

      {/* Animazione di dissolvenza per il paragrafo */}
      <motion.p
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="px-6 pb-6 text-secondary-color-text lg:w-1/2 lg:text-[22px]"
      >
        With over a year of self-taught experience, I have worked on open-source
        projects, collaborated with other developers, and contributed to
        building a website for a neighborhood council.
      </motion.p>
    </div>
  );
}

export default InfoCard;
