import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { Link } from "react-router-dom";
import LatestWorkid1 from "./assets/lastestWork-images/lastest-word-id1.png";
import LatestWorkid2 from "./assets/lastestWork-images/lastest-word-id2.png";
import LatestWorkid3 from "./assets/lastestWork-images/lastest-word-id3.png";
import LatestWorkid4 from "./assets/lastestWork-images/lastest-word-id4.png";
import LatestWorkid5 from "./assets/lastestWork-images/lastest-word-id5.png";
import LatestWorkid6 from "./assets/lastestWork-images/lastest-word-id6.png";
import LatestWorkid7 from "./assets/lastestWork-images/lastest-word-id7.png";

function LastestWork({ onSingleProjectClicked }) {
  const [isFixed, setIsFixed] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleSingleProjectClicked = (id) => {
    onSingleProjectClicked(true);
    setSelectedProjectId(id);
    console.log("Progetto cliccato, ID:", id);
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
      id: 1,
      title: "Games App",
      description:
        "Next.js project in Romanian with Tic Tac Toe & Connect 4, custom icons, leaderboard, and Redux state management.",
      image: LatestWorkid1,
      star: false,
    },
    {
      id: 2,
      title: "MERN Restaurant reserevations",
      description:
        "A restaurant management app built with MERN stack: online reservations & staff dashboard for operations.",
      image: LatestWorkid2,
      star: true,
    },
    {
      id: 3,
      title: "WeatherApi",
      description:
        "A weather app using real-time data from OpenWeather API. Built with React and deployed on Netlify.",
      image: LatestWorkid3,
      star: true,
    },
    {
      id: 4,
      title: "OpenSoundHub",
      description:
        "Full-stack project with a backend programmer. I handled frontend development and managed frontend-backend data flow.",
      image: LatestWorkid4,
      star: false,
    },
    {
      id: 5,
      title: "React-Performance-Optimizer-App",
      description:
        "React app with a gallery featuring lazy loading, code splitting, manual chunking, and React Profiler for optimization.",
      image: LatestWorkid5,
      star: false,
    },
    {
      id: 6,
      title: "Italian Neighborhood Council",
      description:
        "Website for a local non-profit to promote community engagement, allowing article sharing with GitHub updates.",
      image: LatestWorkid6,
      star: true,
    },
    {
      id: 7,
      title: "NEXT FIT TRACK",
      description:
        "Next.js app to track weight loss with ideal weight calculator, progress charts, and secure data storage via Supabase.",
      image: LatestWorkid7,
      star: false,
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
            onClick={() => handleSingleProjectClicked(project.id)}
            key={project.id}
            className="sticky top-40 md:top-56 z-40 transition-all transform duration-300"
          >
            <Link
              key={project.id}
              to="/project"
              className="no-underline"
              state={{ selectedProjectId: project.id }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                star={project.star}
                image={project.image}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastestWork;
