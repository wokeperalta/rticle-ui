import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BlogTemplate from "../components/BlogTemplate";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import { getTrendingArticles } from "../services/article.service";
import _ from "lodash";

export default function Trending() {
  let history = useHistory();
  const [trendingArticles, setTrendingArticles] = useState();
  const [skip, setSkip] = useState(0);

  const handleOnClickNextTable = (event) => {
    setSkip(skip + 3);
  };

  const handleOnClickPreviousTable = (event) => {
    setSkip(skip - 3);
  };
  useEffect(() => {
    async function getTrending() {
      setTrendingArticles(await getTrendingArticles(skip));
      console.log(await getTrendingArticles(skip));
    }
    getTrending();
  }, [skip]);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col text-center w-full my-20">
        <h1 className="text-2xl font-medium title-font mb-4 text-gray-800">
          Our Trending Blogs
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          On this page, you can find the trending blogs which have been posted
          and verified.
        </p>
      </div>
      <div className="container mx-auto flex flex-wrap py-6 ">
        <section className="w-full flex flex-col items-center px-3">
          {_.map(trendingArticles, (trendingArticle) => (
            <BlogTemplate
              category={trendingArticle.category}
              title={trendingArticle.title}
              author={trendingArticle.author}
              date="1st July 2021"
              meta={trendingArticle.description}
              coverPicUrl={trendingArticle.coverPicUrl}
              onClick={() => {
                history.push(`read/${trendingArticle._id}`);
              }}
            />
          ))}
          <Pagination />
        </section>
      </div>
      <Footer />
    </div>
  );
}
