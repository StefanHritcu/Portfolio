import HomePage from "./components/HomePage";
import ProjectImage from "./assets/imgPortfolio.png";

function MainComponent() {
  return (
    <>
      <div className="relative z-50 h-screen pb-32">
        {/* START RESPONSIVE HEADER */}
        <header className="flex items-center justify-between">
          {/* PROJECTS */}
          <div className="w-[40px] h-[40px] bg-border-padding mt-4 sm:ml-10 md:ml-12 lg:mx-36 rounded-md flex items-center justify-center">
            <div className="w-[28px] h-[28px] bg-gray-200 rounded-full overflow-hidden p-[3px] opacity-70">
              <img
                src={ProjectImage}
                alt="project images"
                className="object-cover grayscale opacity-90 hover:grayscale-0 cursor-pointer duration-300 transition"
              />
            </div>
          </div>

          {/* CONTACT ME */}
          <div className="w-[40px] h-[40px] bg-border-padding mt-4 sm:mr-10 md:mr-12 lg:mx-36 rounded-md"></div>
        </header>
        {/* END RESPONSIVE HEADER */}

        <HomePage />
      </div>
    </>
  );
}

export default MainComponent;
