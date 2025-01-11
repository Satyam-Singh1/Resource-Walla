import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Welcome from "../Components/Welcome.jsx";
import MainPage from "./MainPage.jsx";
import ContactUs from "../Components/Screens/ContactUs.jsx";
import About from "../Components/Screens/About.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>   
   {/* <ContactUs/> */}
    {/* <MainPage></MainPage> */}
    {/* <Welcome /> */}
<App/>
    {/* <About/> */}
  
   
  </React.StrictMode>
);
