// TopicContent.jsx
import React from "react";
import "./App.css";
import yt from "../data/assests/ytlogo.jpg";
import roadmap from "../data/assests/roadmap.png";
import "./TableContent.css";
const TopicContent = ({ selectedTopic, content }) => {
  //const src = content.imageURL;
  return (
    <>
      <div className="topicContent">
        <h1 className="Heading">{selectedTopic}</h1>
        <div className="logo">
          <img src="../../data/assets/reactjs.jpg" alt="Logo" />
        </div>
      </div>

      <div className="description">
        <p className="glowingText">{content.description}</p>
      </div>
      <div className="features">
        <h1>Key features</h1>
        <ul>
          {content.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="advantage">
        <h1>Advantages</h1>
        <ul>
          {content.pros.map((adv, index) => (
            <li key={index}>{adv}</li>
          ))}
        </ul>
      </div>
      <div className="Links">
        <ul>
          {" "}
          <h1>Resources</h1>
          <li>
            <img src={yt} alt="YouTube Logo" className="ytlogo" />
            <a href={content.documentationLink} target="_blank">
              Official Documentation
            </a>
          </li>
          <li>
            <img src={roadmap} alt="roadmap" className="ytlogo" />
            <a href={content.roadmapLink} target="_blank">
              Roadmap
            </a>
          </li>
        </ul>
      </div>
      <div className="useCase">
        <h1>UseCases</h1>
        <ul>
          {content.useCase ? (
            content.useCase.map((usecase, index) => (
              <li key={index}>{usecase}</li>
            ))
          ) : (
            <p>No use cases available.</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default TopicContent;
