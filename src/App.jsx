import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "../Components/Welcome";
import MainPage from "./MainPage";
import ContactUs from "../Components/Screens/ContactUs";
import About from "../Components/Screens/About";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
       <Route path="/About" element={<About />}/>
      </Routes>
    </Router>
  );
}
