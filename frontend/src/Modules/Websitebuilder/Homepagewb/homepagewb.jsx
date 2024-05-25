import React, { Component } from "react";
import "./homepagewb.scss";
import backendwebsite from "../../../backendwebsite.json";
import axios from "axios";

export class Homepagewb extends Component {
  render() {
    let submitchanges = async () => {
      //flag to validate each time data is to be submitted, it will true if even 1 input dont validate

      let flag = false;

      // Validation for objectives

      let o1h = document.getElementById("ob1h").value;
      let o1t = document.getElementById("ob1t").value;

      let o2h = document.getElementById("ob2h").value;
      let o2t = document.getElementById("ob2t").value;

      let o3h = document.getElementById("ob3h").value;
      let o3t = document.getElementById("ob3t").value;

      let o4h = document.getElementById("ob4h").value;
      let o4t = document.getElementById("ob4t").value;

      if (o1h == "" || o1h.length > 18) {
        flag = true;
      } else if (o1t == "" || o1t.length > 50) {
        flag = true;
      } else if (o2h == "" || o2h.length > 18) {
        flag = true;
      } else if (o2t == "" || o2t.length > 50) {
        flag = true;
      } else if (o3h == "" || o3h.length > 18) {
        flag = true;
      } else if (o3t == "" || o3t.length > 50) {
        flag = true;
      } else if (o4h == "" || o4h.length > 18) {
        flag = true;
      } else if (o4t == "" || o4t.length > 50) {
        flag = true;
      }

      //

      let shcontrol = document.getElementById("sh").value;
      let stcontrol = document.getElementById("st").value;

      let thcontrol = document.getElementById("th").value;
      let ttcontrol = document.getElementById("tt").value;

      let chcontrol = document.getElementById("ch").value;
      let ctcontrol = document.getElementById("ct").value;

      if (shcontrol == "" || shcontrol.length > 25) {
        flag = true;
      } else if (stcontrol == "" || stcontrol.length > 45) {
        flag = true;
      } else if (thcontrol == "" || thcontrol.length > 20) {
        flag = true;
      } else if (ttcontrol == "" || ttcontrol.length > 70) {
        flag = true;
      } else if (thcontrol == "" || thcontrol.length > 20) {
        flag = true;
      } else if (chcontrol == "" || chcontrol.length > 15) {
        flag = true;
      } else if (ctcontrol == "" || ctcontrol.length > 86) {
        flag = true;
      }

      if (flag == true) {
        alert("Please fill all inputs according to instructions");
      } else if (flag == false) {
        let data = {
          cetagoriesheading: chcontrol,
          cetagoriessubheading: ctcontrol,

          testimonialheading: thcontrol,
          testimonialsubheading: ttcontrol,

          sliderheading1: shcontrol,
          sliderheading2: stcontrol,

          object1heading: o1h,
          object1message: o1t,

          object2heading: o2h,
          object2message: o2t,

          object3heading: o3h,
          object3message: o3t,

          object4heading: o4h,
          object4message: o4t,
        };

        let response = await axios
          .patch(
            backendwebsite[0].backendwebsite +
              `/websitedata/627857af4287f8a5b39009e3`,
            data
          )
          .catch((error) => console.log("Error: ", error));
        if (response && response.data) {
          console.log(response);
          console.log(response.data);
        }
        alert("Done");
      }
    };

    return (
      <div className="animate__animated animate__fadeIn">
        <div className="basicinfoupperpart shadow text-center">
          <div className="container">
            <i class="fa fa-solid fa-info mb-3" id="basicinfocardicon"></i>
            <h4>Website Home page</h4>
            <p> The information below will be used in homepage of website</p>
          </div>
        </div>

        <div className="basicinfolowerpart  shadow ">
          <div className="container mt-4 ">
            <div className="row ">
              <div className="col-md-6">
                <p>
                  {" "}
                  <b> Objectives headings and text</b>
                </p>
                <form className="">
                  <label for="ob1h" class="form-label ">
                    Objective 1 heading
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="ob1h"
                    aria-describedby="emailHelp"
                  />
                  <div id="ob1hHelp" class="form-text">
                    *18 Characters only
                  </div>

                  <label for="ob1t" class="form-label  mt-2">
                    Objective 1 text
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="ob1t"
                    aria-describedby="emailHelp"
                  />
                  <div id="ob1tHelp" class="form-text">
                    *50 Characters only
                  </div>

                  <label for="ob2h" class="form-label  mt-2">
                    Objective 2 heading
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="ob2h"
                    aria-describedby="emailHelp"
                  />
                  <div id="ob2heHelp" class="form-text">
                    *18 Characters only
                  </div>

                  <label for="ob2t" class="form-label mt-2 ">
                    Objective 2 text
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="ob2t"
                    aria-describedby="emailHelp"
                  />
                  <div id="ob2tHelp" class="form-text">
                    *50 Characters only
                  </div>

                  <label for="ob3h" class="form-label  mt-2">
                    Objective 3 heading
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="ob3h"
                    aria-describedby="emailHelp"
                  />
                  <div id="ob3hHelp" class="form-text">
                    *18 Characters only
                  </div>

                  <label for="ob3t" class="form-label mt-2 ">
                    Objective 3 text
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="ob3t"
                    aria-describedby="emailHelp"
                  />
                  <div id="ob3tHelp" class="form-text">
                    *50 Characters only
                  </div>

                  <label for="ob4h" class="form-label mt-2 ">
                    Objective 4 heading
                  </label>
                  <input
                    class="form-control"
                    id="ob4h"
                    aria-describedby="emailHelp"
                  />
                  <div id="ob4hHelp" class="form-text">
                    *18 Characters only
                  </div>

                  <label for="ob4t" class="form-label mt-2 ">
                    Objective 4 text
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="ob4t"
                    aria-describedby="emailHelp"
                  />
                  <div id="ob4ttHelp" class="form-text">
                    *50 Characters only
                  </div>
                </form>
              </div>
              <div className="col-md-6 mt-md-2 mt-3 ">
                <p>
                  {" "}
                  <b> Slider / Testimonial / cetagories</b>
                </p>
                <form className="">
                  <label for="sh" class="form-label">
                    {" "}
                    Slder heading
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    id="sh"
                    aria-describedby="emailHelp"
                  />
                  <div id="shHelp" class="form-text">
                    *25 charactors only
                  </div>

                  <label for="st" class="form-label mt-2">
                    {" "}
                    Sider text
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-sm "
                    id="st"
                    aria-describedby="emailHelp"
                  />
                  <div id="stkHelp" class="form-text">
                    *45 charactors only
                  </div>

                  <label for="th" class="form-label mt-2">
                    Testimonial heading
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-sm  "
                    id="th"
                    aria-describedby="emailHelp"
                  />
                  <div id="thHelp" class="form-text">
                    *20 charactors only
                  </div>

                  <label for="tt" class="form-label mt-2">
                    {" "}
                    Testimonial Text
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-sm "
                    id="tt"
                    aria-describedby="emailHelp"
                  />
                  <div id="ttHelp" class="form-text">
                    *70 charactors only
                  </div>

                  <label for="ch" class="form-label mt-2">
                    {" "}
                    Category heading
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-sm mt-2"
                    id="ch"
                    aria-describedby="emailHelp"
                  />
                  <div id="chHelp" class="form-text">
                    *15 charactors only{" "}
                  </div>

                  <label for="ct" class="form-label mt-2">
                    {" "}
                    Category Text
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-sm "
                    id="ct"
                    aria-describedby="emailHelp"
                  />
                  <div id="ctHelp" class="form-text">
                    *86 charactors only
                  </div>
                </form>
              </div>
            </div>

            <div className="basicinfobuttondiv text-center my-5 ">
              <p>
                {" "}
                <b> Note: </b>make sure to fill all details as per description
              </p>
              <button
                type="button"
                class="btn btn-primary px-4"
                id="buttonstyle3"
                onClick={submitchanges}
              >
                Cinfirm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepagewb;
