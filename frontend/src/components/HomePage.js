import React, { useContext } from "react";
import Navbar from "./Navbar";
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
      <Navbar />
      <div className="dark:bg-gray-900 dark:text-yellow-250 bg-yellow-250 columns-2xl py-10">
        <div className="lg:mx-32 ml-5 mt-5 mb-5">
          <h1
            className="lg:text-8xl text-4xl mb-2 font-bold"
            style={{ fontFamily: "Oleo Script" }}
          >
            {strings.main}
            <br />
          </h1>
          <p className="lg:text-3xl lg:mt-3">{strings.yourOwn}</p>
        </div>
        <img
          className="w-60 bg-transparent ml-auto lg:mr-48 mr-5 mt-5"
          src="../../static/images/temp.png"
          alt="tshirt with your design"
        />
      </div>
    </div>
  );
};

export default HomePage;
