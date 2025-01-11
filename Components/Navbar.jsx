import React from 'react'
import "./TableContent.css";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
export default function Navbar({ setSelectedTopic }) {
  const topics = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React JS" },
    { name: "Express JS" },
    { name: "React Native" },
    { name: "Flutter" },
    { name: "Kotlin" },
    { name: "Node JS" },
  ];
  
  return (
    <div className='navbarContainer'> 
      <ul className="topicContainer">
     <FaArrowCircleLeft className="nav-arrow" />
        
          {topics.map((topic) => (
            <li key={topic.name} className="nav-item">
              <a
                href="#"
                className="topicLinks"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedTopic(topic.name);
                }}
              >
                {topic.name}
              </a>
            </li>
          ))}
           <FaArrowCircleRight  className="nav-arrow"/>
        </ul>
       
    </div>
  )
}
