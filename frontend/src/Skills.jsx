import SkillsComponent from "./components/SkillsComponent";

import HTML from "./assets/icons/html.svg";
import SEO from "./assets/icons/seo.svg";
import CSS from "./assets/icons/css.svg";
import TAILWINDCSS from "./assets/icons/tailwindcss.svg";
import JAVASCRIPT from "./assets/icons/javascript.svg";
import REACT from "./assets/icons/react.svg";
import TYPESCRIPT from "./assets/icons/typescript.svg";
import REDUX from "./assets/icons/redux.svg";
import GIT from "./assets/icons/git.svg";
import GITHUB from "./assets/icons/github.svg";
import NETLIFY from "./assets/icons/netlify.svg";
import SASS from "./assets/icons/sass.svg";
import NEXT from "./assets/icons/next.svg";
import ANGULAR from "./assets/icons/angular.svg";
import BOOTSTRAP from "./assets/icons/bootstrap.svg";
import NODE from "./assets/icons/node.svg";
import MONGODB from "./assets/icons/mongodb.svg";
import DOCKER from "./assets/icons/docker.svg";

function Skills({ skillsScrolled600px, skillsScrolled700px }) {
  const basicSkills = {
    skills: [
      { name: "HTML", image: HTML, title: "HTML" },
      { name: "SEO", image: SEO },
      { name: "CSS", image: CSS, title: "CSS" },
      { name: "SASS", image: SASS, title: "SASS" },
      { name: "TAILWINDCSS", image: TAILWINDCSS, title: "TAILWIND CSS" },
      { name: "JAVASCIPT", image: JAVASCRIPT, title: "JAVASCRIPT" },
      { name: "REACT", image: REACT, title: "REACT" },
      { name: "TYPESCRIPT", image: TYPESCRIPT, title: "TYPESCRIPT" },
      { name: "REDUX", image: REDUX, title: "REDUX" },
      { name: "GIT", image: GIT, title: "GIT" },
      { name: "GITHUB", image: GITHUB, title: "GITHUB" },
      { name: "NETLIFY", image: NETLIFY, title: "NETLIFY" },
    ],
    reverse: false,
  };

  const exploredSkills = {
    skills: [
      { name: "DOCKER", image: DOCKER, title: "DOCKER" },
      { name: "BOOTSTRAP", image: BOOTSTRAP, title: "BOOTSTRAP" },
      { name: "NEXT", image: NEXT, title: "NEXT.JS" },
      { name: "ANGULAR", image: ANGULAR, title: "ANGULAR" },
      { name: "NODE", image: NODE, title: "NODE.JS" },
      { name: "MONGODB", image: MONGODB, title: "MONGODB" },
    ],
    reverse: true,
  };

  return (
    <>
      <div className="mt-6 mb-2 lg:mt-44 overflow-hidden">
        <SkillsComponent
          title="These are the skills I apply daily and have mastered for optimal results."
          skills={basicSkills.skills}
          reverse={basicSkills.reverse}
          skillsScrolled600px={skillsScrolled600px}
          skillsScrolled700px={skillsScrolled700px}
        />
      </div>

      <div className="my-2 lg:mt-44 overflow-hidden">
        <SkillsComponent
          title="These skills I have used in projects and understand well; with some review, I can confidently apply them again."
          skills={exploredSkills.skills}
          reverse={exploredSkills.reverse}
          skillsScrolled600px={skillsScrolled600px}
          skillsScrolled700px={skillsScrolled700px}
        />
      </div>
    </>
  );
}

export default Skills;
