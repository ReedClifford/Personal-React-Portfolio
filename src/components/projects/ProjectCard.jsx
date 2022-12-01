const ProjectCard = ({ img, title, children, type }) => {
  return (
    <div
      className="text-start bg-gradient-to-bl border shadow-md border-pink-700 rounded-md relative mt-10 lg:mt-0
     from-zinc-100 to-stone-50 dark:border-neutral-700 dark:bg-gradient-to-br dark:from-black dark:to-slate-900 
      backdrop-blur-md  bg-white/30 dark:bg-black/20 p-5 "
      data-aos="zoom-out"
    >
      <img
        src={img}
        alt="aesthetic.co"
        className="absolute inset-0 h-full w-full object-cover object-center mix-blend-overlay rounded-md z-0 md:hidden"
      />
      <div className="relative">
        <h4 className="text-pink-700 font-base text-lg my-2 dark:text-cyan-500">
          {type}
        </h4>
        <h2 className="text-3xl font-semibold mb-2 text-neutral-700 lg:text-2xl dark:text-neutral-200">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};
export default ProjectCard;
