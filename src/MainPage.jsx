import React, { useState } from "react";

import TopicContent from "../Components/TopicContent";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/App.css";
import data from "../data/topicContent";
import bg3 from "../data/assests/bg3.mp4";
import Navbar from "../Components/Navbar";
import Header2 from "../Components/Header2";
export default function MainPage() {
  const [selectedTopic, setSelectedTopic] = useState("React Native");
  return (
    <div className="mainPageContainer">
      <video autoPlay loop muted playsInline className="backgroundVideo">
        <source src={bg3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="appContainer">
        <Header2 />
        <Navbar setSelectedTopic={setSelectedTopic} />
        <div className="d-flex flex-row" style={{ flexGrow: 1 }}>
          <div className="contentArea">
            <TopicContent
              selectedTopic={selectedTopic}
              content={data[selectedTopic]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
