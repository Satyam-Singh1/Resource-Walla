import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Headers";
import TopicContent from "../Components/TopicContent";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/App.css";
import data from "../data/topicContent";
import videoMain from "../data/assests/mainPageBackground.mp4";
import video3 from "../data/assests/video3.mp4";
export default function MainPage() {
  const [selectedTopic, setSelectedTopic] = useState("React Native");

  console.log(data[selectedTopic]); // Debugging line

  return (
    <div className="mainPageContainer">
      <video autoPlay loop muted playsInline className="backgroundVideo">
        <source src={video3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="appContainer">
        <div className="appName">Resource Walla</div>
        <Header />
        <div className="d-flex flex-row" style={{ flexGrow: 1 }}>
          <Sidebar setSelectedTopic={setSelectedTopic} />
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
