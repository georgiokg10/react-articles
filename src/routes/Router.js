import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import LifeCycle from "../components/LifeCycle/LifeCycle";
import Travel from "../components/Travel/Travel";
import Fashion from "../components/Fashion/Fashion";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";

const Router = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Redirect from="/" exact to="/home" />
        <Route exact path="/home" component={Home} />
        <Route path="/lifecycle" component={LifeCycle} />
        <Route path="/travel" component={Travel} />
        <Route path="/fashion" component={Fashion} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  </>
);

export default Router;
