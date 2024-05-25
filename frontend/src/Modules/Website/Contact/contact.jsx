import React, { Component } from 'react'
import Contactslider from "./contactslider/contactslider"
import Contactbody from "./contactpagebody/contactbody"
import "./contact.scss"
export class Contact extends Component {
  render() {
    return (
      <div>

        <Contactslider/>
        <div className='contactbodystyle mx-auto' >
        <Contactbody/>
        </div>
      </div>
    )
  }
}

export default Contact