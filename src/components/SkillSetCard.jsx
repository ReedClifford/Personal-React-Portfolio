const SkillSetCard = ({ skill, img }) => {
  return (
    <div className="skillCard" data-aos="zoom-in-right">
      <h4 className="text-center text-semibold text-lg dark:text-neutral-200">
        {skill}
      </h4>
      <img src={img} alt="bootstrap" className="mx-auto" />
    </div>
  );
};

export default SkillSetCard;
