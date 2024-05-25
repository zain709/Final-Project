import React from 'react'
import "./solidbuttondark.scss"

//Inputs
//action => Do on click
//Text=> Text of button

function Solidbuttondark(props) {
  return (
    <div>

        <button type="button" id="darkbutton" class="btn btn-secondary shadow " onClick={props.action} >{props.text}</button>

    </div>
  )
}

export default Solidbuttondark