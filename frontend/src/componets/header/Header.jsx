import HoverLink from "./../../spring/animatedComponents/HoverLink";

function Header() {
  return (
    <>
      <header className="container header d-flex justify-content-between align-items-center">
        <h1 aria-label="Homepage" className="header-logo d-none d-md-block">
          sh
        </h1>
        <nav className="d-none d-md-block">
          <HoverLink className="header-single-link" href="#skills">
            Skills
          </HoverLink>

          <HoverLink className="header-single-link" href="#mywork">
            My Work
          </HoverLink>
          <HoverLink className="header-single-link" href="#blog">
            Blog
          </HoverLink>
          <HoverLink className="header-single-link" href="#contact">
            Contact
          </HoverLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
