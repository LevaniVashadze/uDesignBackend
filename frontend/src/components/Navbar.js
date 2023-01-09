import React from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LocalizedStrings from "react-localization";
import { Dropdown, Button } from "flowbite-react";

let strings = new LocalizedStrings({
  en: {
    home: "Home",
    about: "About",
    products: "Products",
    contact: "Contact",
    login: "Login",
  },
  de: {
    home: "Startseite",
    about: "Über uns",
    products: "Produkte",
    contact: "Kontakt",
    login: "Anmelden",
  },
  ka: {
    home: "მთავარი",
    about: "ჩვენს შესახებ",
    products: "პროდუქცია",
    contact: "კონტაქტი",
    login: "შესვლა",
  },
});

const ka = () => {
  return (
    <img
      className="h-3.5 w-3.5 mr-2"
      src="../../static/images/ge.png"
      alt="georgia-flag"
    />
  );
};

const de = () => {
  return (
    <img
      className="h-3.5 w-3.5 mr-2"
      src="../../static/images/de.png"
      alt="germany-flag"
    />
  );
};

const en = () => {
  return (
    <img
      className="h-3.5 w-3.5 mr-2"
      src="../../static/images/en.png"
      alt="england-flag"
    />
  );
};

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [language, setLanguage] = useContext(LanguageContext);
  const navigate = useNavigate();

  strings.setLanguage(language);

  const navigationbars = {
    home: "/",
    about: "/about",
    products: "/products",
    contact: "/contact",
  };

  const path = useLocation().pathname;

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
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
            {/* Theme Selection */}
            <Link className="mr-2 hover:text-yellow-270">
              <img
                src="../../static/images/moon.png"
                alt="dark mode"
                className="w-5"
                id="dark-mode"
                onClick={() => setTheme("dark")}
              />
              <img
                src="../../static/images/sun.png"
                alt="light mode"
                className="w-5 hidden"
                id="light-mode"
                onClick={() => setTheme("light")}
              />
            </Link>
            {/* Language Dropdown */}
            <Dropdown
              label={
                language === "en" ? (
                  <Dropdown.Item icon={en}>English</Dropdown.Item>
                ) : language === "de" ? (
                  <Dropdown.Item icon={de}>Deutsch</Dropdown.Item>
                ) : (
                  <Dropdown.Item icon={ka}>ქართული</Dropdown.Item>
                )
              }
              inline={true}
              arrowIcon={false}
            >
              <Dropdown.Item icon={en} onClick={() => setLanguage("en")}>
                English
              </Dropdown.Item>
              <Dropdown.Item icon={de} onClick={() => setLanguage("de")}>
                Deutsch
              </Dropdown.Item>
              <Dropdown.Item icon={ka} onClick={() => setLanguage("ka")}>
                ქართული
              </Dropdown.Item>
            </Dropdown>

            {/* hamburger menu */}
            <button
              data-collapse-toggle="hamburger-menu"
              onClick={(event) =>
                document
                  .getElementById("hamburger-menu")
                  .classList.toggle("hidden")
              }
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-language-select"
              aria-expanded="true"
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
          <div className="w-full md:block md:w-auto hidden" id="hamburger-menu">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-xl lg:text-2xl md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {Object.keys(navigationbars).map((key) => (
                <li key={key}>
                  <a
                    onClick={() => navigate(navigationbars[key])}
                    className={
                      // check if the current path is the same as the link href, if it is makes it blue and underlines it
                      navigationbars[key] === path
                        ? "font-semibold block py-2 pl-3 pr-4 text-white bg-yellow-270 cursor-pointer rounded md:bg-transparent md:text-yellow-270 md:p-0 underline md:decoration-2 md:underline-offset-8 underline-offset-4"
                        : "font-semibold block py-2 pl-3 pr-4 text-gray-700 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-270 md:p-0 dark:text-gray-400 dark:hover:text-yellow-270 md:dark:hover:bg-transparent"
                    }
                  >
                    {strings[key]}
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
