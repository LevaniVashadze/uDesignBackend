import React from "react";
import Navbar from "./Navbar";
import useTitle from "../hooks/useTitle";

const AboutPage = () => {
  useTitle("About us");
  return (
    <div>
      <Navbar />
      <h1>About Page</h1>
    </div>
  );
};

export default AboutPage;
