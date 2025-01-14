import React from "react";
import "./Contact2.css";
import Header2 from "../Header2";

import { useNavigate } from "react-router-dom";
import profileImage from "../../src/assets/heroImage.png";
import Footer from "../Footer";
export default function About() {
  const navigate = useNavigate();
  function handleTalk() {
    
    navigate("/ContactUs");
  }
  return (
    <>
        <div className="mainContainer">
          <Header2 />
        </div>
      <div className="About-container">
       
        <div className="about-heading">
          <h1>About Us</h1>
        </div>
        
        <div className="content-container">
          <div className="image">
            <img src={profileImage} alt="profile" />
          </div>  
          <div className="about-description">
          <h5>Developer<span> & Designer</span></h5>
            <p>
            I am a front-end web and mobile app developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
           .My goal is to enhance the interactivity of 
            websites through dynamic web animations, ensuring an intuitive and captivating experience for users. 
            With a focus on detail and a commitment to delivering high-quality results,
            </p>
            <button className="btn" onClick={handleTalk}>Let's Talk</button>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  );
}
