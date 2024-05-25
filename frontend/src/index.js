import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Websitemasterpage from "./Modules/Website/websitemaster/websitemasterpage";
import Homepage from "./Modules/Website/Home/homepage";
import Classdineinorder from "./Modules/Website/onlineorderpage/dineinorder/classdineinorder";
import Footer from "./Modules/Website/websitemaster/footer";
import About from "./Modules/Website/About/about";
import Contact from "./Modules/Website/Contact/contact";
import Promotions from "./Modules/Website/promotions/promotions";
import Websidebuilder from "./Modules/Websitebuilder/websidebuilder";
import App from "./App";
import { BrowserRouter, Swtich, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </div>,
  document.getElementById("root")
);

reportWebVitals();
