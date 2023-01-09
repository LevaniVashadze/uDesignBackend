import React from "react";
import Nav from "./Nav";
import useTitle from "../hooks/useTitle";

const ProductsPage = () => {
  useTitle("Products");
  return (
    <div>
      <Nav />
      <h1>Products Page</h1>
    </div>
  );
};

export default ProductsPage;
