import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Language from "../components/Language";

// import profileIcon from "../assets/profile.jpg";
import { EarthCanvas, StarsCanvas } from "../components/canvas";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="h-screen flex flex-col space-y-8 items-center justify-center text-center relative">
      <StarsCanvas />
      <div className="absolute top-0 left-8">
        <Language />
      </div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.5, delay: 3 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-full h-[300px] md:h-[400px] xl:h-[500px]"
      >
        <EarthCanvas />
      </motion.div>
      {/* <motion.img
        src={profileIcon}
        alt="Pedro Lugon Image"
        className="rounded-full h-32 w-32 mx-auto object-cover border-white border-4 md:h-44 md:w-44 xl:h-60 xl:w-60"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      /> */}
      <div className="w-full px-20">
        <h2 className="uppercase text-xl text-white pb-2 font-bold md:text-3xl xl:text-4xl">
          <span className="text-4xl">P</span>edro
        </h2>
        <p className="text-[#246444] uppercase text-sm">{t("nav.hello")}</p>
        <motion.div
          className="p-10"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
          viewport={{ once: true }}
        >
          <ul className="flex items-center justify-evenly text-sm uppercase flex-col gap-6 md:flex-row md:justify-center md:text-md xl:text-xl relative">
            <li className="link">
              <a href="#experience">{t("nav.experience")}</a>
            </li>
            <li className="link">
              <a href="#projects">{t("nav.projects")}</a>
            </li>
            <li className="link">
              <a href="#about">{t("nav.about")}</a>
            </li>
            <li className="link">
              <a href="#skills">{t("nav.skills")}</a>
            </li>
            <li className="link">
              <a href="#contact">{t("nav.contact")}</a>
            </li>
          </ul>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
