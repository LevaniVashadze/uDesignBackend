import React from "react";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <nav>
        <div className="mr-4 ml-4 inline">
          <Link to="/">Home</Link>
        </div>
        <div className="mr-4 ml-4 inline">
          <Link to="/about">About</Link>
        </div>
        <div className="mr-4 ml-4 inline">
          <Link to="/products">Products</Link>
        </div>
        <div className="mr-4 ml-4 inline">
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
