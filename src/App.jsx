// App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import TopicContent from "../Components/TopicContent"; // Import the new component
import "../Components/App.css";

const topicContent = {
  "React Native": "Information about React Native.",
  "React JS": "Information about React JS.",
  "Express JS": "Information about Express JS.",
  "Node JS": "Information about Node JS.",
  Kotlin: "Information about Kotlin.",
  Flutter: "Information about Flutter.",
};

function App() {
  const [selectedTopic, setSelectedTopic] = useState("React Native");

  return (
    <div className="appContainer">
      <Header /> {/* Include the Header component */}
      <div className="d-flex flex-row" style={{ flexGrow: 1 }}>
        <Sidebar setSelectedTopic={setSelectedTopic} />
        <div className="contentArea p-4">
          <TopicContent
            selectedTopic={selectedTopic}
            content={topicContent[selectedTopic]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
