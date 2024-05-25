// import React, {useState, useEffect } from 'react';
import Slider from "./slidersection/slider"
import {Statsandobjectives} from "../../../Modules/Website/Home/statsandobjects/stats-and-objectives"
import "./homepage.scss"
import Catogires from "./catogires/catogires"
import Testimonial from "./testimonial/testimonial"



import React, { Component } from 'react'

export class Homepage extends Component {

 
  render() {
    return (
      <div>
         <Slider/>
         <Statsandobjectives/>
     
         <Catogires/>
         <Testimonial/>
      </div>
    )
  }
}

export default Homepage

