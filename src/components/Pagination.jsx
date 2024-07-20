import React from "react";

export default function Pagination() {
  return (
    <div>
      <div className="flex">
        <a
          href="#"
          className="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600 hover:bg-green-300 p-2 rounded-3xl"
        >
          &lt; Previous
        </a>

        <a
          href="#"
          className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200 hover:bg-green-300 p-2 rounded-3xl"
        >
          Next &gt;
        </a>
      </div>
    </div>
  );
}
