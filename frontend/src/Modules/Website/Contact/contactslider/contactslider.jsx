import React, { Component } from 'react'
import "./contactslider.scss"

export class Contactslider extends Component {

     
  render() {
    return (
      <div>

            <div className="slider text-center">
                <h2>Contact Us</h2>
                <a  type="button" href="#contactform" class="btn btn-outline-light text-nowrap mt-3"><i class="fa fa-solid fa-arrow-down"></i></a>
            </div>

      </div>
    )
  }
}

export default Contactslider