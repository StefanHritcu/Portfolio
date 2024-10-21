import ProfileImage from "./../assets/imgPortfolio.png";

export default function HomePage() {
  return (
    <>
      <div className="relative bg-primary-bg min-w-[200px] h-[460px] sm:mx-10 md:mx-24 xl:mx-44 flex flex-col justify-end z-10">
        <div className="bg-primary-bg w-auto h-[360px] mb-6 flex flex-col justify-end z-20">
          <div className="bg-border-padding h-[460px] rounded-t-3xl z-30">
            <img
              src={ProfileImage}
              alt="image portfolio"
              className="w-[260px] md:w-[320px] h-auto absolute bottom-6 z-30 left-1/2 transform -translate-x-1/2 filter grayscale"
            />
          </div>
          <h1 className="absolute mx-auto bg-transparent bottom-0 text-[32px] extra-small:text-[44px] md:text-[60px] md2:text-[74px] md3:text-[80px] w-full text-center px-4 text-text-primary bg-primary-bg z-40">
            Stefan Hritcu
          </h1>
        </div>
        {/* OVERLAY */}
        <div
          className="absolute w-full bottom-1.5 extra-small:bottom-3 md:bottom-4 md3:bottom-5 h-4 md2:h-6 z-50 bg-red-400 opacity-60 pointer-events-none"
          style={{ mixBlendMode: "multiply" }}
        ></div>
      </div>
    </>
  );
}
