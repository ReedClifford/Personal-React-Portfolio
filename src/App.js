import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Archive from "./components/Archive";
import MainDirectory from "./components/MainDirectory";
import Navbar from "./components/Navbar";

import useDarkContext from "./hooks/contextHook";
const App = () => {
  const { darkMode } = useDarkContext();

  useEffect(() => {
    AOS.init({ delay: 100 });
  });
  return (
    <div className={darkMode ? "dark" : ""}>
      <section className="root-container ">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<MainDirectory />} />
          </Route>
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
