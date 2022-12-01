import { Fragment } from "react";
import { GoChevronUp } from "react-icons/go";
import AboutMe from "../components/AboutMe";
import Home from "../components/Home";

import Projects from "../components/Projects";
import Skills from "../components/Skills";

const MainDirectory = () => {
  return (
    <Fragment>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <a href="#home">
        <button className="backToTop-btn">
          <GoChevronUp />
        </button>
      </a>
    </Fragment>
  );
};
export default MainDirectory;
