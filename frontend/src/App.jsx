import { useEffect, useState } from "react";
import "./index.css";
import MainComponent from "./MainComponent";
import Informations from "./Informations";

function App() {
  const [isScrolledBis200px, setIsScrolledBis200px] = useState(false);

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-primary-bg h-[2000px]">
        <MainComponent isScrolledBis200px={isScrolledBis200px} />
        <Informations />
      </div>
    </>
  );
}

export default App;
