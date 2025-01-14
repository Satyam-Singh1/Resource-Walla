import React from "react";
import "./Header.css";
import logo from "../src/assets/companyLogo.jpg";

export default function Header2() {
  return (
    <div className="headerContainer">
      <div className="company">
        <img className="imageLogo" src={logo} alt="Company Logo" />
        <div className="companyName">Resource Walla</div>
      </div>

      <ul className="itemContainer">
        <li className="items">
          <a href="/MainPage">Home</a>
        </li>
        <li className="items">
          <a href="/About">About Us</a>
        </li>
        <li className="items">
          <a href="/ContactUs">Contact Us</a>
        </li>
        <li className="items"><a href="#">FAQs</a></li>
      </ul>
      <div className="buttonContainer">
        <button className="login">Login</button>
      </div>
    </div>
  );
}
