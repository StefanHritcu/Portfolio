import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import GetInTouch from "./componets/getInTouch/GetInTouch";
import Header from "./componets/header/Header";
import Skills from "./componets/skills/Skills";
import CardProjects from "./componets/cardProjects/CardProjects";

function App() {
  return (
    <>
      <main className="homepage">
        <Header />
        <GetInTouch />
        <Skills />
        <CardProjects />
      </main>
    </>
  );
}

export default App;
