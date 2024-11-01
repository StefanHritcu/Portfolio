import SkillsComponent from "./components/SkillsComponent";
import htmlCloud from "./assets/cloud-bobbles.png";
import profile from "./assets/imgPortfolio.png";

function Skills({ skillsScrolled600px, skillsScrolled700px }) {
  const basicSkills = {
    skills: [
      { name: "HTML", image: htmlCloud },
      { name: "Base", image: profile },
      { name: "CSS", image: htmlCloud },
      { name: "JavaScript", image: profile },
      { name: "React", image: htmlCloud },
    ],
    reverse: false,
  };

  const exploredSkills = {
    skills: [
      { name: "Node.js", image: profile },
      { name: "Next.js", image: htmlCloud },
      { name: "Angular", image: profile },
      { name: "TypeScript", image: htmlCloud },
      { name: "GraphQL", image: profile },
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
