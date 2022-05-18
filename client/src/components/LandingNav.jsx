import logo from "../assets/images/logo.png";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme, Theme } from "react-daisyui";
import { useEffect } from "react";
export default function LandingNav() {
  const { theme, setTheme } = useTheme("");
  useEffect(() => {
    setTheme("dracula");
  }, []);
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
        <label className="swap swap-rotate ">
          <input className="hidden" type="checkbox" id="swap" />
          {theme === "dracula" ? (
            <FaSun
              onClick={() =>
                setTheme(theme === "dracula" ? "winter" : "dracula")
              }
              className="text-accent dark:text-accent text-4xl cursor-pointer swap-off"
            />
          ) : (
            <FaMoon
              onClick={() =>
                setTheme(theme === "dracula" ? "winter" : "dracula")
              }
              className="text-success text-4xl cursor-pointer swap-on"
            />
          )}
        </label>
      </nav>
    </>
  );
}
