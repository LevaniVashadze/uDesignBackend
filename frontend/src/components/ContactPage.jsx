import React from "react";
import Nav from "./Nav";
import useTitle from "../hooks/useTitle";

const ContactPage = () => {
  useTitle("Contact");
  return (
    <div>
      <Nav />
      <h1>Contact Page</h1>
    </div>
  );
};

export default ContactPage;
