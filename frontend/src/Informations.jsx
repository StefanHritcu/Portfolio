import InfoCard from "./components/InfoCard";
import Skills from "./Skills";

function Informations({
  isScrolledBis500px,
  isScrolledBis200px,
  skillsScrolled600px,
  skillsScrolled700px,
}) {
  return (
    <>
      <InfoCard
        isScrolledBis500px={isScrolledBis500px}
        isScrolledBis200px={isScrolledBis200px}
      />

      <Skills
        skillsScrolled600px={skillsScrolled600px}
        skillsScrolled700px={skillsScrolled700px}
      />
    </>
  );
}

export default Informations;
