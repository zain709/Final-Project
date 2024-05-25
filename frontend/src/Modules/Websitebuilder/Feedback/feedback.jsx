import React, { Component } from "react";
import "./feedback.scss";
import backendwebsite from "../../../backendwebsite.json"
import axios from 'axios'
import BasicCard from "../../../components/Cards/BasicCard";
import Basicbanner from "../../../components/Cards/basicbanner";
export class Feedback extends Component {

  constructor(props) {

    super(props);

    this.state = {
      reviews1stcopy: [],
      reviewslits: [],
      reviewslistcopy: [],

      // For searching in table

      reviewsdatacopy: [],
      reviewsdata: [],

      //reviews stats
       currentmonthfeedbacks:0,
       prevmonthfeedbacks:0,

       positivefeedback:0,
       negativefeedback:0
    };
  }

  componentDidMount(){
    axios.get(backendwebsite[0].backendwebsite+`/feedback`)
    .then(res => {
      let newdata = res.data;
      this.setState({
        reviews1stcopy: newdata,
        reviewslits: newdata,

        reviewsdatacopy: newdata,
        reviewsdata: newdata
       } )
     
    })
    axios.get(backendwebsite[0].backendwebsite+`/feedback/monthratio`)
    .then(res => {
      console.log(res.data)
      console.log()
      this.setState({
        currentmonthfeedbacks:res.data[0],
        prevmonthfeedbacks:res.data[1]
       } )
     
    })
    axios.get(backendwebsite[0].backendwebsite+`/feedback/positveratio`)
    .then(res => {
      console.log(res.data)
      this.setState({
        positivefeedback :res.data[0],
        negativefeedback: res.data[1]
       } )
     
    })
  }

  render() {
    //total reviews stats
    let thismonthtotal = 150;
    let lastmonthtotal = 100;

    //Total positive reivews
    let thismonthtotalpositivereviews = 250;
    let lastmonthtotalpositivereviews = 350;

    //sorting table items
    let reviewsorting = () => {
      let optioninput = document.getElementById("sortingselect").value;

      // A backup of raw reviews to make it back original

      let copy = [...this.state.reviewslits];

      //assending order
      if (optioninput == "Poor to Good") {
        let temp;
        for (let i = 0; i < this.state.reviewslits.length; i++) {
          for (let j = 0; j < this.state.reviewslits.length - 1; j++) {
            if (
              this.state.reviewslits[j + 1].rating <
              this.state.reviewslits[j].rating
            ) {
              temp = this.state.reviewslits[j + 1];
              this.state.reviewslits[j + 1] = this.state.reviewslits[j];
              this.state.reviewslits[j] = temp;
            }
          }
        }

        let newarr = this.state.reviewslits;

        if ((this.state.reviewslits = this.state.reviewslits)) {
          this.setState({
            reviewslits: newarr,
            reviewslistcopy: copy,
          });
        } else {
          this.setState({
            reviewslits: newarr,
          });
        }
      }

      //decending order
      else if (optioninput == "Good to Poor") {
        let temp;
        for (let i = 0; i < this.state.reviewslits.length; i++) {
          for (let j = 0; j < this.state.reviewslits.length - 1; j++) {
            if (
              this.state.reviewslits[j + 1].rating >
              this.state.reviewslits[j].rating
            ) {
              temp = this.state.reviewslits[j + 1];
              this.state.reviewslits[j + 1] = this.state.reviewslits[j];
              this.state.reviewslits[j] = temp;
            }
          }
        }
        let newarr = this.state.reviewslits;
        if ((this.state.reviewslits = this.state.reviewslits)) {
          this.setState({
            reviewslits: newarr,
            reviewslistcopy: copy,
          });
        } else {
          this.setState({
            reviewslits: newarr,
          });
        }
      }

      //return to original form
      else if (optioninput == "Sort by ratings") {
        let copy = this.state.reviewslistcopy;
        this.setState({
          reviewslits: copy,
          reviews1stcopy: copy,
        });
      }
    };

    //search in table with name

    let searchintable = () => {
      let un = document.getElementById("inlineFormInputGroupUsername").value;
      let newarr = [];
      if (un.match(/^[A-Za-z ]+$/)) {
        let checking = 0;

        if (un != "") {
          this.state.reviewsdata.forEach((element) => {
            if (element.name.toLowerCase().startsWith(un.toLowerCase())) {
              checking = 1;
              newarr.push(element);
              this.setState({
                reviewsdata: newarr,
              });
            }
          });

          if (checking == 0) {
            let newa = this.state.reviewsdatacopy;
            this.setState({
              reviewsdata: newa,
            });
          }
        } else if ((un = "")) {
          let newa = this.state.reviewsdatacopy;
          this.setState({
            reviewsdata: newa,
          });
        }
      } else {
        document.getElementById("inlineFormInputGroupUsername").value = "";
        let newa = this.state.reviewsdatacopy;
        this.setState({
          reviewsdata: newa,
        });
      }
    };

    //simple table list rendering

    let numbering = 0;
    let tableitems = this.state.reviewsdata.map((e) => (
      <tr>
        <th scope="row">{++numbering}</th>
        <td>
          <div class="d-flex align-items-center">
            {e.name}{" "}
            <span class="badge badge-tertiary mx-2">
              {" "}
              {e.rating > 3 ? " Good " : " Poor "}{" "}
            </span>
          </div>
        </td>
        <td>{e.email}</td>
        <td>{e.rating}</td>
        <td className="feedbackintable">{e.feedback}</td>
        <td>
          <button
            onClick={ ()=>{  window.location.replace("/dashboard/marketing/marketingpage") } }
            type="button"
            class="btn btn-secondary btn-sm"
          >
            {" "}
            <i class="fa fa-solid fa-reply"></i>{" "}
            <span className="ml-5">  Reply </span>
          </button>
        </td>
      </tr>
    ));

    return (
      //body of feedback
      <div className="feedbackbody animate__animated animate__fadeIn ">
        {/* 1st row indicating 3 cards at top in 3 columbs */}

        <div className="row mt-3 " id="uppersection">
        <div className="col-md-4">
        <BasicCard
              title="Feedback stats"
              newval={this.state.currentmonthfeedbacks}
              prevval={this.state.prevmonthfeedbacks}
              unit="feedback"
              middletext="total feedback in month"
              interval="month"
              loweroption1="1"
              />
        </div>
        <div className="col-md-4">
        <BasicCard
              title="Postive feedback"
              newval={this.state.positivefeedback}
              prevval={this.state.negativefeedback}
              unit="feedbacks"
              middletext="Positive feedbacks"
              interval="Year"
              loweroption1="1"
              />
         </div>
          <div className="col-md-4">
             <Basicbanner
               heading="Generate voucehers"
               text="Send vouchers to componsate bad feedbacks"
               buttontext="Generate"
               buttonaction={ ()=>{ window.location.replace("/dashboard/marketing/vouchers") } }
               />


          </div>
        </div>

        {/* 2nd row indicating tables and tooltip */}

        <div className="row shadow animate__animated animate__fadeIn mt-2 mx-uto" id="lowersection">
          {/* Tool TIP */}

          <div className="tabletoolsfeedback d-flex justify-content-between mt-3 mb-2 px-3 ">
            <select
              class="form-control form-control-sm w-25 "
              id="sortingselect"
              onChange={reviewsorting}
            >
              <option>Sort by ratings</option>
              <option>Poor to Good</option>
              <option>Good to Poor</option>
            </select>

            <div class="">
              <label class="sr-only" for="inlineFormInputGroupUsername">
                Username
              </label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">Search</div>
                </div>
                <input
                  type="text"
                  class="searchtable form-control"
                  id="inlineFormInputGroupUsername"
                  onChange={searchintable}
                  placeholder="Customer name"
                />
              </div>
            </div>
          </div>

          {/* Table  */}

          <div className="tablesection">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Feedback</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{tableitems}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
