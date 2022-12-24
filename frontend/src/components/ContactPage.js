import React from "react";
import Navbar from "./Navbar";
import useTitle from "../hooks/useTitle";

const ContactPage = () => {
  useTitle("Contact");
  return (
    <div>
      <Navbar />
      <h1>Contact Page</h1>
    </div>
  );
};

export default ContactPage;
