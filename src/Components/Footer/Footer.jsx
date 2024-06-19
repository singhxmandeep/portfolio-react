import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe enim
            unde, consequuntur facilis cum adipisci magni beatae laudantium
            voluptatibus maxime provident.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
    </div>
  );
};

export default Footer;
