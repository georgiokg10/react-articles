import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "./../Logo/Logo";

const MenuBar = () => {
  return (
    <Navbar>
      <Navbar.Brand as={Link} to="/">
        <Logo />
      </Navbar.Brand>
      <Nav className="nav-items">
        <Nav.Link as={NavLink} to="/home" exact>
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/beginners">
          Beginners
        </Nav.Link>
        <Nav.Link as={NavLink} to="/programming-languages">
          Programming Languages
        </Nav.Link>
        <Nav.Link as={NavLink} to="/news">
          News
        </Nav.Link>
        <Nav.Link as={NavLink} to="/gallery">
          Gallery
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MenuBar;
