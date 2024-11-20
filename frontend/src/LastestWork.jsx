import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { Link } from "react-router-dom";
import SingleProjectComponent from "./components/SingleProjectComponent";

function LastestWork({ onSingleProjectClicked }) {
  const [isFixed, setIsFixed] = useState(false);

  const handleSingleProjectClicked = () => {
    onSingleProjectClicked(true);
  };

  // Gestione dello scroll per il controllo dello stato `isFixed`
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsFixed(scrollPosition >= 800);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Array di progetti
  const projects = [
    {
      id: 7,
      title: "NEXT FIT TRACK",
      description:
        "Next.js app to track weight loss with ideal weight calculator, progress charts, and secure data storage via Supabase.",
      image: "image1.png",
    },
    {
      id: 6,
      title: "Italian Neighborhood Council",
      description:
        "Website for a local non-profit to promote community engagement, allowing article sharing with GitHub updates.",
      image: "image1.png",
    },
    {
      id: 5,
      title: "React-Performance-Optimizer-App",
      description:
        "React app with a gallery featuring lazy loading, code splitting, manual chunking, and React Profiler for optimization.",
      image: "image1.png",
    },
    {
      id: 4,
      title: "OpenSoundHub",
      description:
        "Full-stack project with a backend programmer. I handled frontend development and managed frontend-backend data flow.",
      image: "image1.png",
    },
    {
      id: 3,
      title: "WeatherApi",
      description:
        "A weather app using real-time data from OpenWeather API. Built with React and deployed on Netlify.",
      image: "image2.png",
    },
    {
      id: 2,
      title: "MERN Restaurant reserevations",
      description:
        "A restaurant management app built with MERN stack: online reservations & staff dashboard for operations.",
      image: "image3.png",
    },
    {
      id: 1,
      title: "Games App",
      description:
        "Next.js project in Romanian with Tic Tac Toe & Connect 4, custom icons, leaderboard, and Redux state management.",
      image: "image4.png",
    },
  ];

  return (
    <div
      id="PROJECT"
      className={`my-10 sm:my-20 pb-20 mx-4 lg:mx-36 min-h-[400px] h-auto bg-second-border-padding`}
    >
      {/* Titolo della sezione */}
      <h2 className="sticky top-0 text-center py-10 font-[900] text-[34px] extraSmall:text-[44px] sm:text-[90px] text-text-primary">
        LATEST WORK
      </h2>

      {/* Lista delle card */}
      <div className="relative">
        {projects.map((project) => (
          <div
            onClick={handleSingleProjectClicked}
            key={project.id}
            className="sticky top-40 md:top-56 z-40 transition-all transform duration-300"
          >
            <Link key={project.id} to="/project" className="no-underline">
              <ProjectCard
                title={project.title}
                description={project.description}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastestWork;
