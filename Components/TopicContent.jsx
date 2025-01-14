// TopicContent.jsx
import React from "react";
import "./App.css";
import document from "../src/assets/images.jpeg";
import roadmap from "../data/assests/roadmap.png";
import "./TableContent.css";
import Footer from "./Footer";
const TopicContent = ({ selectedTopic, content }) => {
 
  return (
    <>
      <div className="topicContent">
        <h1 className="Heading">{selectedTopic}</h1>
      </div>

      <div className="description">
        <p className="glowingText">{content.description}</p>
      </div>
      <div className="features">
        <h1 className="subheading">Key features</h1>
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
      </div> <div className="useCase">
        <h1>Use Cases</h1>
        <ul>
          
           { content.useCases.map((usecase, index) => (
              <li key={index}>{usecase}</li>
            ))}
          
        </ul>
      </div>

      <div className="Links">
  <h1>Resources</h1>
  <div className="resourceContainer">
    <div className="logoLink">
      <img src={roadmap} alt="YouTube Logo" className="ytlogo" />
      <a href={content.documentationLink} target="_blank" rel="noopener noreferrer">
        Official Documentation
      </a>
    </div>
    <div className="logoLink">
      <img src={document} alt="roadmap" className="ytlogo" />
      <a href={content.roadmapLink} target="_blank" rel="noopener noreferrer">
        Roadmap
      </a>
    </div>
  </div>
</div>

     
      <div className="Links">
        <h1>Community Resources</h1 >
        <ul>
          {content.communityResources
            ? content.communityResources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    {resource.title} ({resource.type})
                  </a>
                </li>
              ))
            : "No community resources available."}
        </ul>
      </div>
<Footer/>
    </>
  );
};

export default TopicContent;
