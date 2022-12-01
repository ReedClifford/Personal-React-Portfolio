import { BsFillMoonStarsFill } from "react-icons/bs";
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
      <nav className="navbar">
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

          <button onClick={toggle}>
            <BsFillMoonStarsFill className="theme-toggler" />
          </button>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
