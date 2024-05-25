import React, { Component } from "react";
import "./footer.scss";
import axios from "axios";
import backendwebsite from "../../../backendwebsite.json";

export class Footer extends Component {
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
        <div className="footer">
          <div className="row px-lg-3 py-4 mx-auto" id="footerupper">
            <div className="col-md-5 offset-md-2 ">
              <h5>{this.state.Websitedata.footerupperheading}</h5>
            </div>
            <div className="col-md-3 mt-md-0 mt-2 ">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm mx-md-4 px-lg-4"
                id="blankbuttonstyle2"
              >
                {" "}
                <i class="fa fa-solid fa-arrow-right  "></i>{" "}
                <a id="footerbuttontext" href="/order">
                  Check our menue
                </a>{" "}
              </button>
            </div>
          </div>

          <div
            className="row mx-auto justify-content-lg-center pt-5  "
            id="footerlower"
          >
            <div
              className="col-md-3 align-self-start  pt-3 border-end-white"
              id="lowerfootersections"
            >
              <div className="midsection">
                <h5>Website</h5>
                <a href="/home" id="footerwesbitenavigation" className="py-2">
                  Home
                </a>
                <a href="/about" id="footerwesbitenavigation" className="py-2">
                  About us
                </a>
                <a
                  href="/contact"
                  id="footerwesbitenavigation"
                  className="py-2"
                >
                  Contact us
                </a>
                <a
                  href="/promotions"
                  id="footerwesbitenavigation"
                  className="py-2"
                >
                  Promotions
                </a>
              </div>
            </div>
            <div
              className="col-md-3 align-self-start  pt-3 "
              id="lowerfootersections"
            >
              <h5>Order</h5>
              <a href="/order" id="footerwesbitenavigation" className="py-2">
                Dine in
              </a>
              <a href="/order" id="footerwesbitenavigation" className="py-2">
                Take away
              </a>
              <a href="/order" id="footerwesbitenavigation" className="py-2">
                Delivery
              </a>
            </div>
            <div
              className="col-md-3  align-self-start pt-3  "
              id="lowerfootersections"
            >
              <h5 className="pr-2 mb-2 text-white ">
                {this.state.Websitedata.websitename}
              </h5>
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
                <i class="fa fa-brands  fa-youtube mx-2 "></i>
              </a>
              <p>
                <i class="fa fa-regular fa-envelope-open pr-2 mx-2 mt-3"></i>
                {this.state.Websitedata.email}
              </p>
              <p>
                <i class="fa fa-solid fa-phone pr-2 mx-2 "></i>{" "}
                {this.state.Websitedata.phonenumber}
              </p>
            </div>

            <hr />
            <div className="endcredit pt-3  text-center">
              <p className="d-inline text-light">All rights reserved by </p>{" "}
              <a href="https://github.com/taha020/ZedarERP">
                {" "}
                <b> Zadar-ERP</b>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
