import { LuArrowUpRightSquare } from "react-icons/lu";
import PROVACARDPROJECT from "./../assets/icons/prova-project-image-card.png";

function ProjectCard() {
  return (
    <>
      <section className="my-6 mx-2 sm:mx-6 md:mx-12 lg:mx-44 w-auto">
        <header className="flex rounded-t-2xl justify-between p-6 text-white bg-[#353535]">
          <h2 className="text-xl lg:text-[36px]">TITLE</h2>
          <LuArrowUpRightSquare className="text-2xl lg:text-[40px]" />
        </header>
        <div className="bg-gray-600 h-[400px] rounded-b-2xl">
          <img src={PROVACARDPROJECT} alt="prova image" />
        </div>
      </section>
    </>
  );
}

export default ProjectCard;
