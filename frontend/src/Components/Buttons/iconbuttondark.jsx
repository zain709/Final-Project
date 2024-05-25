import React from 'react'
import "./iconbuttondark.scss"

function Iconbuttondark(props) {
  return (
    <div>
        <button type="button" onClick={props.action} class="btn btn-primary" id='iconbuttondark' >{props.icon} </button>
    </div>
  )
}

export default Iconbuttondark