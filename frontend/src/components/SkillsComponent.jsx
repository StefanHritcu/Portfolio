import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function SkillsComponent({
  title,
  skills,
  reverse,
  skillsScrolled600px,
  skillsScrolled700px,
}) {
  const [skillsScrolled, setSkillsScrolled] = useState(skillsScrolled600px);

  useEffect(() => {
    setSkillsScrolled(skillsScrolled600px);
    console.log(skillsScrolled600px, "is 600px true?");
  }, [skillsScrolled600px]);

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{
        x: skillsScrolled ? 0 : "100%",
        opacity: skillsScrolled ? 1 : 0,
      }}
      transition={{ duration: 1 }}
      exit={{ x: "100%", transition: { duration: 1 } }}
      className={`lg:flex lg:justify-around lg:items-center mx-8 sm:mx-10 md:mx-12 lg:mx-36 bg-second-border-padding ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <section className="lg:w-1/2 p-4 overflow-hidden">
        <motion.h2
          initial=""
          className="text-text-primary text-xl verySmall:text-2xl lg:text-[44px] lg:font-medium lg:leading-tight"
        >
          {title}
        </motion.h2>
      </section>

      <div className="flex flex-wrap justify-center lg:justify-start">
        {skills.map((skill, index) => (
          <nav
            className="flex items-center justify-center w-1/3 sm:w-1/4 lg:w-1/6 p-2"
            key={index}
          >
            <img
              className="w-12 h-auto cursor-pointer"
              title={skill.title}
              src={skill.image}
              alt={skill.name}
            />
          </nav>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillsComponent;
