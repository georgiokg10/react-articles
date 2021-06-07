import React, { useEffect } from "react";
import Articles from "../Articles/Articles";
import PopularArticles from "../PopularArticles/PopularArticles";
import RandomArticle from "../RandomArticle/RandomArticle";
import { getArticles } from "../../common/utils/services";
import { Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import {
  beginners,
  programming_languages,
  news,
} from "../../common/utils/constants";
import { useHistory } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Home = () => {
  const [articles, setArticlesData] = React.useState([]);
  const [bannerArticles, setBannerArticles] = React.useState([]);
  const [combinedArticles, setCombinedArticles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const location = useLocation();
  const articlesHistory = useHistory();

  useEffect(() => {
    const fetchAllArticles = async () => {
      setError(null);
      setIsLoading(true);

      try {
        const resp = await getArticles();
        const filteredArticles = setFilteredArticles(resp?.data);
        setArticlesData(filteredArticles);
        setHomeArticles(filteredArticles);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchAllArticles();
  }, [location.pathname]);

  const navigateToArticle = (article) => {
    articlesHistory.push(`/article/${article.id}`);
  };

  const setHomeArticles = (articles) => {
    const bannerPosts = !!articles && articles.slice(0, 3);
    setBannerArticles(bannerPosts);

    const combinedArticles =
      !!articles &&
      articles.filter((article) => !bannerPosts.includes(article));
    setCombinedArticles(combinedArticles);
  };

  const setFilteredArticles = (resp) => {
    let filteredTaggedArticles = [];
    if (location.pathname === "home" || location.pathname === "") {
      return resp;
    }
    resp.forEach((article) => {
      let foundArticle = {};
      if (location.pathname === "/beginners") {
        article.tag_list.forEach((item) => {
          foundArticle = beginners.find((x) => x === item);
          if (foundArticle) return;
        });
      }
      if (location.pathname === "/programming-languages") {
        article.tag_list.forEach((item) => {
          foundArticle = programming_languages.find((x) => x === item);
          if (foundArticle) return;
        });
      }
      if (location.pathname === "/news") {
        article.tag_list.forEach((item) => {
          foundArticle = news.find((x) => x === item);
          if (foundArticle) return;
        });
      }
      if (foundArticle) filteredTaggedArticles.push(article);
    });
    return filteredTaggedArticles;
  };

  return (
    <>
      {isLoading && (
        <div className="loader">
          <Spinner animation="border" variant="primary" />
          <div>Loading...</div>
        </div>
      )}
      {!isLoading && error && <div className="text-danger">{error}</div>}

      {!isLoading && (
        <div className="justify-content-between mt-90">
          <div className="col-12 d-flex pl-0 pr-0">
            {bannerArticles.length > 0 &&
              bannerArticles.map((bannerArticle) => {
                return (
                  <Row
                    key={bannerArticle.id}
                    role="button"
                    className="ml-0 mr-0 "
                    onClick={() => navigateToArticle(bannerArticle)}
                  >
                    <Card className="ml-1 mr-1 banner-bg ">
                      <img
                        src={
                          bannerArticle.cover_image
                            ? bannerArticle.cover_image
                            : bannerArticle.social_image
                        }
                        alt=""
                        className="w-100"
                      />
                      <div className="banner-title">{bannerArticle.title}</div>
                    </Card>
                  </Row>
                );
              })}
          </div>
          <div className="row pr-4">
            <div className="col-9 mb-5">
              <Articles articles={combinedArticles} />
            </div>
            <div className="col-3">
              <PopularArticles articles={articles} />
              <RandomArticle articles={articles} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
