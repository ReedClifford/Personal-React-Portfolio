import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import web1 from "../assets/aesthetic.co.png";
import web2 from "../assets/youtube-clone.png";

import useDarkContext from "../hooks/contextHook";
import { firebase, react, tailwind } from "../utilities/image.utility";
import CollegeProjects from "./projects/CollegeProjects";
import ProjectCard from "./projects/ProjectCard";

const Projects = () => {
  const { darkMode } = useDarkContext();
  return (
    <section className={darkMode ? "dark" : ""} id="projects">
      <div className="min-h-screen p-10">
        <h1 className="sectionHeaders">
          <span className="span font-mono">03.</span>Some Things I've Built
        </h1>
        <div className="grid grid-cols-1 p-5  gap-3  lg:mx-32 ">
          <div data-aos="fade-down">
            <div className=" mt-16 hidden lg:block ">
              <img
                src={web1}
                alt="aesthetic.co"
                className="object-cover object-center"
              />
            </div>
            {/* Aesthetic.CO card*/}
            <ProjectCard
              img={web1}
              title="Aesthetic.Co"
              type="Featured Project"
            >
              <p className="sectionParagraphs">
                My recent personal project which I made with react. A standard
                e-commerce app which includes authentication, product showcase
                and add to cart features. This project is not yet fully done,
                I'll add payment api in order to showcase a full e-commerce
                experience, might add an admin panel too in the near future.
              </p>
              <div className="flex gap-5 my-5 w-full ">
                <a
                  href="https://github.com/ReedClifford/Aesthetic.Co"
                  className="projectLinks"
                >
                  <FaGithub /> Source Code
                </a>
                <a
                  href="https://aesthetic-co.vercel.app"
                  className="projectLinks "
                >
                  <FaExternalLinkAlt /> Live Project
                </a>
              </div>
              <div className="flex gap-2 items-center justify-center lg:justify-start">
                <div>
                  <img src={react} alt="react" className="techStack" />
                </div>
                <div>
                  <img src={tailwind} alt="react" className="techStack" />
                </div>
                <div>
                  <img src={firebase} alt="react" className="techStack" />
                </div>
              </div>
            </ProjectCard>
          </div>

          {/* YOUUTUBE CLONE*/}
          <div data-aos="fade-down">
            <div className=" mt-16 hidden lg:block ">
              <img
                src={web2}
                alt="aesthetic.co"
                className="object-cover object-center"
              />
            </div>

            <ProjectCard
              img={web2}
              title="Youtube Clone"
              type="Featured Project"
            >
              <p className="sectionParagraphs">
                Tried to make a youtube clone with its basic functionalities,
                Youtube datas are fetched from RapidAPi
                <br />
                <span className=" underline cursor-pointer  text-pink-700 dark:text-cyan-500">
                  <a href="https://rapidapi.com/ytdlfree/api/youtube-v31/">
                    (https://rapidapi.com/ytdlfree/api/youtube-v31/)
                  </a>
                </span>
              </p>
              <div className="flex gap-5 my-5 w-full ">
                <a
                  href="https://github.com/ReedClifford/Youtube-Clone"
                  className="projectLinks"
                >
                  <FaGithub /> Source Code
                </a>
                <a
                  href="https://youtube-i-guess.vercel.app"
                  className="projectLinks "
                >
                  <FaExternalLinkAlt /> Live Project
                </a>
              </div>
              <div className="flex gap-2 items-center justify-center lg:justify-start">
                <div>
                  <img src={react} alt="react" className="techStack" />
                </div>
                <div>
                  <img src={tailwind} alt="react" className="techStack" />
                </div>
              </div>
            </ProjectCard>
          </div>
        </div>
      </div>
      <CollegeProjects />
    </section>
  );
};

export default Projects;
