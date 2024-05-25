import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

function Sidebar(props) {
  const func = () => {
    console.log(props.menuItems);
  };
  // useEffect(() => {
  //   func();
  // });
  return (
    <div class="col-auto col-md-3 col-xl-2 p-0 bg-dark animate__animated animate__fadeInLeft ">
      <div class="sidebararea d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <h2 class="moduleheading shadow d-flex align-items-center mt-4 mb-md-0 me-md-auto text-white text-decoration-none">
          <img className="headingicon" src={props.headingicon} alt="WB" />
          <p class="fs-5 ml-2 d-none d-sm-inline">{props.title}</p>
        </h2>

        <ul
          class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          {props.menuItems.map((item) => {
            return (
              <>
                <span className="menuinfo d-md-block d-none my-3">
                  {item.title}
                </span>

                <>
                  {item.links.map((link) => {
                    return (
                      <>
                        <li class="nav-item mt-0 ">
                          <Link
                            to={link.href}
                            class="nav-link align-middle px-0"
                          >
                            <i class={`menueicon ${link.pageicon} `}></i>{" "}
                            <span class="menueitem ms-1 d-none d-sm-inline">
                              {link.name}
                            </span>
                          </Link>
                        </li>
                      </>
                    );
                  })}
                </>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
