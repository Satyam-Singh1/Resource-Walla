import React from "react";
import "./Contact2.css";
import Header2 from "../Header2";
import hero2 from "../../src/assets/heroImage2.jpg"
import { useNavigate } from "react-router-dom";
import profileImage from "../../src/assets/heroImage.png";
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
            <img src={hero2} alt="profile" />
          </div>  
          <div className="about-description">
          <h5>Developer<span> & Designer</span></h5>
            <p>
            I am a front-end web and mobile app developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
            I can also make the website more & more interactive with web animations.
            </p>
            <button className="btn" onClick={handleTalk}>Let's Talk</button>
          </div>
        </div>
      </div>
    
    </>
  );
}
