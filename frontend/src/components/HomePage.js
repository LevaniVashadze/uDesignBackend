import React from "react";
import Navbar from "./Navbar";
import useTitle from "../hooks/useTitle";

const HomePage = () => {
  useTitle("Home");
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
