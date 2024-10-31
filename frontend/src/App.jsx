import { useEffect, useState } from "react";
import "./index.css";
import MainComponent from "./MainComponent";
import Informations from "./Informations";

function App() {
  const [isScrolledBis200px, setIsScrolledBis200px] = useState(false);
  const [isScrolledBis500px, setIsScrolledBis500px] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Controllo per 200px
    setIsScrolledBis200px(scrollPosition > 280);

    // Controllo per 500px
    setIsScrolledBis500px(scrollPosition > 280);
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
  return (
    <>
      <div className="bg-primary-bg h-[2000px]">
        <MainComponent
          isScrolledBis200px={isScrolledBis200px}
          isMounted={isMounted}
          c
        />
        <Informations
          isScrolledBis500px={isScrolledBis500px}
          isScrolledBis200px={isScrolledBis200px}
        />
      </div>
    </>
  );
}

export default App;
