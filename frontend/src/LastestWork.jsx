import ProjectCard from "./components/ProjectCard";

function LastestWork() {
  return (
    <>
      <div className="my-20 pb-20 mx-2 sm:mx-10 md:mx-12 lg:mx-36 min-h-[400px] h-auto bg-second-border-padding">
        <h2 className="text-center pt-20 font-[900] text-[90px] text-text-primary">
          LATEST WORK
        </h2>
        <ProjectCard />
      </div>
    </>
  );
}

export default LastestWork;
