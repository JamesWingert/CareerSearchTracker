import logo from "../assets/images/logo.png";

export default function LandingNav() {
  return (
    <>
      <nav
        className=" max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex">
          <div className="flex items-center justify-between">
            <a href="/">
              <img src={logo} alt="logo" className="h-12 w-auto sm:h-16" />
            </a>
          </div>
        </div>{" "}
      </nav>
    </>
  );
}
