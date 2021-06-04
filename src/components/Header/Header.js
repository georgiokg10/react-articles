import React from "react";
import hedgehog from "./../../assets/images/hedgehog.jpg";
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
      {/* <img src={hedgehog} alt="" className="footer-ico"></img> */}
    </div>
  );
};

export default Header;
