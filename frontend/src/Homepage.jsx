import HeadImage from "./assets/imgPortfolio.png/";

function Homepage() {
  return (
    <>
      <section>
        {/* HEAD BUTTON --> PROJECTS */}

        <div className="w-42 h-42 bg-border-padding">
          <img
            src={HeadImage}
            alt="head image"
            className="bg-transparent w-10 h-10"
          />
        </div>

        {/* MAIL BUTTON --> MAIL, LINKEDIN AND GITHUB */}
        <div></div>
      </section>
    </>
  );
}

export default Homepage;
