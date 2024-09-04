import ImmagineProfilo from "./../../assets/imgPortfolio.png";

function GetInTouch() {
  return (
    <main>
      <div className="d-flex justify-content-center my-4 py-4">
        {/* Sezione di presentazione e pulsante di contatto */}
        <section className="d-flex flex-column align-items-center h-auto text-center">
          <header>
            <h2 className="fs-custom py-2">Hi! ✌🏻</h2>
          </header>
          <div>
            <h4>my name is</h4>
            <h1 className="fs-custom">Stefan Hritcu</h1>
          </div>
          <h4>Fueled by coffee, powered by code.</h4>
          <p className="paragraph-custom p-4">
            I am a Junior Frontend Web Developer from Italy with one year of
            self-taught experience in creating dynamic and accessible websites.
          </p>
          <button className="button-custom">
            <p>GET IN TOUCH</p>
          </button>
        </section>
        {/* Sezione per l'immagine personale */}
        <section className="d-none d-lg-block">
          {/* Immagine personale potrebbe essere aggiunta qui */}
          <img
            className="image-custom"
            src={ImmagineProfilo}
            alt="immagine profilo"
          />
        </section>
      </div>
    </main>
  );
}

export default GetInTouch;
