import React, { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Stats from "../../common/Stats";

const Articles = ({ articles }) => {
  return (
    articles &&
    articles.length > 0 &&
    articles.map((article) => {
      return (
        <Card className="center-box" key={article.id}>
          <Card.Body>
            <Card.Subtitle className="mb-2">
              <img
                src={
                  article.cover_image
                    ? article.cover_image
                    : article.social_image
                }
                alt=""
                className="articles-img"
              />
            </Card.Subtitle>
            <Button className="mt-2 mb-3 defaultBtn" variant="contained">
              Product
            </Button>
            <Card.Title>{article.title}</Card.Title>
            <div className="align-icons d-flex justify-content-center">
              <Stats article={article} />
            </div>
            <Card.Text>{article.description}</Card.Text>
            <div className="article-details-nav-btn">
              <span>READ MORE</span>
              <KeyboardArrowRightIcon className="mb-1" />
            </div>
          </Card.Body>
        </Card>
      );
    })
  );
};

export default Articles;
