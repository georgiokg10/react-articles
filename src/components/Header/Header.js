import React from "react";
import { Row } from "react-bootstrap";
import Logo from "./../Logo/Logo";
import MenuBar from "./../MenuBar/MenuBar";
import SearchBar from "./../SearchBar/SearchBar";

const Header = () => (
  <Row className="headerColour">
    <div className="nav-bar-menu">
      <Logo />
      <MenuBar />
      <SearchBar />
    </div>
  </Row>
);

export default Header;
