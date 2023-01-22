import React, { useContext, useEffect } from "react";
import Nav from "./Nav";
import LocalizedStrings from "react-localization";
import LanguageContext from "../context/LanguageContext";
import { useParams } from "react-router-dom";

let strings = new LocalizedStrings({
  en: {},
  de: {},
  ka: {},
});

const ProductPage = () => {
  const [language, _] = useContext(LanguageContext);
  strings.setLanguage(language);
  const [data, setData] = React.useState({});

  const params = useParams();

  useEffect(() => {
    fetch("/api/products/" + params.id + "/")
      .then((r) => r.json())
      .then((d) => {
        setData(d);
      });
  }, [params.id]);

  return (
    <div>
      <Nav />
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center">
        <div>
          <img
            src={data.image}
            alt="Product"
            className="lg:w-1/2 w-10/12 mx-auto"
          />
        </div>

        <div>
          <h1 className="2xl:text-6xl lg:text-4xl font-bold">{data.name}</h1>
          <p className="text-xl">{data.description}</p>
          <p className="text-xl">{data.base_price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
