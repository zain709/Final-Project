import React, { Component } from 'react'
import "./testimonial.scss"
import quotationimage from "../../../../images/quotationimage.png"
import axios from 'axios';
import backendwebsite from "../../../../backendwebsite.json"
export class Testimonial extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      Websitedata:{},
      reviews:[]
    }
  }

  componentDidMount(){

    axios.get(backendwebsite[0].backendwebsite+`/websitedata`)
        .then(res => {
          let newdata = res.data;
          this.setState({Websitedata:newdata[0]})
    })

    axios.get(backendwebsite[0].backendwebsite+`/feedback/totalpositive`)
        .then(res => {
          let newdata = res.data;
          this.setState({reviews:newdata})
    })

      
   
  }

 
  render() {

  
    let check="carousel-item active"
    let testimoniallist=this.state.reviews.map((e)=>
    
    <div class={check}>
      <div className="review mx-auto  ">

          <img className='tstimg my-4' src={quotationimage} alt="" />
          <h3>{e.name}</h3>
          <h6><i class="fa fa-solid fa-star"></i><i class="fa fa-solid fa-star"></i><i class="fa fa-solid fa-star"></i><i class="fa fa-solid fa-star"></i><i class="fa fa-solid fa-star"></i></h6>
          <p className='my-4' > " {e.feedback} "</p>   
          <p className='d-none' > {check="carousel-item"}</p>

      </div>
    </div>

    );

    return (
      <div className='Testimonial  text-center' >

      <h2>{this.state.Websitedata.testimonialheading}</h2>
      <div className="divider mx-auto"></div>
      <p>{this.state.Websitedata.testimonialsubheading}</p>
     

    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
           {testimoniallist}
          </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" id='testimonialbuttons' data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"><i class="fa fa-solid fa-arrow-left"></i></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" id='testimonialbuttons' data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"> <i class="fa fa-solid fa-arrow-right"></i></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      </div>
    )
  }
}

export default Testimonial