import reed from "../assets/me.jpg";
import useDarkContext from "../hooks/contextHook";
const AboutMe = () => {
  const { darkMode } = useDarkContext();
  return (
    <section className={darkMode ? "dark" : ""}>
      <div className="min-h-screen p-10" id="about">
        <h1 className="sectionHeaders">
          <span className="font-mono">01.</span>About Me
        </h1>

        <div className="grid grid-cols-1 lg:flex justify-evenly gap-5 items-center p-5 lg:mx-20">
          <div className="w-3/4 h-3/4 my-5 mx-auto col-span-1 lg:h-1/3 lg:w-1/3">
            <img
              src={reed}
              alt="reed clifford"
              className="object-cover object-center rounded-full "
            />
          </div>
          <div className="cols-span-1 lg:p-20">
            <p className="sectionParagraphs">
              Hi!! my name is <span className="span">Reed</span> and I enjoy
              creating things that live on the internet. I am a{" "}
              <span className="span">webdeveloper</span> based in Batangas,
              Philippines, and I'm very passionate and dedicated to my work. As
              a fresh graduate of{" "}
              <span className="span">
                Bachelor in Science of Information Technology
              </span>{" "}
              at <span className="span">University of Batangas</span>, I still
              lacked experience but im confident with the knowledge I know. Im
              looking forward at the experiences that I will acquire, like
              learning new things, overcoming challenges, meeting goals and
              targets, being frustrated of things that I lack knowledge about
              and alsolearning from it. Because the gratification of overcoming
              an obstacle is my greatest motivator and feeling of accomplishment
              that comes with exceeding challenging goals is what drew me to my
              choosen path.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
