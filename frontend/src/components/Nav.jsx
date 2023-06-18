import React, { useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LocalizedStrings from "react-localization";
import { Dropdown, Button, Navbar, Avatar } from "flowbite-react";
import AuthContext from "../context/AuthContext";

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
      src="../../assets/images/ge.png"
      alt="georgia-flag"
    />
  );
};

const de = () => {
  return (
    <img
      className="h-3.5 w-3.5 mr-2"
      src="../../assets/images/de.png"
      alt="germany-flag"
    />
  );
};

const en = () => {
  return (
    <img
      className="h-3.5 w-3.5 mr-2"
      src="../../assets/images/en.png"
      alt="england-flag"
    />
  );
};

const Nav = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [language, setLanguage] = useContext(LanguageContext);
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  strings.setLanguage(language);

  useEffect(() => {
    if (theme === "dark") {
      document.getElementById("dark-mode").classList.add("hidden");
      document.getElementById("light-mode").classList.remove("hidden");
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.getElementById("dark-mode").classList.remove("hidden");
      document.getElementById("light-mode").classList.add("hidden");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const navigationbars = {
    home: "/",
    about: "/about",
    products: "/products",
    contact: "/contact",
  };

  const path = useLocation().pathname;

  return (
    <div>
      <Navbar
        fluid
        className="dark:!bg-gray-900 lg:!py-1 2xl:!py-2.5 !border-0"
      >
        <Navbar.Brand href="/" className="mx-auto">
          <span
            className="self-center text-2xl whitespace-nowrap dark:text-white font-bold"
            style={{ fontFamily: "Bodoni Moda" }}
          >
            uDesign
          </span>
        </Navbar.Brand>
        <div className="flex items-center md:order-2 mx-auto">
          <Link className="mr-2 hover:text-yellow-270">
            <img
              src="../../assets/images/moon.png"
              alt="dark mode"
              className="w-5"
              id="dark-mode"
              onClick={() => setTheme("dark")}
            />
            <img
              src="../../assets/images/sun.png"
              alt="light mode"
              className="w-5 hidden"
              id="light-mode"
              onClick={() => setTheme("light")}
            />
          </Link>
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
          <div className="flex self-end ml-8">
            <Dropdown
              arrowIcon={false}
              className=""
              inline
              label={
                <Avatar
                  alt="User settings"
                  className="border-2 border-black rounded-full"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">
                  {user?.first_name} {user?.last_name}
                </span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logoutUser}>Log out</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <Navbar.Toggle className="self-end mr-4 focus:!ring-0" />
        <Navbar.Collapse>
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-xl lg:text-2xl md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {Object.keys(navigationbars).map((key) => (
              <li key={key}>
                <Link
                  to={navigationbars[key]}
                  className={
                    // check if the current path is the same as the link href, if it is makes it blue and underlines it
                    navigationbars[key] === path
                      ? "font-semibold block py-2 pl-3 pr-4 text-white bg-yellow-270 cursor-pointer rounded md:bg-transparent md:text-yellow-270 md:p-0 underline md:decoration-2 md:underline-offset-8 underline-offset-4"
                      : "font-semibold block py-2 pl-3 pr-4 text-gray-700 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-270 md:p-0 dark:text-gray-400 dark:hover:text-yellow-270 md:dark:hover:bg-transparent"
                  }
                >
                  {strings[key]}
                </Link>
              </li>
            ))}
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
