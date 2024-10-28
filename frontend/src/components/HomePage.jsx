import ProfileImage from "./../assets/imgPortfolio.png";
import { motion } from "framer-motion";
import CloudeBobbles from "./../assets/cloud-bobbles.png";
import { useEffect, useState } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function HomePage() {
  const [text, setText] = useState("");

  const fullText = "Hello👋, Welcome to my personal Portfolio 🙂";

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  const cloudVariants = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => {
        if (prev.length < fullText.length) {
          return fullText.slice(0, prev.length + 1);
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <>
      <div className="relative overflow-hidden bg-primary-bg min-w-[200px] h-[350px] md:h-[450px] mx-8 sm:mx-10 md:mx-12 lg:mx-36 flex flex-col justify-end z-10 ">
        <div className="bg-primary-bg w-auto h-[360px] mb-8 flex flex-col justify-end z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.8 }}
            className="bg-border-padding h-[180px] md:h-[240px] md3:h-[260px] rounded-t-3xl z-30"
          >
            {/* PERSONAL IMAGE */}
            <img
              src={ProfileImage}
              alt="image portfolio"
              className="w-[170px] md:w-[240px] md3:w-[260px] h-auto absolute -bottom-2 -sm:bottom-3 md3:bottom-0 z-30 left-1/2 transform -translate-x-1/2 filter grayscale"
            />

            {/* CLOUD BOBBLES IMAGE */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cloudVariants}
              transition={{ duration: 0.8 }}
              className="lg:mr-20 cloud1:mr-32 cloud2:mr-40 cloud3:mr-70"
            >
              <img
                className="hidden sm:block absolute w-[170px] h-auto left-3/4 transform -translate-x-1/2 -top-20"
                src={CloudeBobbles}
                alt="boubles image"
              />
              <p className="hidden sm:block absolute text-[13px] w-[120px] font-semibold tracking-tighter pl-3 h-auto left-3/4 transform -translate-x-1/2 -top-9">
                {text.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="font-poppins"
                    initial={{ opacity: 0, y: 10 }} // Inizialmente invisibile e leggermente spostato in basso
                    animate={{ opacity: 1, y: 0 }} // Diventa visibile e torna in posizione
                    transition={{ duration: 0.002 }} // Ritardo basato sull'indice della lettera
                  >
                    {char}
                  </motion.span>
                ))}
              </p>
            </motion.div>
          </motion.div>

          <h1 className="absolute mx-auto font-poppins bg-transparent bottom-1 extraSmall:bottom-0  text-[34px] verySmall:text-[40px] extraSmall:text-[46px] md3:pb-1 extra-small:text-[60px] md:text-[100px] md3:text-[120px] w-full text-center px-4 text-text-primary bg-primary-bg z-40">
            Stefan Hritcu
          </h1>
        </div>

        {/* OVERLAY */}
        <motion.div
          className="absolute w-full bottom-3.5 md:bottom-6 md3:bottom-[32px] h-4 extra-small:h-6 md:h-8 md3:h-9 z-20 bg-red-800 opacity-60 pointer-events-none"
          style={{ mixBlendMode: "multiply" }}
          initial={{ y: "200%" }}
          animate={{ y: "0%" }}
          transition={{ type: "spring", stiffness: 120 }}
        ></motion.div>
      </div>
      <section className="flex justify-around items-center">
        <motion.div
          className="py-4 bg-primary-bg"
          initial={{ y: 60 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h2
            className="text-2xl text-secondary-color-text font-lighter mx-8 sm:mx-10 md:mx-12 lg:mx-36 font-poppins"
            initial={{ opacity: 0 }} //0 is not visible
            animate={{ opacity: 1 }} //1 is visible
            transition={{ duration: 4.2 }}
          >
            Frontend Developer / Full-Stack Skills
          </motion.h2>
        </motion.div>

        <div className="rounded-2xl border-secondary-color-text border-2 hover:border-red-400 cursor-pointer hover:scale-105 transform-transition duration-300">
          <div className="px-4 pt-[12px] flex items-center justify-center">
            <p className="text-secondary-color-text">Get in touch</p>
            <MdOutlineArrowRightAlt className="text-secondary-color-text ml-2 text-2xl mb-3" />
          </div>
        </div>
      </section>
    </>
  );
}
