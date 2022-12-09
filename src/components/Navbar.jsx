import { motion as animate } from "framer-motion";
import { BsFillLightbulbFill, BsFillMoonStarsFill } from "react-icons/bs";

import { Outlet } from "react-router-dom";
import dark from "../assets/darkmode.png";
import light from "../assets/lightmode.png";
import useDarkContext from "../hooks/contextHook";

const Navbar = () => {
  const { darkMode, setDarkMode } = useDarkContext();
  const toggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className={darkMode ? "dark" : ""}>
      <animate.nav
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.25, duration: 0.75, ease: "easeIn" }}
        className="navbar"
      >
        <div>
          {darkMode ? (
            <a href="#home">
              <img src={dark} alt="dark" className="w-16" />
            </a>
          ) : (
            <a href="#home">
              <img src={light} alt="dark" className="w-16" />
            </a>
          )}
        </div>
        <ul className="navlist">
          <li className="navlinks">
            <a href="#about">About</a>
          </li>
          <li className="navlinks">
            <a href="#skills">Skills</a>
          </li>
          <li className="navlinks">
            <a href="#projects">Projects</a>
          </li>
          {darkMode ? (
            <button onClick={toggle}>
              <BsFillLightbulbFill className="theme-toggler" />
            </button>
          ) : (
            <button onClick={toggle}>
              <BsFillMoonStarsFill className="theme-toggler" />
            </button>
          )}
        </ul>
      </animate.nav>
      <Outlet />
    </header>
  );
};
export default Navbar;
