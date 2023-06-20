import React, { useContext, useEffect } from "react";
import LanguageContext from "../context/LanguageContext";

const ArrowIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 ml-1"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );
};

const LanguageDropdown = () => {
  const [language, setLanguage] = useContext(LanguageContext);
  let key = Math.random().toString(36).substring(7);

  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle={"dropdown-" + key}
        className="font-medium text-light-gray text-center inline-flex items-center"
        type="button"
      >
        {language === "en" ? "ENG" : language === "de" ? "DEU" : "ქარ"}
        <ArrowIcon />
      </button>

      {/* Dropdown menu */}
      <div
        id={"dropdown-" + key}
        className="z-10 hidden bg-white shadow w-44 rounded-md"
      >
        <ul
          className="py-2 text-nav-bg text-sm divide-y divide-light-gray shadow"
          aria-labelledby="dropdownDefaultButton"
        >
          <li
            className={`py-1.5 text-center cursor-pointer ${
              language === "en" ? "bg-light-yellow" : ""
            }`}
            onClick={() => setLanguage("en")}
          >
            English
          </li>
          <li
            className={`py-1.5 text-center cursor-pointer ${
              language === "de" ? "bg-light-yellow" : ""
            }`}
            onClick={() => setLanguage("de")}
          >
            Deutsch
          </li>
          <li
            className={`py-1.5 text-center cursor-pointer ${
              language === "ka" ? "bg-light-yellow" : ""
            }`}
            onClick={() => setLanguage("ka")}
          >
            ქართული
          </li>
        </ul>
      </div>
    </>
  );
};

export default LanguageDropdown;
