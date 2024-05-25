import React from 'react'
import "./iconroundbutton.scss"
function Iconroundbutton(props) {
  return (
    <div>
      <a className='roundedicon' onClick={props.clickaction} ><i  class={props.icon} aria-hidden="true"></i></a>
    </div>
  )
}

export default Iconroundbutton