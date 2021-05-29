import React, { useState, useEffect, useContext } from "react";
import { Typography } from "@material-ui/core";
import Stats from "../../common/Stats";

const RandomArticle = ({ articles }) => {
  const idx = !!articles && Math.floor(Math.random() * articles.length);

  const randomPost = articles[idx];

  return (
    <div className="right-box popular-posts-box">
      <Typography color="primary" variant="h6" className="border-bottom mb-4">
        RANDOM POST
      </Typography>
      {randomPost && (
        <div className="row mb-4" role="button">
          <div className="col-3">
            <img
              src={
                randomPost.cover_image
                  ? randomPost.cover_image
                  : randomPost.social_image
              }
              alt=""
              className="popular-post-img"
            />
          </div>
          <div className="col-8 ml-3">
            <div className="mb-3">{randomPost.title}</div>
            <div className="align-icons">
              <Stats article={randomPost} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomArticle;
