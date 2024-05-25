import React, { useState } from 'react'
import "./topbanner.scss"
import 'animate.css';

//Images import
import slidericon from "../../images/icons/bannerrocket.gif"



//Importing icons from react icons library
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";



function Topbanner() {

  return (
    <div>
       <div className="topsliderbody ">
        <div className="row">
          <div className="col-md-2">
            <div className="links mt-lg-5">
              <div className="bannerlink">  <FaFacebookF/></div>
              <div className="bannerlink my-4">   <FaInstagram/></div>
              <div className="bannerlink">  <FaLinkedinIn/></div>
           
            
             
            </div>
          </div>
          <div className="col-md-8 text-center " id='bannermidletext'>
            <img src={slidericon} id='slidericon' alt="" />
            <p>bonjour!</p>
            <h5>Taha Rasheed</h5>
            <h6 id='animatedtextslider'>Full stack web Developer</h6>
          </div>
          {/* d-md-block d-none */}
          <div className="col-md-2 ">
            <p className='sliderrighttext'> Creativity with passion </p>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Topbanner