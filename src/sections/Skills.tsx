import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import html from "../assets/skills/html5.png";
import css from "../assets/skills/css3.png";
import java from "../assets/skills/java.png";
import js from "../assets/skills/js.png";
import ts from "../assets/skills/ts.png";
import csharp from "../assets/skills/csharp.png";
import react from "../assets/skills/react.png";
import next from "../assets/skills/next.png";
import node from "../assets/skills/node.png";
import mysql from "../assets/skills/mysql.png";
import mongo from "../assets/skills/mongo.png";
import tailwind from "../assets/skills/tailwind.png";
import Skill from "../components/Skill";

export const skills: SkillProps[] = [
  {
    title: "HTML",
    image: html,
  },
  {
    title: "CSS",
    image: css,
  },
  {
    title: "Java",
    image: java,
  },
  {
    title: "JavaScript",
    image: js,
  },
  {
    title: "TypeScript",
    image: ts,
  },
  {
    title: "C#",
    image: csharp,
  },
  {
    title: "React",
    image: react,
  },
  {
    title: "Next",
    image: next,
  },
  {
    title: "Tailwind",
    image: tailwind,
  },
  {
    title: "Node",
    image: node,
  },
  {
    title: "MySQL",
    image: mysql,
  },
  {
    title: "MongoDB",
    image: mongo,
  },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 3 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen relative flex flex-col text-center md:text-left max-w-7xl px-10 justify-center mx-auto items-center space-y-4 md:space-y-16"
    >
      <h3 className="pageTitle">{t("skills.title")}</h3>

      <div className="grid grid-cols-3 gap-2 md:gap-4 md:grid-cols-4 xl:gap-8">
        {skills.map((skill) => (
          <Skill image={skill.image} title={skill.title} key={skill.title} />
        ))}
      </div>
    </motion.div>
  );
}
