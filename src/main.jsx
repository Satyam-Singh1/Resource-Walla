import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Welcome from "../Components/Welcome.jsx";
import MainPage from "./MainPage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <MainPage></MainPage> */}
    {/* <Welcome /> */}
  </React.StrictMode>
);
