import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import Cookies from "js-cookie";
import { useJwt } from "react-jwt";
import logo from "../../src/images/logo.svg";

export default function Navbar() {
  const [authToken, setAuthToken] = useState();
  const [name, setName] = useState();
  const { decodedToken, isExpired } = useJwt(authToken);
  useEffect(() => {
    if (!_.isEmpty(Cookies.get("token"))) {
      setAuthToken(Cookies.get("token"));
    }
  }, []);

  useEffect(() => {
    if (!_.isEmpty(decodedToken)) {
      setName(decodedToken.name);
      document.getElementById("profileImg").src = decodedToken.imageUrl;
    }
  }, [decodedToken]);
  return (
    <nav className="bg-gray-50">
      <Link to="/">
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link
                to="/"
                className="mr-5 hover:bg-green-300 p-2 rounded-3xl hover:bg-green-300 p-2 rounded-3xl"
              >
                Home
              </Link>
              <Link
                to="/latest"
                className="mr-5 hover:bg-green-300 p-2 rounded-3xl "
              >
                Latest
              </Link>
              <Link
                to="/trending"
                className="mr-5 hover:bg-green-300 p-2 rounded-3xl"
              >
                Trending
              </Link>
              <Link
                to="/about"
                className="mr-5 hover:bg-green-300 p-2 rounded-3xl"
              >
                Our Story
              </Link>
              <Link to="/write" className="hover:bg-green-300 p-2 rounded-3xl">
                Write for Us
              </Link>
            </nav>
            <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                <img src={logo} alt="" className="w-20 lg:ml-28"/>
            </a>

            {!authToken && (
              <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                <Link to="/signup">
                  <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-300 rounded-3xl text-base mt-4 md:mt-0">
                    Sign Up / Login
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            )}
            {authToken && (
              <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                <label>{name}</label>
                <img
                  id="profileImg"
                  style={{
                    margin: "-10px 0px 0px 10px ",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                  alt="image"
                />
              </div>
            )}
          </div>
        </header>
      </Link>
    </nav>
  );
}
