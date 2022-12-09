import { motion as animate } from "framer-motion";
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
          <animate.h1
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 0.75, ease: "easeIn" }}
            className="mainHeader"
          >
            Reed Clifford
          </animate.h1>
          <div className="overflow-hidden">
            <animate.h2
              animate={{ y: 0 }}
              initial={{ y: "120%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="subHeader "
            >
              Web Developer
            </animate.h2>
          </div>
          <div className="overflow-hidden">
            <animate.p
              animate={{ y: 0 }}
              initial={{ y: "120%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="paragraphs"
            >
              I am a fresh graduate with a degree Bachelor in Science of
              Information Technology at University of Batangas. I enjoy creating
              things that live on the internet.
            </animate.p>
          </div>
          <animate.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 0.75, ease: "easeIn" }}
            className="flex gap-3 mt-10 justify-evenly items-center text-2xl text-center lg:text-3xl"
          >
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
          </animate.div>

          <animate.a
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 0.75, ease: "easeIn" }}
            href="https://drive.google.com/file/d/1KHvZHq1wB83Kq-adLLGIms2_djuAWLkC/view?usp=sharing"
          >
            <button className="cv-btn">
              <HiDocumentDuplicate />
              My Resume
            </button>
          </animate.a>
        </div>
      </main>
    </section>
  );
};
export default Home;
