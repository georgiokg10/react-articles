import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import { Paper } from "@material-ui/core";
import { Col } from "react-bootstrap";
import { getArticles } from "../../common/utils/services";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const [searchResult, setSearchResult] = React.useState("");
  const [articles, setArticlesData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [foundArticles, setFoundArticles] = React.useState([]);
  const [selectedArticle, setSelectedArticle] = React.useState(null);

  const location = useLocation();

  const fetchAllArticles = async () => {
    setError(error);

    try {
      const resp = await getArticles();
      setArticlesData(resp.data);
    } catch (error) {
      setError(error);
    }
  };

  React.useEffect(() => {
    let results = [];
    if (searchResult && articles.length) {
      articles.map((item) => {
        if (item.description.includes(searchResult.toString().trim())) {
          results.push(item);
        }
      });
    }
    setFoundArticles(results);
  }, [searchResult, articles]);


  React.useEffect(() => {
    if (location) {
      setSearchResult("");
    }
  }, [location]);


  React.useEffect(() => {
    if (foundArticles.length > 0) {
      setIsLoading(false);
    } else setIsLoading(true);
  }, [foundArticles]);

  const onSearch = (e) => {
    if (!articles.length) {
      fetchAllArticles();
    }
    setSearchResult(e.target.value);
  };

  const articlesHistory = useHistory();

  const navigateToArticle = (article) => {
    setSelectedArticle(article);
    articlesHistory.push(`/article/${article.id}`);
    setSearchResult("");
  };

  return (
    <div
      className={
        (searchResult && foundArticles.length === 0) || foundArticles.length > 0
          ? "search-result-pos"
          : ""
      }
    >
      <Form.Row>
        <Form.Group as={Col} className="mb-0">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <SearchIcon />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              value={searchResult}
              placeholder="Search here.."
              onChange={onSearch}
              className="search-width"
            />
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <div className={foundArticles.length > 2 ? "search-list" : foundArticles.length === 0 ? "hidden-scroll" : "search-list hidden-scroll"}>
        {searchResult &&
          foundArticles?.length > 0 &&
          foundArticles.map((article, idx) => {
            return (
              <Card key={idx}>
                <Paper
                  className="search-list-item row ml-0"
                  key={idx}
                  onClick={() => navigateToArticle(article)}
                  role="button"
                  style={{
                    backgroundColor:
                      selectedArticle === article ? "#beede5" : "",
                  }}
                >
                  <div className="col-3">
                    <img
                      src={
                        article.cover_image
                          ? article.cover_image
                          : article.social_image
                      }
                      alt=""
                      className="popular-post-img mt-2"
                    />
                  </div>
                  <div className="col-9 ">
                    <div className="mb-3 font-weight-bold mt-2">
                      {article.title}
                    </div>
                  </div>
                </Paper>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
