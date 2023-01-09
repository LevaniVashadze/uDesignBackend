import React from "react";
import Nav from "./Nav";
import useTitle from "../hooks/useTitle";

const AboutPage = () => {
  useTitle("About us");
  return (
    <div>
      <Nav />
      <h1>About Page</h1>
    </div>
  );
};

export default AboutPage;
