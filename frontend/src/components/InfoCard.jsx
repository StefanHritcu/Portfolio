import { motion } from "framer-motion";

function InfoCard() {
  return (
    <>
      <motion.div className="mx-8 bg-border-padding rounded-sm">
        <h2 className="text-text-primary p-4 text-3xl">
          Hi, I’m Stefan, an interactive front-end developer based in Cologne.
        </h2>
        <p className="px-6 pb-6 text-secondary-color-text">
          With over a year of self-taught experience, I have worked on
          open-source projects, collaborated with other developers, and
          contributed to building a website for a neighborhood council.
        </p>
      </motion.div>
    </>
  );
}

export default InfoCard;
