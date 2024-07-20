import React from "react";
import { Link } from "react-router-dom";

export default function BlogTemplate(props) {
  return (
    <div>
      <article className=" flex flex-col shadow my-4  ">
        <a href="#" className="hover:opacity-75  aspect-w-16 aspect-h-9">
          <img
            className="width-auto"
            src={props.coverPicUrl}
            style={{
              height: "312px",
              width: "1600px",
            }}
          />
        </a>
        <div className=" bg-white flex flex-col justify-start p-6 hover:bg-gray-100">
          <a
            href="#"
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            {props.category}
          </a>
          <div>
            <a
              href="#"
              className="mb-8 text-3xl font-bold tracking-tighter text-left text-black lg:text-3xl title-font uppercase hover:text-blue"
            >
              {props.title}
            </a>
          </div>
          <p href="#" className="text-sm py-3">
            By{" "}
            <Link
              to="/publicprofile"
              className="font-semibold hover:text-blue-800"
            >
              {props.author}
            </Link>
            , Published on {props.date}
          </p>
          <a href="#" className="pb-6">
            {props.meta}
          </a>
          <div className="">
            <a
              href="#"
              className="uppercase text-gray-800 font-bold hover:text-white hover:bg-gray-400 rounded-full p-1"
            >
              <reading onClick={props.onClick}>continue reading &gt;</reading>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
