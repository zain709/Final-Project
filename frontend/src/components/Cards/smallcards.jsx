import React from 'react'
import "./smallcards.scss"

function Smallcards(props) {

  //bg for background
  //title for title
  //counter
  //link lower text
  //clickaction
  return (
    <div>

        <div className={ (props.bg==1)?"smallcardbody":"smallcardbody2"}>
            <div className="smallcardupper">
            <div className="cardtitle"> <h5> {props.title}</h5></div>
            <div className="counter"> <span class="badge badge-primary p-2">{props.counter}</span></div>
            </div>
            <div onClick={props.clickaction} id='lowercontentsimplecard' className="link mt-2">{props.link} <span className='linkicon mx-2' > <i class="fa fa-arrow-circle-o-right" id='simplecardlowericon' aria-hidden="true"></i> </span> </div>
        </div>

    </div>
  )
}

export default Smallcards