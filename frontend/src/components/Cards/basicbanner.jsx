import React from "react";
import "./basicbannerstyle.scss";
function Basicbanner(props) {
  return (
    <div>
      <div className="Basiccardbanner ">
        <i class="fa fa-solid fa-info mb-3" id="basicinfocardicon"></i>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
        <button
          type="button"
          onClick={props.buttonaction}
          id="buttonstyle4"
          class="btn btn-primary px-4"
        >
          {props.buttontext}
        </button>
      </div>
    </div>
  );
}

export default Basicbanner;
