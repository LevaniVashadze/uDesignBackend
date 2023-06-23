import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  let key = Math.random().toString(36).substring(7);

  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle={"dropdown-" + key}
        className="font-medium text-light-gray text-center inline-flex items-center"
        type="button"
      >
        {i18n.resolvedLanguage === "ka"
          ? "ქარ"
          : i18n.resolvedLanguage === "de"
          ? "DEU"
          : "ENG"}
        <ArrowIcon />
      </button>

      {/* Dropdown menu */}
      <div
        id={"dropdown-" + key}
        className="z-50 hidden bg-light-gray dark:bg-nav-bg text-nav-bg dark:text-light-gray shadow w-44 rounded-md"
      >
        <ul
          className="py-2 text-sm divide-y dark:divide-light-gray divide-nav-bg shadow"
          aria-labelledby="dropdownDefaultButton"
        >
          <li
            className={`py-1.5 text-center cursor-pointer ${
              i18n.resolvedLanguage === "en"
                ? "bg-light-yellow text-nav-bg"
                : ""
            }`}
            onClick={() => i18n.changeLanguage("en")}
          >
            English
          </li>
          <li
            className={`py-1.5 text-center cursor-pointer ${
              i18n.resolvedLanguage === "de"
                ? "bg-light-yellow text-nav-bg"
                : ""
            }`}
            onClick={() => i18n.changeLanguage("de")}
          >
            Deutsch
          </li>
          <li
            className={`py-1.5 text-center cursor-pointer ${
              i18n.resolvedLanguage === "ka"
                ? "bg-light-yellow text-nav-bg"
                : ""
            }`}
            onClick={() => i18n.changeLanguage("ka")}
          >
            ქართული
          </li>
        </ul>
      </div>
    </>
  );
};

export default LanguageDropdown;
