import React from "react";
import MenuBar from "./../MenuBar/MenuBar";
import SearchBar from "./../SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="header">
      <div className="row headerColour">
        <div className="nav-bar-menu">
          <MenuBar />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
