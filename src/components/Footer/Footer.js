import React from 'react';
import hedgehog from "./../../assets/images/hedgehog.jpg";

const Footer = () =>
  <div className="footer">
    <span className="footer-font mt-4 ml-3">Georgios Kontogeorgos (DG11), </span>
    <img src={hedgehog} alt="" className="footer-ico"></img>
  </div>

export default Footer;