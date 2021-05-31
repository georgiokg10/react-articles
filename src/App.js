import React from "react";
import "./styles.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Row, Col } from "react-bootstrap";
import Router from "./routes/Router";

const App = () => (
  <>
    <Col xs="12">
      <Header />
    </Col>
    <Col xs="row min-content-height pr-0 pl-0">
      <Router />
    </Col>
    <Footer />
  </>
);

export default App;
