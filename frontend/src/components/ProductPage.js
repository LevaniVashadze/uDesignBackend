import React, { useContext, useEffect } from "react";
import Nav from "./Nav";
import LocalizedStrings from "react-localization";
import LanguageContext from "../context/LanguageContext";
import { redirect, useParams } from "react-router-dom";

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

  const addToCart = () => {
    fetch("/api/cart/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: params.id,
        quantity: 1,
      }),
    });
  };

  const buyNow = () => {
    const r = fetch("/api/cart/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: params.id,
        quantity: 1,
      }),
    });
    if (r.status === 200) {
      redirect("/cart/");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <Nav />
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center dark:bg-custom-1 p-8">
        <div>
          <img
            src={data.image}
            alt="Product"
            className="lg:w-1/2 w-10/12 mx-auto md:w-1/2"
          />
        </div>

        <div className="">
          <h1 className="lg:text-6xl text-3xl font-bold dark:text-yellow-250 my-2">
            {data.name}
          </h1>
          <p className="text-xl dark:text-white">{data.description}</p>
          <p className="text-3xl dark:text-white my-5">{data.base_price}$</p>
          <div className="my-2">
            <button
              className="p-3 border-2 border-gray-300 rounded-2xl dark:text-white mr-2 lg:text-xl"
              onClick={addToCart}
            >
              Add to Cart
            </button>
            <button
              className="p-3 border-2 border-yellow-270 dark:border-yellow-250 bg-yellow-250 rounded-2xl text-custom-1 lg:text-xl"
              onClick={buyNow}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
