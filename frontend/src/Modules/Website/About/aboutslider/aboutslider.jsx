import React, { Component } from 'react'
import "./aboutslider.scss"
import axios from 'axios'
import backendwebsite from "../../../../backendwebsite.json"

export class Aboutslider extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
      Websitedata:{}
    }
  }

  componentDidMount(){
    axios.get(backendwebsite[0].backendwebsite+`/websitedata`)
        .then(res => {
          let newdata = res.data;
          this.setState({Websitedata:newdata[0]})
         
        })
  }
 

  render() {
    return (
      <div>

<div className="sliderbody">   
         <header class="">
    <div class="page-header min-vh-75" >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">{this.state.Websitedata.aboutsliderheading1}</h1>
            <p class="lead mb-4 text-white opacity-8">{this.state.Websitedata.aboutsliderheading2}</p>
            <button type="submit" href="/order" class="btn " id='buttonstyle1' >Place Your Order</button>
            <h6 class="text-white mb-2 mt-5">Find us on</h6>
            <div class="d-flex justify-content-center">
              <a href={this.state.Websitedata.facebooklink}><i class="fa fa-facebook text-lg text-white me-4" id='aboutslidersocialicons' ></i></a>
              <a href={this.state.Websitedata.instagramlink}><i class="fa fa-instagram text-lg text-white me-4" id='aboutslidersocialicons' ></i></a>
              <a href={this.state.Websitedata.twitterlink}><i class="fa fa-twitter text-lg text-white me-4" id='aboutslidersocialicons' ></i></a>
              <a href={this.state.Websitedata.youtubepagelink}><i class="fa fa-youtube text-lg text-white" id='aboutslidersocialicons' ></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
         </header>
    </div>  

      </div>
    )
  }
}

export default Aboutslider