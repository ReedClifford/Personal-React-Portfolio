import { Fragment } from "react";
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
    </Fragment>
  );
};
export default MainDirectory;
