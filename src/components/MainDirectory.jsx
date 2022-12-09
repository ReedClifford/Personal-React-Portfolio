import { Fragment } from "react";
import { GoChevronUp } from "react-icons/go";
import AboutMe from "../components/AboutMe";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const MainDirectory = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      <Home />
      <AboutMe />
      <Skills />
      <Projects />

      <button className="backToTop-btn" onClick={scrollTop}>
        <GoChevronUp />
      </button>
    </Fragment>
  );
};
export default MainDirectory;
