import React, { Component } from 'react'
import Aboutslider from "./aboutslider/aboutslider"
import Aboutinfo from "./infostatsandEmail/aboutinfo"
export class About extends Component {
  render() {
    return (
      <div>

  <Aboutslider/>
  <Aboutinfo/>
 
      </div>
    )
  }
}

export default About