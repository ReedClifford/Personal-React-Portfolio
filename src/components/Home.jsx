import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HiDocumentDuplicate } from "react-icons/hi";
import darkbg from "../assets/dark.jpg";
import lightbg from "../assets/light.jpg";
import useDarkContext from "../hooks/contextHook";
const Home = () => {
  const { darkMode } = useDarkContext();

  return (
    <section className={darkMode ? "dark" : ""} id="home">
      <main className="home-mainContainer">
        {darkMode ? (
          <img src={darkbg} alt="lightbg" className="home-bgImg" />
        ) : (
          <img src={lightbg} alt="lightbg" className="home-bgImg" />
        )}
        <div className="flex flex-col  items-center text-center p-5 z-20">
          <h1 className="mainHeader">Reed Clifford</h1>
          <h2 className="subHeader">Web Developer</h2>
          <p className="paragraphs">
            I'am a fresh graduate with a degree Bachelor in Science of
            Information Technology at University of Batangas. I enjoy creating
            things that live on the internet.
          </p>
          <div className="flex gap-3 mt-10 justify-evenly items-center text-2xl text-center lg:text-3xl">
            <a href="https://github.com/ReedClifford" className="socmed">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/reed-clifford-palbacal-406585243/"
              className="socmed"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/clifford.palbacal"
              className="socmed"
            >
              <FaFacebook />
            </a>
            <a href="https://twitter.com/Cliffoooordddd" className="socmed">
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/cliffoooordddd/"
              className="socmed"
            >
              <FaInstagram />
            </a>
          </div>

          <a href="https://drive.google.com/file/d/1_vMezn5GbGKTPZl0_ecpJHw8Bf0aAAjO/view?usp=sharing">
            <button className="cv-btn">
              <HiDocumentDuplicate />
              My Resume
            </button>
          </a>
        </div>
      </main>
    </section>
  );
};
export default Home;
