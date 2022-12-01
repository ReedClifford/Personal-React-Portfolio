import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import web5 from "../../assets/ampawn.png";
import web3 from "../../assets/myubestore.png";
import web4 from "../../assets/OJT.png";
import { bootstrap, css, html, js, php } from "../../utilities/image.utility";

import ProjectCard from "../projects/ProjectCard";
const CollegeProjects = () => {
  return (
    <section className="min-h-screen p-10">
      <h1 className="sectionHeaders" data-aos="fade-up">
        Other NoteWorthy Projects
      </h1>
      <h5
        className="text-center text-md  mb-10 font-basetext-neutral-900 dark:text-neutral-200  lg:text-lg "
        data-aos="fade-up"
      >
        (College Projects, Not Hosted Online)
      </h5>

      <div className="grid grid-cols-1 p-5  gap-6   lg:mx-32">
        <div data-aos="fade-down">
          <div className=" mt-16 hidden lg:block ">
            <img
              src={web3}
              alt="aesthetic.co"
              className="object-cover object-center"
            />
          </div>
          <ProjectCard img={web3} title="My Ub E-Store" type="Capstone Project">
            <p className="sectionParagraphs">
              "My UB E-Store: A University of Batangas Bookstore Web
              Application" is our capstone project a response to the
              university's out-of-date bookstore system, as well as a platform
              for bookstore workers and students to interact with one another.
              As human contact became more sophisticated, the number of software
              systems inventing new ways to connect with humans expanded in
              direct proportion to this advancement in human sophistication.
            </p>
            <div className="flex gap-5 my-5 w-full ">
              <a
                href="https://github.com/ReedClifford/My-Ub-E-Store"
                className="projectLinks"
              >
                <FaGithub /> Source Code
              </a>
            </div>
            <div className="flex gap-2 items-center justify-center lg:justify-start">
              <div>
                <img src={html} alt="html" className="techStack" />
              </div>
              <div>
                <img src={css} alt="css" className="techStack" />
              </div>
              <div>
                <img src={js} alt="javascript" className="techStack" />
              </div>
              <div>
                <img src={bootstrap} alt="bootstrap" className="techStack" />
              </div>
              <div>
                <img src={php} alt="php" className="techStack" />
              </div>
            </div>
          </ProjectCard>
        </div>

        <div data-aos="fade-down">
          <div className=" mt-16 hidden lg:block ">
            <img
              src={web4}
              alt="Ubian-Inquiry"
              className="object-cover object-center"
            />
          </div>
          <ProjectCard
            img={web4}
            title="E-Brahman Inquiry System"
            type="Internship Project"
          >
            <p className="sectionParagraphs">
              My internship project, an Inquiry system for ubian students. They
              can send their various concerns to the university admin using
              their university student number. After sending an inquiry students
              will be notified when their concerns are resolved or how can they
              resolved their inquiry via email notification.
            </p>
            <div className="flex gap-5 my-5 w-full ">
              <a
                href="https://github.com/ReedClifford/ebrahman-inquiry"
                className="projectLinks"
              >
                <FaGithub /> Source Code
              </a>
            </div>

            <div className="flex gap-2 items-center justify-center lg:justify-start">
              <div>
                <img src={html} alt="html" className="techStack" />
              </div>
              <div>
                <img src={css} alt="css" className="techStack" />
              </div>
              <div>
                <img src={js} alt="javascript" className="techStack" />
              </div>
              <div>
                <img src={bootstrap} alt="bootstrap" className="techStack" />
              </div>
              <div>
                <img src={php} alt="php" className="techStack" />
              </div>
            </div>
          </ProjectCard>
        </div>
        <div data-aos="fade-down">
          <div className=" mt-16 hidden lg:block ">
            <img
              src={web5}
              alt="AmPawn"
              className="object-cover object-center"
            />
          </div>
          <ProjectCard img={web5} title="AmPawn" type="Summer Project">
            <p className="sectionParagraphs">
              AmPawn is a Paws inspired web page that will be ran by the
              Pawtrolers, a private and non-government organization based on the
              local of the Batangas Province.
            </p>
            <div className="flex gap-5 my-5 w-full ">
              <a
                href="https://github.com/ReedClifford/Ampawns"
                className="projectLinks"
              >
                <FaGithub /> Source Code
              </a>
            </div>
            <div className="flex gap-2 items-center justify-center lg:justify-start">
              <div>
                <img src={html} alt="html" className="techStack" />
              </div>
              <div>
                <img src={css} alt="css" className="techStack" />
              </div>
              <div>
                <img src={js} alt="javascript" className="techStack" />
              </div>
              <div>
                <img src={php} alt="php" className="techStack" />
              </div>
            </div>
          </ProjectCard>
        </div>
      </div>

      <Link to="/archive">
        <h6
          className="underline mt-10 pb-10 text-center text-pink-700 dark:text-cyan-500 "
          data-aos="fade-down"
        >
          Go to Projects Archive
        </h6>
      </Link>
    </section>
  );
};

export default CollegeProjects;
