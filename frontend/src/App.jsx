import { useEffect, useState } from "react";
import "./index.css";
import MainComponent from "./MainComponent";
import Informations from "./Informations";

function App() {
  const [isScrolledBis200px, setIsScrolledBis200px] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 280) {
      setIsScrolledBis200px(true);
      console.log("è true!!!!", isScrolledBis200px);
    } else {
      setIsScrolledBis200px(false);
      console.log("è false adesso!!!!", isScrolledBis200px);
    }
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

  return (
    <>
      <div className="bg-primary-bg h-[2000px]">
        <MainComponent
          isScrolledBis200px={isScrolledBis200px}
          isMounted={isMounted}
        />
        <Informations />
      </div>
    </>
  );
}

export default App;
