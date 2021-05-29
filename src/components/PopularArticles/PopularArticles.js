import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@material-ui/core";
import Stats from "../../common/Stats";

const PopularArticles = ({ articles }) => {
  const filteredPopularArticles =
    !!articles &&
    articles.sort((x, y) => {
      return y.positive_reactions_count - x.positive_reactions_count;
    });
  console.log(filteredPopularArticles);

  return (
    <div className="right-box popular-posts-box">
      <Typography color="primary" variant="h6" className="border-bottom mb-4">
        POPULAR POSTS
      </Typography>
      {articles &&
        articles.length > 0 &&
        articles.map((article) => {
          return (
            <div className="row mb-4" role="button" key={article.id}>
              <div className="col-3">
                <img
                  src={
                    article.cover_image
                      ? article.cover_image
                      : article.social_image
                  }
                  alt=""
                  className="popular-post-img"
                />
              </div>
              <div className="col-8 ml-3">
                <div className="mb-3">{article.title}</div>
                <div className="align-icons">
                  <Stats article={article} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PopularArticles;
