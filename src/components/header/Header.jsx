import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/websitepic.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Alan Trapenard</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <div className="header__bio">
          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <div className="header__bio-content">
            <h1>
              I'm a San Diego based aspiring Software Engineer working primarily
              with JavaScript/React to design interactive web based
              applications.
            </h1>
          </div>
        </div>
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
