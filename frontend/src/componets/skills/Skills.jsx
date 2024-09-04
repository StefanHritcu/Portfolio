import HTML from "./../../assets/icons/html.png";
import CSS from "./../../assets/icons/css.png";
import SASS from "./../../assets/icons/sass.png";
import TAILWIND from "./../../assets/icons/tailwind.png";
import BOOTSTRAP from "./../../assets/icons/bootstrap.png";
import JS from "./../../assets/icons/javascipt.png";
import REACT from "./../../assets/icons/react.png";
import TS from "./../../assets/icons/typescript.png";
import GIT from "./../../assets/icons/git.png";
import NODE from "./../../assets/icons/node.png";
import MONGODB from "./../../assets/icons/mongodb.png";

function Skills() {
  return (
    <>
      <div className="skills-custom">
        <section className="container main-title-component-custom pt-2 pb-4">
          <h1>I&apos;M GOOD AT THIS</h1>
        </section>
        <nav className="container mb-4">
          <div className="row justify-content-center align-items-center">
            <div className="col-auto">
              <a href="https://www.w3schools.com/html/" target="_blank">
                <img
                  className="single-skill-custom"
                  src={HTML}
                  alt="html icon"
                  title="HTML"
                />
              </a>
            </div>
            <div className="col-auto">
              <a href="https://www.w3schools.com/css/" target="_blank">
                <img
                  className="single-skill-custom"
                  src={CSS}
                  alt="css icon"
                  title="CSS"
                />
              </a>
            </div>
            <div className="col-auto">
              <a href="https://sass-lang.com/" target="_blank">
                <img
                  className="single-skill-custom"
                  src={SASS}
                  alt="sass icon"
                  title="SASS"
                />
              </a>
            </div>
            <div className="col-auto">
              <a href="https://tailwindcss.com/" target="_blank">
                <img
                  className="single-skill-custom"
                  src={TAILWIND}
                  alt="tailwind icon"
                  title="TAILWIND"
                />
              </a>
            </div>
            <div className="col-auto">
              <a href="https://getbootstrap.com/" target="_blank">
                <img
                  className="single-skill-custom-bootstrap"
                  src={BOOTSTRAP}
                  alt="bootstrap icon"
                  title="BOOTSTRAP"
                />
              </a>
            </div>
            <div className="col-auto">
              <a href="https://www.javascript.com/" target="_blank">
                <img
                  className="single-skill-custom"
                  src={JS}
                  alt="javascript icon"
                  title="JAVASCRIPT"
                />
              </a>
            </div>
            <div className="col-auto">
              <a href="https://react.dev/" target="_blank">
                <img
                  className="single-skill-custom"
                  src={REACT}
                  alt="react icon"
                  title="REACT"
                />
              </a>
            </div>
            <div className="col-auto">
              <a href="https://www.typescriptlang.org/" target="_blank">
                <img
                  className="single-skill-custom-typescript"
                  src={TS}
                  alt="typescript icon"
                  title="TYPESCRIPT"
                />
              </a>
            </div>
            <div className="col-auto">
              <a href="https://git-scm.com/" target="_blank">
                <img
                  className="single-skill-custom"
                  src={GIT}
                  alt="git icon"
                  title="GIT"
                />
              </a>
            </div>
            <div className="col-auto">
              <a href="https://nodejs.org/en" target="_blank">
                <img
                  className="single-skill-custom"
                  src={NODE}
                  alt="node icon"
                  title="NODE"
                />
              </a>
            </div>
            <div className="col-auto">
              <a href="https://www.mongodb.com/" target="_blank">
                <img
                  className="single-skill-custom"
                  src={MONGODB}
                  alt="mongodb icon"
                  title="MONGODB"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Skills;
