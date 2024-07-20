import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function PrivateUser() {

function changeDetails(){
    console.log("Trigger");
 let test = prompt("Please enter your updated details:");
 if (window.confirm("Press a button!")) {
    alert("Details has been updated")
  } else {
    alert("Cancel")
  }
}

  return (
    <div>
      <div className="bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center">
          <div className="bg-white w-2/3 m-20 rounded-lg">
            <div className="flex items-center justify-center p-40 flex-col ">
              <div>
                <img
                  src="https://i.pinimg.com/originals/a8/bc/90/a8bc90ea196737604770aaf9c2d56a51.jpg"
                  className="rounded-full w-32 inline-block"
                />
                <span className="ml-5">
                <button className="mr-5 font-semibold bg-green-300 text-gray-500 text-sm px-5 rounded-3xl hover:bg-green-300 rounded-3xl">
                    Edit
                  </button>
                </span>
              </div>

              <h1 className="inline text-gray-800 font-semibold text-xl mt-5">
                FirstName LastName
                <span className="ml-5">
                  <button onclick={changeDetails} className="mr-5 font-semibold bg-green-300 text-gray-500 text-sm px-5 rounded-3xl hover:bg-green-300 rounded-3xl">
                    Edit
                  </button>
                </span>
              </h1>

              
              <h1 className="text-gray-500 text-sm p-6 text-center leading-8 tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.{" "}
                
                <button onclick={changeDetails} className="mr-5 font-semibold bg-green-300 text-gray-500 text-sm px-5 rounded-3xl hover:bg-green-300 rounded-3xl">
                    Edit
                  </button>
                
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
