import React from "react";
import Navbar from "./Navbar";
import useTitle from "../hooks/useTitle";

const ProductsPage = () => {
  useTitle("Products");
  return (
    <div>
      <Navbar />
      <h1>Products Page</h1>
    </div>
  );
};

export default ProductsPage;
