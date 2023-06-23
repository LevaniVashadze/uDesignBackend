import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  let { user, logoutUser } = useContext(AuthContext);
  let key = Math.random().toString(36).substring(7);
  return (
    <>
      <button
        type="button"
        className="flex text-sm rounded-full mr-0 text-light-gray"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle={"user-dropdown-" + key}
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        <img
          src="../../assets/images/user.png"
          alt="Account"
          className="w-9 rounded-full"
        />
      </button>
      {user ? (
        <div
          className="z-50 hidden my-4 text-nav-bg dark:text-light-gray list-none bg-light-gray dark:bg-nav-bg divide-y divide-nav-bg dark:divide-light-gray rounded-lg shadow"
          id={"user-dropdown-" + key}
        >
          <div className="px-4 py-3">
            <span className="block text-sm">
              {user?.first_name} {user?.last_name}
            </span>
            <span className="block text-sm truncate">{user?.email}</span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="#" className="block px-4 py-2 text-sm">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm">
                Earnings
              </a>
            </li>
            <li>
              <Link onClick={logoutUser} className="block px-4 py-2 text-sm">
                Log out
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div
          className="z-50 hidden my-4 text-nav-bg dark:text-light-gray list-none bg-light-gray dark:bg-nav-bg divide-y divide-nav-bg dark:divide-light-gray rounded-lg shadow"
          id={"user-dropdown-" + key}
        >
          <div className="px-4 py-3">
            <span className="block text-sm">Not logged in</span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <Link to="/login" className="block px-4 py-2 text-sm">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="block px-4 py-2 text-sm">
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default UserDropdown;
