import React, { useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LocalizedStrings from "react-localization";
import { Dropdown, Button, Navbar, Avatar } from "flowbite-react";
import AuthContext from "../context/AuthContext";
import { initFlowbite } from "flowbite";
import UserDropdown from "./UserDropdown";
import LanguageDropdown from "./LanguageDropdown";

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

const Nav = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [language, setLanguage] = useContext(LanguageContext);
  const navigate = useNavigate();

  strings.setLanguage(language);

  useEffect(() => {
    // hide the wrong toggles and show the right ones and add the theme class to the root element
    if (theme === "dark") {
      let dark_mode_toggles = document.getElementsByClassName("dark-mode");
      for (let i = 0; i < dark_mode_toggles.length; i++) {
        dark_mode_toggles[i].classList.add("hidden");
      }
      let light_mode_toggles = document.getElementsByClassName("light-mode");
      for (let i = 0; i < light_mode_toggles.length; i++) {
        light_mode_toggles[i].classList.remove("hidden");
      }
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      let dark_mode_toggles = document.getElementsByClassName("dark-mode");
      for (let i = 0; i < dark_mode_toggles.length; i++) {
        dark_mode_toggles[i].classList.remove("hidden");
      }
      let light_mode_toggles = document.getElementsByClassName("light-mode");
      for (let i = 0; i < light_mode_toggles.length; i++) {
        light_mode_toggles[i].classList.add("hidden");
      }
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    // refresh the flowbite components
    window.initFlowbite();
  }, []);

  const navigationbars = {
    home: "/",
    about: "/about",
    products: "/products",
    contact: "/contact",
  };

  const path = useLocation().pathname;

  return (
    <div>
      <nav className="bg-nav-bg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center p-4 md:p-0">
            <span className="font-bold font-montserrat text-2xl whitespace-nowrap text-light-yellow font-bold">
              uDesign
            </span>
          </Link>

          <div className="flex items-center md:order-2">
            {/* Desktop stuff */}
            <div className="hidden md:block">
              <img
                src="../../assets/images/moon.png"
                alt="dark mode"
                className="dark-mode w-9"
                onClick={() => setTheme("dark")}
              />

              <img
                src="../../assets/images/sun.png"
                alt="light mode"
                className="light-mode w-9 hidden"
                onClick={() => setTheme("light")}
              />
            </div>
            <Link className="hidden md:block ml-3">
              <img
                src="../../assets/images/cart.png"
                alt="cart"
                className="w-9"
              />
            </Link>
            <div className="hidden md:block ml-3">
              <UserDropdown />
            </div>
            <div className="hidden md:block ml-3">
              <LanguageDropdown />
            </div>

            {/* Hamburger Button */}
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-light-gray md:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
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
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col !mt-0 md:px-4 md:flex-row md:space-x-8 text-2xl lg:text-2xl">
              {Object.keys(navigationbars).map((key) => (
                <li className="text-center" key={key}>
                  <Link
                    to={navigationbars[key]}
                    className={
                      // check if the current path is the same as the link href, if it is makes it blue and underlines it
                      navigationbars[key] === path
                        ? "font-semibold font-noto-sans block py-1.5 px-4 text-nav-bg bg-light-yellow cursor-pointer md:bg-transparent md:text-light-yellow md:pt-3 md:pb-4 md:border-t-[0.25rem] border-light-yellow"
                        : "font-semibold font-noto-sans block py-1.5 px-4 text-light-gray cursor-pointer md:pt-3 md:pb-4 md:border-t-[0.25rem] border-nav-bg"
                    }
                  >
                    {strings[key]}
                  </Link>
                </li>
              ))}
              <li className="md:hidden flex justify-center py-1.5">
                {/* Mobile Stuff*/}
                <Link className=" hover:text-yellow-270 mx-1.5">
                  <img
                    src="../../assets/images/moon.png"
                    alt="dark mode"
                    className="dark-mode w-9"
                    onClick={() => setTheme("dark")}
                  />
                  <img
                    src="../../assets/images/sun.png"
                    alt="light mode"
                    className="light-mode w-9 hidden"
                    onClick={() => setTheme("light")}
                  />
                </Link>

                <div className="mx-1.5">
                  <UserDropdown />
                </div>

                <Link className="mx-1">
                  <img
                    src="../../assets/images/cart.png"
                    alt="cart"
                    className="w-9"
                  />
                </Link>
              </li>
              <li className="md:hidden flex justify-center py-1.5 ml-4">
                <LanguageDropdown className="basis-1/1" />
              </li>
              <li className="md:hidden">
                <hr className="border-solid border-2 border-light-yellow" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
