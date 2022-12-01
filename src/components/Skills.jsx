import useDarkContext from "../hooks/contextHook";
import {
  bootstrap,
  css,
  firebase,
  git,
  html,
  js,
  php,
  react,
  redux,
  tailwind,
} from "../utilities/image.utility";

import SkillSetCard from "./SkillSetCard";
const Skills = () => {
  const { darkMode } = useDarkContext();
  return (
    <section className={darkMode ? "dark" : ""} id="skills">
      <div className="min-h-screen p-10 flex justify-center items-center flex-col">
        <h1 className="sectionHeaders">
          <span className="font-mono">02.</span>Tools And Skills
        </h1>

        <div className="flex flex-col justify-center items-center gap-5 p-5 lg:mx-20">
          <div className="my-5 w-full">
            <p className="sectionParagraphs">
              This are the languages and tools I have in my kit as a
              webdeveloper. I have Strong grasp and understanding of the web
              development essentials <span className="span">Html5</span>,{" "}
              <span className="span">Css3</span> and{" "}
              <span className="span">Javascript</span>. As a webdeveloper I need
              to be on track and knows atleast the basics of the indemand most
              used technologies in the industry. That reason alone is enough for
              me to learn <span className="span">React</span> which is the
              hottest javascript front-end frame work nowadays. I enjoy using{" "}
              <span className="span">React</span> and this current iteration of
              my portfolio is made with it. I know basic{" "}
              <span className="span">Redux</span> which is a state management
              library of react and Im comfortable using{" "}
              <span className="span">React Context</span>. I love using{" "}
              <span className="span">TailwindCss</span>, when working with large
              projects because the class utilities it provide is top-notch , I
              also know Bootstrap. Using{" "}
              <span className="span">Css Frameworks</span> saves me alot of time
              when stying my components. I have basic and little background on
              backend development I have worked with{" "}
              <span className="span">Php</span> and{" "}
              <span className="span">Firebase</span> on some personal and school
              projects. Lastly every developer must know atleast basics of
              version control, such as <span className="span">Git</span>.
            </p>
          </div>

          <div className="my-5 w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
            <SkillSetCard skill="html" img={html} />
            <SkillSetCard skill="css" img={css} />
            <SkillSetCard skill="javascript" img={js} />
            <SkillSetCard skill="bootstrap" img={bootstrap} />
            <SkillSetCard skill="tailwind" img={tailwind} />
            <SkillSetCard skill="react" img={react} />
            <SkillSetCard skill="redux" img={redux} />
            <SkillSetCard skill="firebase" img={firebase} />
            <SkillSetCard skill="php" img={php} />
            <SkillSetCard skill="git" img={git} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
