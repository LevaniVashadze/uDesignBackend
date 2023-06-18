import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import useTitle from "../hooks/useTitle";
import AuthContext from "../context/AuthContext";

const ContactPage = () => {
  let { user } = useContext(AuthContext);

  useTitle("Contact");

  return (
    <div>
      <Nav />
      <h1>Contact Page</h1>
      {user && <p>Hello {user.username}</p>}
    </div>
  );
};

export default ContactPage;
