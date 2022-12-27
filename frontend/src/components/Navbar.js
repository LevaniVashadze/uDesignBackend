import React from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import LocalizedStrings from "react-localization";

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [language, setLanguage] = useContext(LanguageContext);
  console.log(language);

  let texts = new LocalizedStrings({
    en: {
      home: "Home",
      about: "About",
      products: "Products",
      contact: "Contact",
    },
    de: {
      home: "Startseite",
      about: "Über uns",
      products: "Produkte",
      contact: "Kontakt",
    },
    ge: {
      home: "მთავარი",
      about: "ჩვენს შესახებ",
      products: "პროდუქცია",
      contact: "კონტაქტი",
    },
  });

  texts.setLanguage(language);

  const navigationbars = {
    home: "/",
    about: "/about",
    products: "/products",
    contact: "/contact",
  };

  const path = useLocation().pathname;

  return (
    <div>
      {setLanguage("en")}
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <span
              className="self-center text-2xl whitespace-nowrap dark:text-white"
              style={{ fontFamily: "Bodoni Moda" }}
            >
              uDesign
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              className="inline-flex items-center justify-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <img
                className="h-3.5 w-3.5 mr-2"
                src="../../static/images/uk.png"
                alt="uk-flag"
              />
              English
            </button>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700"
              id="language-dropdown-menu"
            >
              <ul className="py-1" role="none">
                <li>
                  <a
                    href=""
                    onClick={() => setLanguage("en")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <img
                        className="h-3.5 w-3.5 mr-2"
                        onClick={() => alert("en")}
                        src="../../static/images/uk.png"
                        alt="uk-flag"
                      />
                      English
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <img
                        className="h-3.5 w-3.5 mr-2"
                        src="../../static/images/germany.png"
                        alt="german-flag"
                      />
                      Deutsch
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    onClick={() => setLanguage("ge")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <img
                        className="h-3.5 w-3.5 mr-2"
                        src="../../static/images/georgia.png"
                        alt="georgia-flag"
                      />
                      ქართული
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-language-select"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                aria-hidden="true"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-xl lg:text-2xl md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {Object.keys(navigationbars).map((key) => (
                <li key={key}>
                  <a
                    href={navigationbars[key]}
                    className={
                      // check if the current path is the same as the link href, if it is makes it blue and underlines it
                      navigationbars[key] === path
                        ? "block py-2 pl-3 pr-4 text-white bg-yellow-270 rounded md:bg-transparent md:text-yellow-270 md:p-0 dark:text-white underline md:decoration-2 md:underline-offset-8 underline-offset-4"
                        : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-270 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }
                  >
                    {texts[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
