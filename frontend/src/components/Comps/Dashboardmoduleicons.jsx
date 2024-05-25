import React, { useState } from 'react'
import "../GlobalStyles/GlobalStyles.css"

import {
    Link
  } from "react-router-dom";
function Dashboardmoduleicons(props) {

    

  return (
    <div>
        <div className="iconbody animate__animated animate__fadeInUp mx-5">

        <Link to={props.link} className='links'>
          <img src={props.iconimage} alt="" className='iconimage' />
            <p className="iconheading pt-1 p-0 m-0 ">{props.iconheading}</p>
        </Link>
        </div>
    </div>
  )
}

export default Dashboardmoduleicons