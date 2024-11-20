import { LuArrowUpRightSquare } from "react-icons/lu";
import PROVACARDPROJECT from "./../assets/icons/prova-project-image-card.png";

function ProjectCard({ title, description }) {
  return (
    <>
      <section className="my-6 md:mx-14 lg:mx-20 lg2:mx-40 w-auto cursor-pointer hover:scale-105 transform-transition duration-1000">
        <header className="flex rounded-t-2xl justify-between p-6 bg-[#353535]">
          <h2 className="text-secondary-color-text ml-2 lg:ml-11 font-monospace font-semibold text-xl lg:text-[36px]">
            {title}
          </h2>
          <LuArrowUpRightSquare className="text-3xl lg:text-[40px]" />
        </header>
        <div className="bg-gray-600 h-[200px] verySmall:h-[400px] rounded-b-2xl flex flex-col md:flex-row items-center">
          <img src={PROVACARDPROJECT} alt="prova image" className="" />
          <h3 className="hidden verySmall:block text-text-primary px-4 pt-4 md:pt-2 lg:mx-12">
            {description}
          </h3>
        </div>
      </section>
    </>
  );
}

export default ProjectCard;
