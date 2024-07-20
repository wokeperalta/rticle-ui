import React from "react";
import PostTemplateSkin from "./PostTemplateSkin";

export default function PostTemplate() {
  return (
    <div>
      <div className="bg-gray-50">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Check Our Latest Posts
            </h1>
            <div className="flex flex-wrap -m-4">
              <PostTemplateSkin
                category="Food"
                title="Foods you missed to eat!"
                text="I don't know about you, but I can't wait until I can enjoy a juicy burger and fries while dining with friends inside an actual restaurant again. And it looks like I'm not alone."
              />
              <PostTemplateSkin
                category="Technology"
                title="Upcoming latest technologies"
                text="Technology today is evolving at such a rapid pace, enabling faster change and progress, causing an acceleration of the rate of change, until eventually, it will become exponential. "

              />
              <PostTemplateSkin
                category="Travel"
                title="Top 5 places to visit this summer!"
                text="Summer has arrived, so you need to make immediate plans for a perfect summer holiday in India. India spoils visitors with exciting choices for a summer vacation ."

              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
