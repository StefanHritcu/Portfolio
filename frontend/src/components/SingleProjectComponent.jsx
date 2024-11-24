import { MdArrowOutward } from "react-icons/md";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import dataProjects from "./../DATA/dataProjects.json";
import githubIcon from "./../assets/icons/github-icon.svg";
import youtubeIcon from "./../assets/icons/yt-icon.svg";

//id 1
import Id1First from "./../assets/id-projects-images/id-1/id1-first.png";
import Id1Second from "./../assets/id-projects-images/id-1/id1-second.png";
import Id1Third from "./../assets/id-projects-images/id-1/id1-third.png";
import Id1Fourth from "./../assets/id-projects-images/id-1/id1-fourth.png";
import Id1Fifth from "./../assets/id-projects-images/id-1/id1-fifth.png";

function SingleProjectComponent({ onBackToHome }) {
  const location = useLocation();

  // VERY IMPORTANT STATE INFORMATION: EACH PROJECT HAS A UNIQUE ID,
  // AND I USE THIS STATE TO RENDER THE SELECTED PROJECT CLICKED IN
  // "LATEST WORK.JSX".
  const selectedProjectId = location.state?.selectedProjectId || null;

  // Trova il progetto corrispondente dal file JSON
  const project = dataProjects.dataProjects.find(
    (item) => item.id === selectedProjectId
  );

  if (!project) {
    return (
      <div className="text-center mt-20 text-red-500 text-2xl">
        <p>Project not found!</p>
        <Link to="/" onClick={onBackToHome} className="text-blue-500 underline">
          Back to the Home
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Bottone per tornare alla home */}
      <Link to="/" onClick={onBackToHome} className="absolute top-6 left-10">
        <MdOutlineArrowBack className="text-white w-12 h-12" />
      </Link>

      <div className="bg-border-padding py-20 px-4">
        <div className="sm:mx-4 md:mx-12 md2:mx-20 md3:mx-32 md4:mx-52 bg-second-border-padding min-h-[1400px] p-8 extraSmall:p-12 md:p-20">
          {/* PROJECT TITLE*/}
          <div className="flex justify-start items-start pt-6">
            <h1 className="text-[32px] extraSmall:text-[36px] md:text-[52px] font-extrabold text-text-primary">
              {project.title}
            </h1>
            <Link
              to={project.deploy}
              target="_blank"
              title="Visit the Site"
              className="border-4 rounded-md flex hover:scale-125 transform-transition duration-1000 items-center border-whiten verySmall2:ml-6 md:ml-8 lg:ml-12"
            >
              <MdArrowOutward className="text-white w-7 extraSmall:w-8 md:w-10 h-7 extraSmall:h-8 md:h-10" />
            </Link>
          </div>

          {/* CREATED AT THE DATE */}
          <div>
            <h2 className="text-red-200 text-sm md:text-lg">
              {project.createdDate}
            </h2>
          </div>

          {/* PROJECT DESCRIPTION */}
          <div className="max-w-[500px]">
            <p className="text-text-primary text-lg md:text-2xl mt-2.5">
              {project.description}
            </p>
          </div>

          {/* TECH USED */}
          <div className="max-w-[600px] flex flex-wrap items-center justify-start gap-2 mt-20">
            {project.technology.map((tech, index) => (
              <p
                key={index}
                className="w-[calc(50%-1rem)] md:w-[calc(33%-1rem)] text-center border-2 border-white rounded-lg py-2 text-text-primary text-md"
              >
                {tech}
              </p>
            ))}
          </div>

          {/* LINKS LIKE GITHUB REPO, YOUTUBE PROJECT VIDEO DESCRIPTION */}
          <nav className="my-8">
            <ul className="space-y-4">
              <li>
                <Link
                  to={project.gitCodeSource}
                  className="flex items-center px-4 py-3 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 hover:shadow-xl transform transition-all duration-300"
                  target="_blank"
                >
                  <img
                    src={githubIcon}
                    alt="GitHub Icon"
                    className="w-12 h-12 mr-4"
                  />
                  <span className="text-lg font-semibold text-gray-300 underline decoration-gray-300 hover:decoration-primary-bg">
                    Explore the Code on GitHub
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={project.youtubeVideo}
                  className="flex items-center px-4 py-3 bg-red-600 rounded-lg shadow-lg hover:bg-red-500 hover:shadow-xl transform transition-all duration-300"
                  target="_blank"
                >
                  <img
                    src={youtubeIcon}
                    alt="YouTube Icon"
                    className="w-12 h-12 mr-4"
                  />
                  <span className="text-lg font-semibold text-gray-50 underline decoration-gray-50 hover:decoration-gray-200">
                    Watch the Project Video on YouTube
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* IMAGES */}
          <div className="my-20 mx-2 space-y-12">
            {/* FIRST DIV: MAIN LARGE IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-r from-border-padding via-second-border-padding to-third-border-padding p-6 rounded-xl shadow-xl">
              <img
                src={Id1First}
                alt="Large image of the project"
                className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <img
                src={Id1Fourth}
                alt="Large image of the project"
                className="rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* SECOND DIV: ARTISTIC MOBILE IMAGES */}
            <div className="relative bg-gradient-to-r from-primary-bg to-second-border-padding rounded-xl shadow-xl p-6 flex flex-wrap justify-center items-center gap-6">
              <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-transparent rounded-xl blur-sm"></div>
              <img
                src={Id1Second}
                alt="Mobile project image"
                className="relative h-[400px] w-auto md:h-[500px] rounded-lg shadow-lg hover:scale-110 transition-transform duration-500"
              />
              <img
                src={Id1Third}
                alt="Mobile project image"
                className="relative h-[400px] w-auto md:h-[500px] rounded-lg shadow-lg hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* THIRD DIV: SINGLE LARGE IMAGE */}
            <div className="relative bg-gradient-to-r from-third-border-padding to-border-padding p-8 rounded-xl shadow-xl">
              <img
                src={Id1Fifth}
                alt="Laptop image of the project"
                className="mx-auto w-[90%] md:w-[900px] rounded-lg shadow-xl hover:scale-105 hover:rotate-1 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-300 to-transparent rounded-xl blur-lg"></div>
            </div>
          </div>

          {/* RESULTS */}
          <div className="mt-20">
            <h2 className="text-center text-[32px] extraSmall:text-[46px] md:text-[80px] font-extrabold text-text-primary">
              RESULTS
            </h2>
          </div>

          {/* MORE WORKS */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default SingleProjectComponent;
