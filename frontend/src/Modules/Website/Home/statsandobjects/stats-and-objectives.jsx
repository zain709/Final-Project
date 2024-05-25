import React, { Component } from 'react'
import "./stats.scss"
import axios from 'axios'
import backendwebsite from "../../../../backendwebsite.json"



export class Statsandobjectives extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
        ordersdone:"",
        totalreviews:"",
        totalitems:"",
        Websitedata:{}
      }
    }

    componentDidMount(){

      let a
      let b
      let c
      axios.get(backendwebsite[0].backendwebsite+`/websitedata`)
          .then(res => {
            let newdata = res.data;
            this.setState({Websitedata:newdata[0]})
           
          })
          
          axios.get(backendwebsite[0].backendwebsite+`/sales/totalorders`)
          .then(res => {
             a = res.data.toString(); 
             this.setState({
              ordersdone:+a
          })   
          })
          
          axios.get(backendwebsite[0].backendwebsite+`/feedback/positive`)
          .then(res => {
             b = res.data;  
            console.log(typeof(b)+b+" b") 
            this.setState({
              totalreviews:""+b
          }) 
          })
          axios.get(backendwebsite[0].backendwebsite+`/sales/totalcustomers`)
          .then(res => {
            c = res.data.toString(); 
            this.setState({
              totalitems:""+c
          })   
          })

    }
    
  render() { 

    return (
      <div className='statsandobjectivebody' >
       

      {/* stats part */}
        <div className="row d-flex justify-content-center mbody shadow mx-auto py-3  " id="stats">

            <div className="col-md-3 " id='statssection' >
          
            <i class="fa fa-solid fa-check"></i>
                 <h2>{this.state.ordersdone}+</h2>
                 <p>completed orders for <br /> our customers</p>
            
            </div>
            <div className="statsmiddlesection col-md-3" id='statssection'>
            <i class="fa fa-solid fa-truck"></i>
                 <h2>{this.state.totalreviews}+</h2>
                 <p >Severd customers with <br /> maximum ratings</p>
            
            </div>
            <div className="col-md-3" id='statssection'>
            <i class="fa fa-solid fa-check"></i>
                 <h2>{this.state.totalitems}+</h2>
                 <p >wide variety of mouth <br /> watering products</p>
            
            </div>
        </div>


      {/* objectives part  */}
        <div className="row" id='objectivesection'>

          {/* left image */}

          <div className="col-md-6 d-md-block d-none " id='leftsection'> 
             <div className="imagesection text-center float-md-end">
                <h4 className='text-light' >Try us</h4>
                <button type="button" href="/" id='blankbuttonstyle3' class="btn btn-outline-primary px-4 my-2 ">Order Now</button>
             </div>
          </div>

          {/* right image */}

          <div className="col-md-6  " id="objevtices" >
              <div className="row" id='objectivegroup'>
                <div className="col-md-4"> 
                
               
                  <h5  > <i class="fa fa-solid fa-bullseye"></i><b>{this.state.Websitedata.object1heading} </b> </h5>
                  <p>{this.state.Websitedata.object1message} </p>

                </div>
                <div className="col-md-4 offset-md-1 "> 
                
                
                  <h5  > <i class="fa fa-solid fa-bullseye"></i><b> {this.state.Websitedata.object2heading} </b> </h5>
                  <p>{this.state.Websitedata.object2message} </p>
                
                </div>
              </div>
              <div className="row mt-md-5" id='objectivegroup'>
                <div className="col-md-4"> 
                
                 
                  <h5  > <i class="fa fa-solid fa-bullseye"></i><b> {this.state.Websitedata.object3heading} </b> </h5>
                  <p>{this.state.Websitedata.object3message} </p>
                
                </div>
                <div className="col-md-4 offset-md-1" id='objectivegroup'> 
                
                 
                  <h5  > <i class="fa fa-solid fa-bullseye"></i><b> {this.state.Websitedata.object4heading} </b> </h5>
                  <p>{this.state.Websitedata.object4message} </p>
                
                </div>
              </div>
          </div>          

        </div>


      </div>
    )
  }
}

export default Statsandobjectives