import { API } from "../../api/index";
import axios from "axios";

export const getArticles = () => {
  return axios.get(`${API}/articles`);
};

export const getArticle = (articleId) => {
  return axios.get(`${API}/articles/${articleId}`);
};
