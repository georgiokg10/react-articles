import React, { useState, useEffect, useContext } from "react";
import Articles from "../Articles/Articles";
import PopularArticles from "../PopularArticles/PopularArticles";
import RandomArticle from "../RandomArticle/RandomArticle";
import axios from "axios";
import { endpoints } from "../../endpoints/endpoints";
import { Spinner } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const [articles, setArticlesData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchArticles = async () => {
    axios
      .get(endpoints.getArticles)
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
    fetchArticles();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loader">
          <Spinner animation="border" variant="primary" />
          <div>Loading...</div>
        </div>
      )}
      <>
        {!isLoading && (
          <Row>
            <div className="col-8">
              <Articles articles={articles} />
            </div>
            <div className="col-4">
              <PopularArticles articles={articles} />
              <RandomArticle articles={articles} />
            </div>
          </Row>
        )}
      </>
    </>
  );
};

export default Home;
