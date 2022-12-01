import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import useDarkContext from "./hooks/contextHook";
const App = () => {
  const { darkMode } = useDarkContext();
  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="min-h-screen bg-gradient-to-t from-zinc-200 to-stone-100 dark:bg-gradient-to-tr dark:from-black dark:to-slate-900 ">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
      </section>
    </div>
  );
};

export default App;
