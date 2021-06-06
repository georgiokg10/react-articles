import React from "react";
import { Typography } from "@material-ui/core";
import Stats from "../../common/components/Stats";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const PopularArticles = ({ articles }) => {
  const [foundArticle, setFoundArticle] = React.useState(null);

  const selectedArticle = window.location.pathname.split("/")[2];
  const articlesHistory = useHistory();

  const navigateToArticle = (article) => {
    setFoundArticle(article);
    articlesHistory.push(`/article/${article.id}`);
  };

  const filteredPopularArticles =
    !!articles &&
    articles.sort((x, y) => {
      return y.positive_reactions_count - x.positive_reactions_count;
    });

  const mostPopularArticles =
    !!filteredPopularArticles && filteredPopularArticles.slice(0, 3);

  return (
    <>
      <Typography
        color="primary"
        variant="h6"
        className="border-bottom mb-4 mt-3"
      >
        POPULAR POSTS
      </Typography>
      <div
        className={
          articles && articles?.length > 0
            ? "right-box popular-posts-box"
            : "overflow-hidden"
        }
      >
        {!articles.length && (
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <div>Loading...</div>
          </div>
        )}

        {mostPopularArticles.map((article, id) => {
          return (
            <div
              className="row mb-4"
              key={id}
              style={{
                backgroundColor:
                  foundArticle === article ||
                  (selectedArticle &&
                    selectedArticle.toString() === article.id.toString())
                    ? "#beede5"
                    : "",
              }}
            >
              <div className="col-3 popular-img-center">
                <img
                  src={
                    article.cover_image
                      ? article.cover_image
                      : article.social_image
                  }
                  alt=""
                  role="button"
                  onClick={() => navigateToArticle(article)}
                  className="popular-post-img"
                />
              </div>
              <div className="col-9 ">
                <div
                  className="mb-3 font-weight-bold"
                  role="button"
                  onClick={() => navigateToArticle(article)}
                >
                  {article.title}
                </div>
                <div className="align-icons ">
                  <Stats article={article} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PopularArticles;
