import React, { Component } from 'react'
import "./slider.scss"
import axios from 'axios';
import backendwebsite from "../../../../backendwebsite.json"


export class Slider extends Component {


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

      
      

          <div className="cover text-center " id='sliderbody' >

            

<h1>{this.state.Websitedata.sliderheading1}</h1>
<h6>{this.state.Websitedata.sliderheading2}</h6>
<a type="button" class="btn btn-primary mx-3 px-4 mt-3 " id='buttonstyle1' href='/order' >Order Now</a>          
<a type="button" class="btn btn-outline-primary mx-md-3 mx-1  px-md-4  mt-3" id='blankbuttonstyle2' href='/contact'>Contact Us</a>          

          </div>

      </div>
    )
  }
}

export default Slider