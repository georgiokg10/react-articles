import React from "react";
import Logo from "./../Logo/Logo";
import MenuBar from "./../MenuBar/MenuBar";
import SearchBar from "./../SearchBar/SearchBar";

const Header = () => {

  return (
    <div className="row headerColour h-67">
      <div className="nav-bar-menu">
        <Logo />
        <MenuBar />
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
