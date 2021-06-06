import React from "react";
import { Typography } from "@material-ui/core";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Tags from "../../common/components/Tags";
import { Row, Col } from "react-bootstrap";

const RandomArticle = ({ articles, props }) => {
  const idx = !!articles && Math.floor(Math.random() * articles.length);

  const randomPost = articles[idx];
  const articlesHistory = useHistory();

  const navigateToArticle = () => {
    articlesHistory.push(`/article/${randomPost.id}`);
  };

  return (
    <>
      <Typography
        color="primary"
        variant="h6"
        className="border-bottom mb-4 mt-3"
      >
        RANDOM POST
      </Typography>

      {!randomPost && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <div>Loading...</div>
        </div>
      )}

      {randomPost && (
        <Row className="row mb-4">
          <Col className="col-1">
            <img
              src={
                randomPost.cover_image
                  ? randomPost.cover_image
                  : randomPost.social_image
              }
              alt=""
              className="random-post-img"
              role="button"
              onClick={() => navigateToArticle()}
            />
          </Col>
          {randomPost?.tag_list.length > 0 && (
            <div className="text-center">
              <Tags tagList={randomPost.tag_list} />
            </div>
          )}
          <div className="font-weight-bold ml-3 mt-3 w-100">
            <span role="button" onClick={() => navigateToArticle()}>
              {randomPost.title}
            </span>
          </div>
        </Row>
      )}
    </>
  );
};

export default RandomArticle;
