// TopicContent.jsx
import React from "react";
import "./App.css";
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
        <p>{content.description}</p>
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
          <li>
            <a href={content.documentationLink} target="_blank">
              Official Documentation
            </a>
          </li>
          <li>
            <a href={content.roadmapLink} target="_blank">
              Roadmap
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopicContent;
