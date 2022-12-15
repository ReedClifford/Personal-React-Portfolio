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
        <h1 className="sectionHeaders" data-aos="fade-up">
          <span className="font-mono span">02.</span>Tools And Skills
        </h1>

        <div className="flex flex-col justify-center items-center gap-5 p-5 lg:mx-20">
          <div className="my-5 w-full">
            <p className="sectionParagraphs" data-aos="fade-up">
              This are the languages and tools I have in my kit as a
              webdeveloper. I have Strong grasp and understanding of the web
              development essentials <span className="span">HTML5</span>,{" "}
              <span className="span">CSS3</span> and{" "}
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
              <span className="span">TailwindCSS</span>, when working with large
              projects because the class utilities it provide is top-notch , I
              also know Bootstrap. Using{" "}
              <span className="span">Css Frameworks</span> saves me alot of time
              when stying my components. I have basic and little background on
              backend development I have worked with{" "}
              <span className="span">PHP</span> and{" "}
              <span className="span">Firebase</span> on some personal and school
              projects. Lastly every developer must know atleast basics of
              version control, such as <span className="span">Git</span>.
            </p>
          </div>

          <div className="skillCard-container">
            <SkillSetCard skill="HTML5" img={html} />
            <SkillSetCard skill="CSS3" img={css} />
            <SkillSetCard skill="Javascript" img={js} />
            <SkillSetCard skill="Bootstrap" img={bootstrap} />
            <SkillSetCard skill="TailwindCSS" img={tailwind} />
            <SkillSetCard skill="React.Js" img={react} />
            <SkillSetCard skill="Redux" img={redux} />
            <SkillSetCard skill="Firebase" img={firebase} />
            <SkillSetCard skill="PHP" img={php} />
            <SkillSetCard skill="GIT" img={git} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
