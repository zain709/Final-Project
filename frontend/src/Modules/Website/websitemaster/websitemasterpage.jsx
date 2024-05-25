import React, { Component } from "react";
import axios from "axios";
import "./websitemasterheader.scss";
import "font-awesome/css/font-awesome.min.css";
import "../../../../node_modules/font-awesome/css/font-awesome.min.css";
import backendwebsite from "../../../backendwebsite.json";
export class Websitemasterpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Websitedata: {},
    };
  }

  componentDidMount() {
    axios.get(backendwebsite[0].backendwebsite + `/websitedata`).then((res) => {
      let newdata = res.data;
      this.setState({ Websitedata: newdata[0] });
    });
  }

  render() {
    return (
      <div>
        <nav
          class="navbar navbar-expand-lg fixed-top d-block "
          id="navigationbar"
        >
          <div class="container-fluid">
            <a class="navbar-brand ml-3 text-light" href="/">
              {this.state.Websitedata.websitename}
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li class="nav-item mx-4 ">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item mx-4 ">
                  <a class="nav-link" href="/about">
                    About us
                  </a>
                </li>
                <li class="nav-item mx-4 ">
                  <a class="nav-link" href="/contact">
                    Contact us
                  </a>
                </li>
                <li class="nav-item mx-4 ">
                  <a class="nav-link" href="/promotions">
                    Promotions
                  </a>
                </li>
              </ul>
              <span class="navbar-text" id="socialicons">
                <a href={this.state.Websitedata.facebooklink}>
                  <i class="fa fa-brands  fa-facebook-f mx-2 "></i>
                </a>
                <a href={this.state.Websitedata.instagramlink}>
                  <i class="fa fa-brands  fa-instagram mx-2 "></i>
                </a>
                <a href={this.state.Websitedata.twitterlink}>
                  <i class="fa fa-brands  fa-twitter mx-2 "></i>
                </a>
                <a href={this.state.Websitedata.youtubepagelink}>
                  <i class="fa fa-brands  fa-youtube mx-2"></i>
                </a>
                <button
                  type="button"
                  id="buttonstyle1"
                  class="btn btn-primary mx-3 btn-sm"
                >
                  {" "}
                  <b>
                    {" "}
                    <a className="px-4" id="orderlink" href="/order">
                      Order
                    </a>{" "}
                  </b>{" "}
                </button>
              </span>
            </div>
          </div>
        </nav>
        <div className="content"></div>
      </div>
    );
  }
}

export default Websitemasterpage;
