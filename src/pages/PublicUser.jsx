import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function User(props) {
  return (
    <div>
    <div className="bg-gray-50">
      <Navbar/>
      <div className="flex items-center justify-center">
        <div className="bg-white w-2/3 m-20 rounded-lg">
          <div className="flex items-center justify-center p-40 flex-col">
            <img
              src="https://i.pinimg.com/originals/a8/bc/90/a8bc90ea196737604770aaf9c2d56a51.jpg"
              className="rounded-full w-32"
            />
            <h1 className="text-gray-800 font-semibold text-xl mt-5">
              Bae Suzy
            </h1>
            <h1 className="text-gray-500 text-sm p-6 text-center leading-8 tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </h1>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
