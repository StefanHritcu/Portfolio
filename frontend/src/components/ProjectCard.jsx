import { LuArrowUpRightSquare } from "react-icons/lu";
import PROVACARDPROJECT from "./../assets/icons/prova-project-image-card.png";

function ProjectCard({ title, link }) {
  return (
    <>
      <section className="my-6 md:mx-14 lg:mx-20 lg2:mx-40 w-auto cursor-pointer hover:scale-105 transform-transition duration-1000">
        <header className="flex rounded-t-2xl justify-between p-6 text-white bg-[#353535]">
          <h2 className="text-2xl lg:text-[36px]">{title}</h2>
          <LuArrowUpRightSquare className="text-3xl lg:text-[40px]" />
        </header>
        <div className="bg-gray-600 h-[400px] rounded-b-2xl">
          <img src={PROVACARDPROJECT} alt="prova image" />
        </div>
      </section>
    </>
  );
}

export default ProjectCard;
