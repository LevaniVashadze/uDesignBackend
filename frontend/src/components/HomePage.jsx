import React, { useContext } from "react";
import Nav from "./Nav";
import useTitle from "../hooks/useTitle";
import LanguageContext from "../context/LanguageContext";
import LocalizedStrings from "react-localization";

let strings = new LocalizedStrings({
  en: {
    main: "Design your own fashion",
    yourOwn: "Be your own designer",
    print: "High quality print",
    material: "High quality material",
    love: "Made with love",
    startNow: "Start designing now",
  },
  de: {
    main: "Designe deine eigene Mode",
    yourOwn: "Sei dein eigener Designer",
    print: "Hochwertiger Druck",
    material: "Hochwertiges Material",
    love: "Mit Liebe gemacht",
    startNow: "Jetzt mit dem Entwerfen beginnen",
  },
  ka: {
    main: "შექმენი შენი დიზაინი",
    yourOwn: "იყავი შენი დიზაინერი",
    print: "მაღალი ხარისხის ბეჭდვა",
    material: "მაღალი ხარისხის ნაჭერი",
    love: "შექმნილია სიყვარულით",
    startNow: "დაიწყე შენი დიზაინის შექმნა",
  },
});

const HomePage = () => {
  const [language, _] = useContext(LanguageContext);
  strings.setLanguage(language);

  useTitle("Home");
  return (
    <div>
      <Nav />
      <div className="dark:bg-custom-1 dark:text-yellow-250 bg-yellow-250 md:columns-2 columns-3xl py-10 2xl:py-24">
        <div className="lg:mx-32 ml-5 md:my-5 break-before-all">
          <h1
            className="2xl:text-8xl lg:text-6xl text-4xl mb-2 font-bold pr-3"
            style={{ fontFamily: "Oleo Script" }}
          >
            {strings.main}
            <br />
          </h1>
          <p className="2xl:text-3xl lg:text-2xl lg:mt-3 inline">
            {strings.yourOwn}
          </p>
        </div>
        <img
          className="w-60 2xl:w-60 lg:w-40 bg-transparent ml-auto lg:mr-48 mr-5 mt-5"
          src="../../assets/images/temp.png"
          alt="tshirt with your design"
        />
      </div>

      <div className="dark:bg-gray-900 dark:text-white 2xl:py-16 py-6">
        <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2">
          <div className="md:ml-32 mx-auto font-semibold text-xl">
            <ul>
              <li className="my-2">•{strings.material}</li>
              <li className="my-2">•{strings.print}</li>
              <li className="my-2">•{strings.love}</li>
            </ul>
          </div>
          <div className="md:inline self-center">
            <img
              src="https://img.freepik.com/free-photo/fashion-atelier-with-idea-board-desk-with-clothing-line_23-2148846733.jpg?w=2000"
              alt="fashion design"
              className="md:w-2/5 w-2/3 shadow-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
