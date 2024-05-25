import React from "react";
import "animate.css";

import CountUp from "react-countup";

import "../../GlobalStyles/GlobalStyles.css";
import styles from "./DisplayAmountCard.module.css";

const DisplayAmountCard = (props) => {
  return (
    <div
      className={`${styles.basiccard} animate__animated animate__fadeIn, my-2, shadow`}
    >
      <div
        className={`${styles.headercardExpense} shadow my-0 text-center fw-bolder`}
      >
        <h6 className="fs-2 m-0 p-0">{props.title}</h6>
      </div>

      <div className="middleBody">
        <h3 className="fs-3 text-center">
          <span className="fs-5"> {props.currency}</span>{" "}
          <span className="fw-bold">
            {" "}
            <CountUp start={0} end={props.amount} />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default DisplayAmountCard;
