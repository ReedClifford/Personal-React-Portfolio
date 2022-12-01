import { Link } from "react-router-dom";
import ArchiveProj from "./projects/ArchiveProj";
const Archive = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-bl p-10 from-zinc-200 to-stone-100 scroll-smooth	
    dark:bg-gradient-to-br dark:from-black dark:to-slate-900"
    >
      <h1 className="sectionHeaders" data-aos="fade-up">
        Archive
      </h1>
      <h5
        className="text-center text-md  mb-10 font-basetext-neutral-900 dark:text-neutral-200  lg:text-lg "
        data-aos="fade-up"
      >
        (Some of my projects during my 100 days to code journey.)
      </h5>
      <div className="grid grid-cols-1 my-10 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-10">
        <ArchiveProj
          link="https://github.com/ReedClifford/weather-checker"
          title="weather-checker "
          desc="practicing api requests with axios"
        >
          <div className="flex text-xs gap-5 text-neutral-700 dark:text-neutral-400">
            <span>Html5</span>
            <span>Css3</span>
            <span>Javascript</span>
          </div>
        </ArchiveProj>
        <ArchiveProj
          link="https://github.com/ReedClifford/twitch-ripoff"
          title="twitch-ripoff"
          desc="basic react redux crud app ,will continue and finish it soon"
        >
          <div className="flex text-xs gap-5 text-neutral-700 dark:text-neutral-400">
            <span>React</span>
            <span>Redux</span>
            <span>Tailwind</span>
          </div>
        </ArchiveProj>
        <ArchiveProj
          link="https://github.com/ReedClifford/progress-bar"
          title="progress-bar"
          desc="Hands on Assesment for my Job Application as Webdeveloper to ShortPoint"
        >
          <div className="flex text-xs gap-5 text-neutral-700 dark:text-neutral-400">
            <span>Html5</span>
            <span>Css3</span>
            <span>Javascript</span>
          </div>
        </ArchiveProj>
        <ArchiveProj
          link="https://github.com/ReedClifford/IThinkweb-fe-exam"
          title="
        IThinkweb-fe-exam"
          desc="source code for my frontend web exam for IThinkWeb Corp."
        >
          <div className="flex text-xs gap-5 text-neutral-700 dark:text-neutral-400">
            <span>React</span>
            <span>React Context</span>
            <span>Tailwind</span>
          </div>
        </ArchiveProj>
        <ArchiveProj
          link="https://github.com/ReedClifford/Songs"
          title="Songs"
          desc="mini project I created to practice react with redux basics"
        >
          <div className="flex text-xs gap-5 text-neutral-700 dark:text-neutral-400">
            <span>React</span>
            <span>Redux</span>
            <span>Tailwind</span>
          </div>
        </ArchiveProj>
        <ArchiveProj
          link="https://github.com/ReedClifford/Widget"
          title="widgets"
          desc="About
        Mini project I created while learning react contains (search ,dropdown,accordion,translator) components. Application of basic react hooks and basic navigation"
        >
          <div className="flex text-xs gap-5 text-neutral-700 dark:text-neutral-400">
            <span>React</span>
            <span>React Context</span>
            <span>Tailwind</span>
          </div>
        </ArchiveProj>
        <ArchiveProj
          link="https://github.com/ReedClifford/movie-stats-comparison"
          title="
        movie-stats-comparison"
          desc="personal project practicing fetching data from api"
        >
          <div className="flex text-xs gap-5 text-neutral-700 dark:text-neutral-400">
            <span>Html5</span>
            <span>Tailwind</span>
            <span>Javascript</span>
          </div>
        </ArchiveProj>
        <ArchiveProj
          link="https://github.com/ReedClifford/MyPortfolio"
          title="Personal Portfolio v.1"
          desc="First Itereration of my personal portfolio."
        >
          <div className="flex text-xs gap-5 text-neutral-700 dark:text-neutral-400">
            <span>Html5</span>
            <span>Tailwind</span>
            <span>Javascript</span>
          </div>
        </ArchiveProj>
      </div>
      <div className="text-center text-pink-500 dark:text-cyan-500">
        <Link to="/">Back To MainPage</Link>
      </div>
    </div>
  );
};
export default Archive;
