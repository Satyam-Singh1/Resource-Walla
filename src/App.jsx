// App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import TopicContent from "../Components/TopicContent";
import "../Components/App.css";
import data from "../data/topicContent";

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
            content={data[selectedTopic]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
