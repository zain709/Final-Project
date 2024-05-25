import React from "react";
import "../GlobalStyles/GlobalStyles.css";
import "../Cards/Basiccard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";

function BasicCard(props) {
  //Card structure

  // title     show decrease or increase according to data

  // new value and previous value and Text showing( like 100 Feedbacks in month)

  // Showing link if end text and ratio if previous value

  // Lowertextoption 1 for showing stats and 2 for showing link for items in model box

  //Full input

  // title="Total Purchased In a Year"
  // newval="5"
  // unit="items"
  // middletext="total purchases"
  // prevval="30"
  // interval="year"
  // loweroption1="1"

  return (
    <div className="basiccardbody animate__animated animate__fadeIn  my-2 shadow">
      <div className="headercard shadow">
        <h6>{props.title}</h6>
      </div>

      <div className="middlebody">
        <div className=" d-inline left">
          <p>
            {" "}
            <b> {props.newval}</b> {props.unit}
          </p>
          <p>{props.middletext}</p>
        </div>
        <div className=" d-inline text-dark right"></div>
      </div>

      <div className="carddivider mb-2"></div>

      <div className="lowerbody">
        {/* lower stats */}
        {props.loweroption1 == 1 ? (
          <div className="statslowertext">
            {props.newval > props.prevval ? (
              <span>
                {" "}
                <span class="badge bg-secondary">
                  {((props.newval / props.prevval) * 10).toFixed(2)} %{" "}
                </span>{" "}
                <p className="d-inline">more this {props.interval}</p>{" "}
              </span>
            ) : (
              <span>
                {" "}
                <span class="badge bg-secondary">
                  {((props.newval / props.prevval) * 10).toFixed(2)} %{" "}
                </span>{" "}
                <p className="d-inline">less this {props.interval}</p>{" "}
              </span>
            )}
          </div>
        ) : (
          <div className="linklowertext">
            <a className="cardlink" onClick={props.linkaction}>
              <p className="m-0">
                {props.linktext}
                <i class="cardarrow mx-2 fa fa-solid fa-arrow-right"></i>
              </p>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default BasicCard;
