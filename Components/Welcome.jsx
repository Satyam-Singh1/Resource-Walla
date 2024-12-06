import React from "react";
import "./Welcome.css";
import "./Header.css";
import video4 from "../data/assests/video4.mp4";
import { useNavigate } from "react-router-dom";
export default function Welcome() {
  const navigate = useNavigate();
  function handleExploreClick() {
    navigate("./MainPage");
  }
  return (
    <>
      <video autoPlay loop muted playsInline className="Video">
        <source src={video4} type="video/mp4" />
      </video>
      <div className="WelcomeContainer">
        <h1>Welcome To Resource Wallah</h1>
      </div>
      <div className="IntroContainer">
        <p>
          Your one-stop platform for curated resources in tech and development.
          Whether you're exploring web frameworks, diving into mobile app
          development, or building the next big thing, we've got you covered
          with: Comprehensive Guides: Detailed documentation and tutorials.
          Official Links: Direct access to trusted sources. Roadmaps: Clear
          paths to mastering technologies. Quick Navigation: Easy-to-browse
          categories for seamless learning. Start exploring and supercharge
          your skills today!
        </p>
        <button class="button-85" role="button" onClick={handleExploreClick}>
          Explore..
        </button>
      </div>
    </>
  );
}
