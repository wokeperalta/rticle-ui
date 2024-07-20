import React from "react";
import Tags from "./Tags";
import FormButton from "../FormButton";

export default function WriteDetails(props) {
  return (
    <div className="mb-10">
      <form action="" method="post">
        <div className="p-4">
          <div className="pb-3">
            <label for="title">Title of your Article:</label>
          </div>
          <input
            name="title"
            type="text"
            value={props.title}
            onChange={(e) => {
              props.setTitle(e.target.value);
            }}
            className="block p-2 w-full border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
            placeholder="Enter your Title name here   @Example: How to win a lottery"
            required
          />
        </div>

        <div className="p-4">
          <div className="pb-3">
            <label for="description">Description:</label>
          </div>
          <input
            name="description"
            type="text"
            value={props.description}
            onChange={(e) => {
              props.setDescription(e.target.value);
            }}
            className="block p-2 w-full border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
            required
            placeholder="Enter the description/short-explanation of your article  @Example: How to win a lottery"
          />
        </div>

        <div>
          <Tags tags={props.tags} setTags={props.setTags} required />
        </div>

        <div className="p-4">
          <div className="pb-3">
            <label for="Category">Category:</label>
          </div>

          <select
            className="block p-2 w-full border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
            name="Category"
            id="cars"
            value={props.category}
            required
            onChange={(e) => {
              props.setCategory(e.target.value);
            }}
          >
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="technology">Technology</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="p-4">
          <div className="pb-3">
            <label>Article Cover Photo:</label>
          </div>
          <input
            onChange={(event) => {
              props.setCoverPicUrl(event.target.files[0]);
            }}
            type="file"
            accept="image/*"
            required
          ></input>
        </div>
      </form>
    </div>
  );
}
