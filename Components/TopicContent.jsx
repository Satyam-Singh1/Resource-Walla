// TopicContent.jsx
import React from "react";
import "./App.css";
const TopicContent = ({ selectedTopic, content }) => {
  return (
    <div className="topicContent">
      <h1>{selectedTopic}</h1>
      <p>{content}</p>
    </div>
  );
};

export default TopicContent;
