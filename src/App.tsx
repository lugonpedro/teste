import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translateResources } from "./data/translate";

import Header from "./sections/Header";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

i18n.use(initReactI18next).init({
  resources: translateResources,
  fallbackLng: "en",
});

const App = () => {
  return (
    <div className="bg-[#040404] overflow-x-hidden h-screen scrollbar-thin scrollbar-track-green/20 scrollbar-thumb-green">
      <section id="header">
        <Header />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
