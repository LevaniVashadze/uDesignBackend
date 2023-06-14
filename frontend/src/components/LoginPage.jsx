import React, { useContext } from "react";
import Nav from "./Nav";
import useTitle from "../hooks/useTitle";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div>
      <Nav />
      <form method="post" onSubmit={loginUser}>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
