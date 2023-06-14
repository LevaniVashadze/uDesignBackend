import React, { useContext, useEffect } from "react";
import Nav from "./Nav";
import useTitle from "../hooks/useTitle";
import AuthContext from "../context/AuthContext";

const ContactPage = () => {
  let { user } = useContext(AuthContext);
  useTitle("Contact");
  fetch(import.meta.env.VITE_API_BASE_URL + "/api/users/");

  return (
    <div>
      <Nav />
      <h1>Contact Page</h1>
      {user && <p>Hello user</p>}
    </div>
  );
};

export default ContactPage;
