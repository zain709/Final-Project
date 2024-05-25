import React from "react";
import Websitemasterpage from "./websitemasterpage";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import About from "../About/about";
import Contact from "../Contact/contact";

function Websitefrontend() {
  return (
    <div>
      <Websitemasterpage />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Websitefrontend;
