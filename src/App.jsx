import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "../Components/Welcome";
import MainPage from "./MainPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
