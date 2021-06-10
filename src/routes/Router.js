import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Gallery from "../components/Gallery/Gallery";
import Article from "../components/Articles/Article";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./../styles.scss";

const Router = () => {

  return (
    <BrowserRouter>
      <div className="page-container">
        <Header />
        <Switch className="col pr-0 pl-0">
          <Redirect from="/" exact to="/home" />
          <Route exact path="/home" component={Home} />
          <Route path="/beginners" component={Home} />
          <Route path="/programming-languages" component={Home} />
          <Route path="/news" component={Home} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/article/:articleId" component={Article} />
          <Route path="/tagged/:tag" component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )

};

export default Router;
