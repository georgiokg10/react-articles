import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Stats from "../../common/components/Stats";
import Tags from "../../common/components/Tags";
import ReactHtmlParser from "react-html-parser";
import PopularArticles from "../PopularArticles/PopularArticles";
import RandomArticle from "../RandomArticle/RandomArticle";
import { getArticle, getArticles } from "../../common/utils/services";

const Article = (props) => {
  const [articles, setArticlesData] = React.useState([]);
  const [selectedArticle, setSelectedArticle] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const article = props.match.params.articleId;

  const fetchArticle = async () => {
    await getArticle(article)
      .then((response) => {
        setSelectedArticle(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(true);
      });
  };

  const fetchAllArticles = async () => {
    await getArticles()
      .then((response) => {
        setArticlesData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(true);
      });
  };

  useEffect(() => {
    if (article) fetchArticle();
  }, [article]);

  useEffect(() => {
    if (article) fetchAllArticles();
  }, [article]);

  return (
    <>
      <>
        {!selectedArticle && (
          <div className="text-center mt-30">
            <Spinner animation="border" variant="primary" />
            <div>Loading...</div>
          </div>
        )}
        {selectedArticle && (
          <>
            <div className="article-banner">
              <img src={selectedArticle.cover_image} alt="" className="" />
            </div>
            <div className="justify-content-between row">
              <div className="col-9">
                <div className="ml-auto mr-auto w-50 mt-5">
                  <Card.Body>
                    {/* <Card.Subtitle className="mb-2 card-box">
                      <img
                        src={
                          selectedArticle.cover_image
                            ? selectedArticle.cover_image
                            : selectedArticle.social_image
                        }
                        alt=""
                      />
                    </Card.Subtitle> */}
                    <div class="text-center">
                      <Tags tagList={selectedArticle?.tags} />
                    </div>
                    <div className="text-center">
                      <Card.Title>{selectedArticle.title}</Card.Title>
                    </div>
                    <div className="align-icons d-flex justify-content-center mb-4 mt-2 border-bottom p-3">
                      <Stats article={selectedArticle} />
                    </div>
                    <Card.Text>
                      {ReactHtmlParser(selectedArticle.body_html)}
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
              <div className="col-3">
                <PopularArticles articles={articles} />
                <RandomArticle articles={articles} />
              </div>
            </div>
          </>
        )}
      </>
    </>
  );
};

export default Article;
