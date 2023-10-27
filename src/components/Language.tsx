import { useState } from "react";
import { useTranslation } from "react-i18next";

import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Language() {
  const { i18n } = useTranslation();
  const [ptSelected, setPtSelected] = useState<boolean>(false);

  const changeLanguage = (i18n: any, language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex gap-4 relative">
      <span
        className={`fi fi-br text-2xl hover:cursor-pointer duration-300 rounded-sm md:text-3xl ${
          ptSelected ? "" : "languageSelected"
        }`}
        onClick={() => {
          changeLanguage(i18n, "pt");
          setPtSelected(true);
        }}
      />
      <span
        className={`fi fi-us text-2xl hover:cursor-pointer duration-300 rounded-sm md:text-3xl ${
          ptSelected ? "languageSelected" : ""
        }`}
        onClick={() => {
          changeLanguage(i18n, "en");
          setPtSelected(false);
        }}
      />
    </div>
  );
}
