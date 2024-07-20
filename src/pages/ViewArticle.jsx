import React, { useEffect, useState } from "react";
import Single from "./Single";
import { useParams } from "react-router-dom";
import { getArticle } from "../services/article.service";

export default function ViewArticle() {
  let { id } = useParams();
  const [article, setArticle] = useState();
  useEffect(() => {
    async function getArticleById() {
      setArticle(await getArticle(id));
    }
    getArticleById();
  }, []);
  return (
    <div>
      {article && (
        <Single
          title={article.title}
          description={article.description}
          category={article.category}
          coverPic={article.coverPicUrl}
          content={article.content}
          author={article.author}
          date={article.createdAt}
        />
      )}
    </div>
  );
}
