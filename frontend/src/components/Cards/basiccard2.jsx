import React from "react";
import "../GlobalStyles/GlobalStyles.css";
import "../Cards/Basiccard.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'animate.css';


function BasicCard2(props) {

  //Card structure

  // title     show decrease or increase according to data

  // value

  // unit="items"

  //mid text

  //end text



  //Full input

  // title="Total Purchased In a Year"
  // val="5"
  // unit="items"
  // middletext="total purchases"
  // interval="year"
  //loweroption=1
  // lowertext
  //lowerdiv

  return (
    
    

    <div className="basiccardbody animate__animated animate__fadeIn  my-2 shadow">

    <div className="headercard shadow">
      <h6>{props.title}</h6>
      
    </div>


    <div className="middlebody">
      <div className=" d-inline left">
         <p> <b> {props.newval}</b> {props.unit}</p>
      <p>{props.middletext}</p>
      </div>
      <div className=" d-inline text-dark right">
      
      </div>
    </div>

    
   
    <div className="carddivider mb-2"></div>

    <div className="card2lower">
      {/* lower stats */}
      {(props.loweroption==1)? 
      
      
      <div><p className="m-0" >{props.lowertext}</p></div>
    :
    <div>{props.lowerdiv}</div>
      }
    </div>

    </div>

  );
}

export default BasicCard2;
