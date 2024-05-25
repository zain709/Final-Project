import React from "react";
import "./Dashboardlayoutstyle.scss";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function Dashboardlayout() {
  let logout = () => {
    Cookies.set("login", "false");
    Cookies.set("username", "");
    Cookies.set("password", "");
    window.location.replace("/login");
  };

  return (
    <div>
      <div className="Upperheader animate__animated animate__slideInDown shadow d-flex d-flex justify-content-between px-4 py-3 ">
        <button
          type="button"
          class="btn btn-outline-primary btn-sm"
          id="blankbuttonstyle3"
        >
          {" "}
          <Link className="linka" to="/dashboard">
            Return to Dashboard
          </Link>{" "}
        </button>
        <p className="pt-1 m-0">Zadar-ERP</p>
        <button
          type="button"
          onClick={logout}
          class="btn btn-outline-primary btn-sm"
          id="buttonstyle1"
        >
          Sign out
        </button>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboardlayout;
