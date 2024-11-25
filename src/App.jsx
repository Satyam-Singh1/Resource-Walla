// // App.jsx
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
// import Sidebar from "../Components/Sidebar";
// import Header from "../Components/Header";
// import TopicContent from "../Components/TopicContent";
// import "../Components/App.css";
// import data from "../data/topicContent";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// function App() {
//   const [selectedTopic, setSelectedTopic] = useState("React Native");

//   return (
//     <Router>
//       <div className="appContainer">
//         <div className="CompanyName"></div>
//         <Header /> {/* Include the Header component */}
//         <div className="d-flex flex-row" style={{ flexGrow: 1 }}>
//           <Sidebar setSelectedTopic={setSelectedTopic} />
//           <div className="contentArea p-4">
//             <TopicContent
//               selectedTopic={selectedTopic}
//               content={data[selectedTopic]}
//             />
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
// App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import TopicContent from "../Components/TopicContent";
import "../Components/App.css";
import data from "../data/topicContent";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("React Native");

  return (
    <Router>
      <div className="appContainer">
        <div className="appName">Resource Walla</div>{" "}
        {/* App name at top center */}
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
    </Router>
  );
}

export default App;
