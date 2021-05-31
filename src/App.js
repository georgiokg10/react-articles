import React from "react";
import "./styles.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./routes/Router";

const App = () => (
  <React.StrictMode>
    <div className="col-12">
      <Header />
    </div>
    <div className="col min-content-height pr-0 pl-0">
      <Router />
    </div>
    <Footer />
  </React.StrictMode>
);

export default App;
