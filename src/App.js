import React from "react";
import "./styles.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Row, Col } from "react-bootstrap";
import Router from "./routes/Router";

const App = () => (
  <Row>
    <Col xs="12">
      <Header />
    </Col>
    <Col xs="12">
      <Router />
    </Col>
    <Col xs="12">
      <Footer />
    </Col>
  </Row>
);

export default App;
