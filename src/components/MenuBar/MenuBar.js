import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SearchBar from "./../SearchBar/SearchBar";

const MenuBar = () => (
  <Navbar>
    <Nav>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/lifecycle">LifeCycle</Nav.Link>
      <Nav.Link href="/travel">Travel</Nav.Link>
      <Nav.Link href="/fashion">Fashion</Nav.Link>
      <Nav.Link href="/gallery">Gallery</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar>
);

export default MenuBar;
