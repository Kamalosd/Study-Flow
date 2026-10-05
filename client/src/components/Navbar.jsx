import React from "react";
import { FaBookReader } from "react-icons/fa";

import {
  Link,
  useNavigate
} from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  const userAuth = localStorage.getItem("userAuth");

  const authUser = userAuth
    ? JSON.parse(userAuth)
    : null;


  const handleLogout = () => {

    localStorage.removeItem("userAuth");

    navigate("/signin");

  };


  return (
    <div className="bg-gray-300">

      <nav className="flex justify-between items-center py-4 container mx-auto">

        {/* Logo */}

        <Link to="/">
          <FaBookReader
            size={30}
            className="cursor-pointer"
          />
        </Link>


        {/* Menu */}

        <ul className="flex gap-6">

          <li>
            <Link to="/features">
              Feature
            </Link>
          </li>

          <li>
            <Link to="/howitworks">
              How it works
            </Link>
          </li>

          <li>
            <Link to="/pricing">
              Pricing
            </Link>
          </li>

          <li>
            <Link to="/faq">
              FAQ
            </Link>
          </li>

        </ul>


        {/* Auth */}

        <div className="flex items-center gap-2">

          {authUser?.isLogin ? (

            <>
              {/* Dashboard Button */}

              <Link
                to="/dashboard"
                className="py-2 px-4 bg-blue-400 hover:bg-blue-500 rounded-md"
              >
                Dashboard
              </Link>


              {/* Logout */}

              <button
                onClick={handleLogout}
                className="py-2 px-4 bg-red-400 hover:bg-red-500 rounded-md"
              >
                Logout
              </button>
            </>

          ) : (

            <>
              <Link
                to="/signin"
                className="py-2 px-4 border border-green-700 rounded-md"
              >
                Signin
              </Link>

              <Link
                to="/signup"
                className="py-2 px-4 bg-green-400 rounded-md"
              >
                Get started
              </Link>
            </>

          )}

        </div>

      </nav>

    </div>
  );
};


export default Navbar;