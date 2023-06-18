import { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import useFetch from "../hooks/useFetch";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(null);

  useEffect(() => {
    const unregister = useFetch();
    getUser();
    return () => {
      unregister();
    };
  }, []);

  useEffect(() => {
    window.addEventListener("storage", () => {
      updateTokens();
    });
  });

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch(
      import.meta.env.VITE_API_BASE_URL + "/api/token/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }),
      }
    );
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      localStorage.setItem("authTokens", JSON.stringify(data));
      await getUser();
    } else {
      alert("Invalid email or password");
    }
  };

  let logoutUser = () => {
    setUser(null);
    setAuthTokens(null);
    localStorage.removeItem("authTokens");
  };

  let updateTokens = async () => {
    setAuthTokens(
      localStorage.getItem("authTokens")
        ? JSON.parse(localStorage.getItem("authTokens"))
        : null
    );
  };

  let getUser = async () => {
    let response = await fetch(
      import.meta.env.VITE_API_BASE_URL + "/api/user/"
    );
    if (response.status === 200) {
      setUser(await response.json());
    } else {
      setUser(null);
    }
  };

  let contextData = {
    user: user,
    updateTokens: updateTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
