import { useEffect, useState } from "react";
import "./index.css";
import MainComponent from "./MainComponent";
import Informations from "./Informations";
import LastestWork from "./LastestWork";
import GetInTouch from "./GetInTouch";

import Rocket from "./assets/icons/rocket.svg";

function App() {
  const [isScrolledBis200px, setIsScrolledBis200px] = useState(false);
  const [isScrolledBis500px, setIsScrolledBis500px] = useState(false);
  const [skillsScrolled600px, setskillsScrolled600px] = useState(false);
  const [skillsScrolled700px, setskillsScrolled700px] = useState(false);

  const [rocketClickToTop, setRocketClickToTop] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolledBis200px(scrollPosition > 320);
    setIsScrolledBis500px(scrollPosition > 320);
    setskillsScrolled600px(scrollPosition > 800);
    setskillsScrolled700px(scrollPosition > 650);
    setRocketClickToTop(scrollPosition > 300 ? true : false);
    setIsProjectFixed(scrollPosition);
  };
  useEffect(() => {
    {
      /* Set to true only when the project is opened/mounted  */
    }
    setIsMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Log the change to isMounted when it updates
    console.log("is MOUNTED!", isMounted);
  }, [isMounted]); // This effect runs whenever isMounted changes

  useEffect(() => {
    console.log("Scrolled 200px status:", isScrolledBis200px);
  }, [isScrolledBis200px]);

  useEffect(() => {
    console.log("Scrolled 500px status:", isScrolledBis500px);
  }, [isScrolledBis500px]);

  useEffect(() => {
    console.log("Scrolled 600px status:", skillsScrolled600px);
  }, [skillsScrolled600px]);

  useEffect(() => {
    console.log("Scrolled 700px status:", skillsScrolled700px);
  }, [skillsScrolled700px]);

  useEffect(() => {
    console.log("Scrolled 200px status for ROCKET:", rocketClickToTop);
  }, [rocketClickToTop]);

  return (
    <>
      <div className="relative">
        <div className="bg-primary-bg min-h-[4000px] h-auto pb-20">
          <MainComponent
            isScrolledBis200px={isScrolledBis200px}
            isMounted={isMounted}
          />
          <Informations
            isScrolledBis500px={isScrolledBis500px}
            isScrolledBis200px={isScrolledBis200px}
            skillsScrolled600px={skillsScrolled600px}
            skillsScrolled700px={skillsScrolled700px}
          />
          <LastestWork />

          <GetInTouch />
        </div>

        <div
          className={`fixed bottom-8 right-8 transform-transition duration-300 ${
            rocketClickToTop ? "block" : "hidden"
          }`}
        >
          <img src={Rocket} alt="Rocket image" className="w-16 h-16" />
        </div>
      </div>
    </>
  );
}

export default App;
