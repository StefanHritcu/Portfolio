import InfoCard from "./components/InfoCard";

function Informations({ isScrolledBis500px, isScrolledBis200px }) {
  return (
    <>
      <div>
        <InfoCard
          isScrolledBis500px={isScrolledBis500px}
          isScrolledBis200px={isScrolledBis200px}
        />
      </div>
    </>
  );
}

export default Informations;
