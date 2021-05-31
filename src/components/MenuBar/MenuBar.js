import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const MenuBar = () => {
  return (
    <Navbar>
      <Nav>
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/beginners">Beginners</Nav.Link>
        <Nav.Link href="/programming-languages">Programming Languages</Nav.Link>
        <Nav.Link href="/news">News</Nav.Link>
        <Nav.Link href="/gallery">Gallery</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MenuBar;
