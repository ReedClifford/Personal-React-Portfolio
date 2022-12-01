const SkillSetCard = ({ skill, img }) => {
  return (
    <div className="border shadow-sm shadow-pink-600 p-4 rounded-xl dark:backdrop-blur-sm dark:bg-black/30 dark:shadow-none  dark:border-neutral-800">
      <h4 className="text-center dark:text-neutral-200">{skill}</h4>
      <img src={img} alt="bootstrap" className="mx-auto" />
    </div>
  );
};

export default SkillSetCard;
