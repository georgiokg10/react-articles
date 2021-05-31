import React from "react";
import { Card } from "react-bootstrap";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Stats from "../../common/components/Stats";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Tags from "../../common/components/Tags";
import Button from "@material-ui/core/Button";

const Articles = ({ articles }) => {
  const articlesHistory = useHistory();

  const navigateToArticle = (article) => {
    articlesHistory.push(`/article/${article.id}`);
  };

  return (
    <>
      {!articles.length && (
        <div className="text-center mt-30">
          <Spinner animation="border" variant="primary" />
          <div>Loading...</div>
        </div>
      )}
      {
        <>
          {articles &&
            articles.length > 0 &&
            articles.map((article, idx) => {
              return (
                <Card className="center-box" key={idx}>
                  <Card.Body>
                    <Card.Subtitle className="mb-2">
                      <img
                        src={
                          article.cover_image
                            ? article.cover_image
                            : article.social_image
                        }
                        alt=""
                        role="button"
                        onClick={() => navigateToArticle(article)}
                        className="articles-img"
                      />
                    </Card.Subtitle>
                    <Tags tagList={article.tag_list} />
                    <Card.Title>{article.title}</Card.Title>
                    <div className="align-icons d-flex justify-content-center mb-2">
                      <Stats article={article} />
                    </div>
                    <Card.Text>{article.description}</Card.Text>
                    <div className="article-details-nav-btn">
                      <Button
                        className="mt-2 mb-3 defaultBtn p-1 mr-2"
                        variant="contained"
                        onClick={() => navigateToArticle(article)}
                      >
                        READ MORE {">"} 
                      </Button>
                      {/* <KeyboardArrowRightIcon className="mb-1" /> */}
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
        </>
      }
    </>
  );
};

export default Articles;
