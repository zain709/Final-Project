import React, { Component } from "react";
import "./contactbody.scss";
import axios from "axios";
import logo from "../../../../images/Userlogo.png";

import { Modal } from "bootstrap";
import backendwebsite from "../../../../backendwebsite.json";

export class Contactbody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      warningalertdisplay: "none",
      warningmessage: "",
      Websitedata: {},
      ordersdone: "",
      totalreviews: "",
      totalitems: "",
    };
  }

  componentDidMount() {
    let a;
    let b;
    let c;
    axios.get(backendwebsite[0].backendwebsite + `/websitedata`).then((res) => {
      let newdata = res.data;
      this.setState({ Websitedata: newdata[0] });
    });

    axios
      .get(backendwebsite[0].backendwebsite + `/sales/totalorders`)
      .then((res) => {
        a = res.data.toString();
        console.log(typeof a + a + " a");
        this.setState({
          ordersdone: +a,
        });
      });

    axios
      .get(backendwebsite[0].backendwebsite + `/feedback/positive`)
      .then((res) => {
        b = res.data;
        b = Object.keys(b).length.toString();
        console.log(typeof b + b + " b");
        this.setState({
          totalreviews: "" + b,
        });
      });
    axios
      .get(backendwebsite[0].backendwebsite + `/totalcustomers`)
      .then((res) => {
        c = res.data.toString();
        console.log(typeof c + c + " c");
        this.setState({
          totalitems: "" + c,
        });
      });
  }
  render() {
    let sendingmessage = () => {
      let name = document.getElementById("nameinput").value;
      let email = document.getElementById("emailinput").value;
      let message = document.getElementById("message").value;
      let messagelength = message.length;

      if (name != "" && email != "" && message != "") {
        if (name.match(/^[a-zA-Z\s]*$/) && email.match(/\S+@\S+\.\S+/)) {
          if (messagelength > 20) {
            axios
              .post(backendwebsite[0].backendwebsite + "/leads", {
                name: name,
                email: email,
                message: message,
              })
              .then(function (response) {
                console.log(response);
                alert("Message sent!");
              })
              .catch(function (error) {
                console.log(error);
                let dataExportModal = new Modal(
                  document.getElementById("exampleModalNotification")
                );
                this.setState({
                  warningalertdisplay: "block",
                  warningmessage: "Message not sent for an unknown reason",
                });
                dataExportModal.show();
              });

            document.getElementById("nameinput").value = "";
            document.getElementById("emailinput").value = "";
            document.getElementById("message").value = "";
          } else {
            let dataExportModal = new Modal(
              document.getElementById("exampleModalNotification")
            );
            this.setState({
              warningalertdisplay: "block",
              warningmessage:
                "Lenght of message should be more than 20 charactors",
            });
            dataExportModal.show();
          }
        } else {
          let dataExportModal = new Modal(
            document.getElementById("exampleModalNotification")
          );
          this.setState({
            warningalertdisplay: "block",
            warningmessage: "Please enter valid email and name",
          });
          dataExportModal.show();
        }
      } else {
        let dataExportModal = new Modal(
          document.getElementById("exampleModalNotification")
        );
        this.setState({
          warningalertdisplay: "block",
          warningmessage: "Please fill all input",
        });
        dataExportModal.show();
      }
    };

    let removealert = () => {
      this.setState({
        warningalertdisplay: "none",
      });
    };

    return (
      <div>
        {/* About Stone fire */}

        <section class="py-sm-7  position-relative shadow" id="contactabout">
          <div class="container">
            <div class="row">
              <div class="col-12 mx-auto">
                <div class="mt-n8 mt-md-n9 text-center">
                  <img
                    class="userlogocontact shadow"
                    src={logo}
                    alt="bruce"
                    loading="lazy"
                  />
                </div>
                <div class="row py-5">
                  <div class="col-lg-7 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mx-auto">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                      <h3 class="mb-0">{this.state.Websitedata.websitename}</h3>
                      <div class="d-block">
                        <a
                          type="button"
                          class="btn btn-sm btn-outline-dark text-nowrap mb-0"
                          href={this.state.Websitedata.facebooklink}
                        >
                          Follow
                        </a>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-auto">
                        <span class="h6">{this.state.ordersdone}</span>
                        <span> Orders Done</span>
                      </div>
                      <div class="col-auto">
                        <span class="h6">{this.state.totalreviews}</span>
                        <span> Reviews</span>
                      </div>
                      <div class="col-auto">
                        <span class="h6">{this.state.totalitems}</span>
                        <span> Customers served</span>
                      </div>
                    </div>
                    <p class="text-lg w-75">
                      {this.state.Websitedata.aboutstonefire}
                      <br />
                      <b>Visit us on social media</b>
                      <div className="icons d-block mt-3"></div>
                      <a href={this.state.Websitedata.facebooklink}>
                        <i
                          class="fa fa-facebook text-lg me-4 text-dark "
                          id=""
                        ></i>
                      </a>
                      <a href={this.state.Websitedata.instagramlink}>
                        <i
                          class="fa fa-instagram text-lgk me-4 text-dark"
                          id=""
                        ></i>
                      </a>
                      <a href={this.state.Websitedata.twitterlink}>
                        <i
                          class="fa fa-twitter text-lg  me-4 text-dark"
                          id=""
                        ></i>
                      </a>
                      <a href={this.state.Websitedata.youtubepagelink}>
                        <i class="fa fa-youtube text-lg  text-dark" id=""></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*   Contact info section   */}

        <section class="py-lg-5 mt-lg-0 mt-5 mx-auto" id="contactform">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="card box-shadow-xl overflow-hidden mb-5">
                  <div class="row">
                    <div
                      class="col-lg-5 position-relative bg-cover text-black px-0"
                      id="contactleftsection"
                      loading="lazy"
                    >
                      <div class="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center">
                        <div class="mask bg-gradient-dark opacity-8"></div>
                        <div class="p-5 ps-sm-8 position-relative text-start my-auto z-index-2">
                          <h3 class="">Contact Information</h3>
                          <p class=" opacity-8 mb-4">
                            Fill up the form and our Team will get back to you
                            within 24 hours.
                          </p>
                          <div class="d-flex p-2 ">
                            <div>
                              <i class="fa fa-phone text-sm"></i>
                            </div>
                            <div class="ps-3">
                              <span class="text-sm opacity-8">
                                {this.state.Websitedata.phonenumber}
                              </span>
                            </div>
                          </div>
                          <div class="d-flex p-2 ">
                            <div>
                              <i class="fa fa-envelope text-sm"></i>
                            </div>
                            <div class="ps-3">
                              <span class="text-sm opacity-8">
                                {this.state.Websitedata.email}
                              </span>
                            </div>
                          </div>
                          <div class="d-flex p-2 ">
                            <div>
                              <i class="fa fa-solid fa-address-book"></i>
                            </div>
                            <div class="ps-3">
                              <span class="text-sm opacity-8">
                                {this.state.Websitedata.address}
                              </span>
                            </div>
                          </div>
                          <div class="mt-4">
                            <a href={this.state.Websitedata.facebooklink}>
                              <i
                                class="fa fa-facebook text-lg text-light me-4"
                                id=""
                              ></i>
                            </a>
                            <a href={this.state.Websitedata.instagramlink}>
                              <i
                                class="fa fa-instagram text-lg text-light me-4"
                                id=""
                              ></i>
                            </a>
                            <a href={this.state.Websitedata.twitterlink}>
                              <i
                                class="fa fa-twitter text-lg text-light me-4"
                                id=""
                              ></i>
                            </a>
                            <a href={this.state.Websitedata.youtubepagelink}>
                              <i
                                class="fa fa-youtube text-lg text-light"
                                id=""
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-7">
                      <div class="p-3" id="contact-form">
                        <div class="card-header px-4 py-sm-5 py-3">
                          <h2>Say Hi!</h2>
                          <p class="lead"> We'd like to talk with you.</p>
                        </div>
                        <div class="card-body pt-4">
                          <div class="row">
                            <div class="col-md-12 pe-2 mb-3">
                              <div class="input-group input-group-static mb-4">
                                <label></label>
                                <input
                                  type="text"
                                  class="form-control text-dark"
                                  id="nameinput"
                                  placeholder="Full Name"
                                />
                              </div>
                            </div>
                            <div class="col-md-12 pe-2 mb-3">
                              <div class="input-group input-group-static mb-4">
                                <label></label>
                                <input
                                  type="email"
                                  class="form-control text-dark"
                                  id="emailinput"
                                  placeholder="Email address"
                                />
                              </div>
                            </div>
                            <div class="col-md-12 pe-2 mb-3">
                              <div class="input-group input-group-static mb-4">
                                <label></label>
                                <textarea
                                  name="message"
                                  class="form-control text-dark"
                                  id="message"
                                  rows="6"
                                  placeholder="What you want to say that..."
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6 text-end ms-auto">
                              <button
                                type="submit"
                                class="btn bg-gradient-info mb-0"
                                onClick={sendingmessage}
                                id="buttonstyle3"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warning message */}

        <div
          class="container py-7"
          style={{ display: this.state.warningalertdisplay }}
          id="Totalmodal"
        >
          <div class="row mt-5">
            <div class="col-sm-3 col-6 mx-auto">
              <button
                type="button d-none "
                class="btn bg-gradient-danger d-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalNotification"
              >
                Launch demo modal
              </button>

              <div
                class="modal fade"
                id="exampleModalNotification"
                tabindex="-1"
                aria-labelledby="exampleModalNotification"
                aria-hidden="true"
              >
                <div
                  class="modal-dialog modal-danger modal-dialog-centered modal-"
                  role="document"
                >
                  <div
                    class="modal-content bg-gradient-danger"
                    id="Warningalert"
                  >
                    <div class="modal-header border-0">
                      <h6
                        class="modal-title text-white"
                        id="modal-title-notification"
                      >
                        Error Message
                      </h6>
                      <button
                        type="button"
                        class="btn btn-link text-white my-1"
                        data-bs-dismiss="modal"
                      >
                        <i class="fas fa-times"></i>
                      </button>
                    </div>
                    <hr class="horizontal light mt-0" />
                    <div class="modal-body">
                      <div class="py-3 text-center text-white">
                        <i class="material-icons text-3xl text-danger">
                          notifications_active
                        </i>
                        <h4 class="heading mt-4 text-white">Wrong input</h4>
                        <p class="text-white opacity-8">
                          {this.state.warningmessage}
                        </p>
                      </div>
                    </div>
                    <hr class="horizontal light mb-0" />
                    <div class="modal-footer justify-content-between border-0">
                      <button
                        type="button"
                        class="btn btn-white text-white my-1"
                        onClick={removealert}
                        data-bs-dismiss="modal"
                      >
                        Ok, Got it
                      </button>
                      <button
                        type="button"
                        class="btn btn-link text-white my-1"
                        onClick={removealert}
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contactbody;
