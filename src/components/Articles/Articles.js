import React, { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import DateRangetIcon from "@material-ui/icons/DateRange";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const Articles = ({articles}) => {
  return (
    articles &&
    articles.length > 0 &&
    articles.map((article) => {
      return (
        <Card className="articleBox" key={article.id}>
          <Card.Body>
            <Card.Subtitle className="mb-2">
              <img src={article.cover_image} alt="" className="articleImg" />
            </Card.Subtitle>
            <Button className="mt-2 mb-3 defaultBtn" variant="contained">
              Product
            </Button>
            <Card.Title>{article.title}</Card.Title>
            <div className="alignIcons mt-2 mb-2">
              <div className="mr-4" role="button">
                <DateRangetIcon />
                <span className="ml-2">
                  {new Date(article?.published_at).toLocaleDateString()}
                </span>
              </div>
              <div className="mr-4" role="button">
                <QuestionAnswerIcon />
                <span className="ml-2">{article?.comments_count}</span>
              </div>
              <div className="mr-4" role="button">
                <VisibilityIcon />
                <span className="ml-2">{article?.comments_count}</span>
              </div>
              <div className="mr-4" role="button">
                <ThumbUpAltIcon />
                <span className="ml-2">{article?.positive_reactions_count}</span>
              </div>
            </div>
            <Card.Text>{article.description}</Card.Text>
            <div className="articleDetailsNavBtn">
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
