import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import MainComponent from "./MainComponent";
import Informations from "./Informations";
import LastestWork from "./LastestWork";
import GetInTouch from "./GetInTouch";

import { animateScroll as scroll } from "react-scroll";

import Rocket from "./assets/icons/rocket.png";
import FireLeft from "./assets/icons/fire-left.png";
import FireRight from "./assets/icons/fire-right.png";
import SingleProjectComponent from "./components/SingleProjectComponent";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isScrolledBis200px, setIsScrolledBis200px] = useState(false);
  const [isScrolledBis500px, setIsScrolledBis500px] = useState(false);
  const [skillsScrolled600px, setskillsScrolled600px] = useState(false);
  const [skillsScrolled700px, setskillsScrolled700px] = useState(false);

  const [rocketClickToTop, setRocketClickToTop] = useState(false);
  const [rocketIsClicked, setRocketIsClicked] = useState(false);
  const [showFireLeft, setShowFireLeft] = useState(true);

  const [showAppContent, setShowAppContent] = useState(true);

  const handleSingleProjectClick = (clicked) => {
    setShowAppContent(!clicked);
    scroll.scrollToTop({
      smooth: "easeInOutQuint",
    });
  };

  const handleRocket = () => {
    setRocketIsClicked(true);

    scroll.scrollToTop({
      smooth: "easeInOutQuint",
    });

    setTimeout(() => {
      setRocketIsClicked(false);
    }, 3000);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolledBis200px(scrollPosition > 320);
    setIsScrolledBis500px(scrollPosition > 320);
    setskillsScrolled600px(scrollPosition > 800);
    setskillsScrolled700px(scrollPosition > 650);
    setRocketClickToTop(scrollPosition > 800 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (rocketIsClicked) {
      interval = setInterval(() => {
        setShowFireLeft((prev) => !prev);
      }, 200);
    }
    return () => clearInterval(interval);
  }, [rocketIsClicked]);

  return (
    <>
      <div className="relative bg-primary-bg">
        {/* Mostra o nasconde il contenuto principale in base a `showAppContent` */}
        {showAppContent && (
          <div className="bg-primary-bg min-h-[4000px] h-auto pb-4">
            <MainComponent isScrolledBis200px={isScrolledBis200px} />
            <Informations
              isScrolledBis500px={isScrolledBis500px}
              isScrolledBis200px={isScrolledBis200px}
              skillsScrolled600px={skillsScrolled600px}
              skillsScrolled700px={skillsScrolled700px}
            />
            <LastestWork onSingleProjectClicked={handleSingleProjectClick} />
            <GetInTouch />
          </div>
        )}

        <AnimatePresence>
          {rocketClickToTop && !rocketIsClicked && (
            <div className="fixed z-[150] bottom-8 right-2 md:right-8 transform transition duration-300">
              <div className="flex flex-col items-center">
                {/* ROCKET IMAGE */}
                <img
                  title="Top"
                  src={Rocket}
                  alt="Rocket image"
                  onClick={handleRocket}
                  className="z-30 w-auto h-16 md:h-20 hover:scale-125 transform transition duration-1000 cursor-pointer"
                />
              </div>
            </div>
          )}

          {rocketIsClicked && (
            <motion.div
              initial={{ bottom: "2rem" }}
              animate={{ y: "-100vh" }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="fixed z-[150] bottom-8 right-2 md:right-8 flex flex-col items-center"
            >
              <img
                src={Rocket}
                alt="Rocket image"
                className="z-30 w-auto h-16 md:h-20"
              />
              {showFireLeft ? (
                <img
                  src={FireLeft}
                  alt="rocket fire image"
                  className="z-20 -mt-1 h-auto w-8"
                />
              ) : (
                <img
                  src={FireRight}
                  alt="rocket fire image"
                  className="z-20 -mt-1 h-auto w-8"
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Rotte per i progetti */}
      <Routes>
        <Route
          path="project"
          element={
            <SingleProjectComponent
              onBackToHome={() => handleSingleProjectClick(false)}
            />
          }
        />
      </Routes>

      {/* Mostra GetInTouch solo quando il contenuto principale è nascosto */}
      <AnimatePresence>
        {!showAppContent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-primary-bg"
          >
            <GetInTouch />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
