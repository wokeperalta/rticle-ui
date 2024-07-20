import React from "react";

export default function InputTemplate(props) {
  return (
    <div className="mt-5">
      <input
        type={props.type}
        className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        required
      />
      {props.children}
    </div>
  );
}
