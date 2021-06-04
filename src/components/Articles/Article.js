import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Stats from "../../common/components/Stats";
import Tags from "../../common/components/Tags";
import PopularArticles from "../PopularArticles/PopularArticles";
import RandomArticle from "../RandomArticle/RandomArticle";
import { getArticle, getArticles } from "../../common/utils/services";
import { Container, Row, Col } from "react-bootstrap";

const Article = (props) => {
  const [articles, setArticlesData] = React.useState([]);
  const [selectedArticle, setSelectedArticle] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const article = props.match.params.articleId;

  useEffect(() => {
    const fetchArticle = async () => {
      setError(error);
      setIsLoading(true);

      try {
        const resp = await getArticle(article);
        setSelectedArticle(resp.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    const fetchAllArticles = async () => {
      setError(error);
      setIsLoading(true);

      try {
        const resp = await getArticles();
        setArticlesData(resp.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchArticle();
    fetchAllArticles();
  }, [article, error]);

  return (
    <>
      {isLoading && (
        <div className="text-center mt-30">
          <Spinner animation="border" variant="primary" />
          <div>Loading...</div>
        </div>
      )}
      {!isLoading && (
        <>
          <div className="article-banner">
            <img src={selectedArticle?.cover_image} alt="" className="" />
          </div>
          <Row className="justify-content-between">
            <Col xs="9">
              <Card.Body className="ml-auto mr-auto w-50 mt-5">
                <div class="text-center">
                  <Tags tagList={selectedArticle?.tags} />
                </div>
                <div className="text-center">
                  <Card.Title>{selectedArticle?.title}</Card.Title>
                </div>
                <div className="align-icons d-flex justify-content-center mb-4 mt-2 border-bottom p-3">
                  <Stats article={selectedArticle} />
                </div>
                <Card.Text>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedArticle?.body_html,
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Col>
            <Col xs="3">
              <PopularArticles articles={articles} />
              <RandomArticle articles={articles} />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Article;
