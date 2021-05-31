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

const Home = () => {
  const [articles, setArticlesData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const location = useLocation();
  const articlesHistory = useHistory();

  const navigateToArticle = (article) => {
    articlesHistory.push(`/article/${article.id}`);
  };

  const fetchAllArticles = async () => {
    setError(null);
    setIsLoading(true);

    try {
      const resp = await getArticles();
      const filteredArticles = setFilteredArticles(resp?.data);
      setArticlesData(filteredArticles);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const bannerArticles = !!articles && articles.slice(0, 3);

  const combinedArticles =
    !!articles &&
    articles.filter((article) => !bannerArticles.includes(article));

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

  useEffect(() => {
    fetchAllArticles();
  }, [location.pathname]);

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
        <div className="justify-content-between">
          <div className="col-12 d-flex">
            {bannerArticles.length > 0 &&
              bannerArticles.map((bannerArticle) => {
                return (
                  <div
                    className="row"
                    key={bannerArticle.id}
                    role="button"
                    onClick={() => navigateToArticle(bannerArticle)}
                  >
                    <div className="card-box">
                      <img
                        src={
                          bannerArticle.cover_image
                            ? bannerArticle.cover_image
                            : bannerArticle.social_image
                        }
                        alt=""
                        className=""
                      />
                      <div className="banner-title">{bannerArticle.title}</div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="row pr-4">
            <div className="col-9">
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
