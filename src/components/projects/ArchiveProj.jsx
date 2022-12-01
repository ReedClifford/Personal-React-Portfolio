import { CiFolderOn } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const ArchiveProj = ({ link, title, desc, children }) => {
  return (
    <div
      className="border border-pink-700 h-6/6 p-10 bg-neutral-50 flex flex-col gap-5 items-center 
    justify-between dark:bg-neutral-900 dark:border-neutral-700 relative "
      data-aos="flip-right"
    >
      <div className=" flex justify-between items-center w-full ">
        <CiFolderOn className="text-5xl text-pink-700 dark:text-cyan-500" />
        <a href={link}>
          <FaGithub className="text-2xl text-pink-700 dark:text-cyan-500" />
        </a>
      </div>
      <h1 className="text-2xl text-center text-pink-700 font-semibold dark:text-cyan-500">
        {title}
      </h1>
      <p className="text-sm text-center text-neutral-600 dark:text-neutral-300">
        {desc}
      </p>
      {children}
    </div>
  );
};

export default ArchiveProj;
