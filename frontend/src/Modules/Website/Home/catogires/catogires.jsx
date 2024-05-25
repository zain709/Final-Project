import React, { Component } from 'react'
import "./catogires.scss"
import axios from 'axios'
import backendwebsite from "../../../../backendwebsite.json"
export class Catogires extends Component {
  
 
  constructor(props) {
    super(props)
  
    this.state = {
      Websitedata:{},
      cetagories:[]
    }
  }

  componentDidMount(){

    axios.get(backendwebsite[0].backendwebsite+`/websitedata`)
        .then(res => {
          let newdata = res.data;
          this.setState({Websitedata:newdata[0]})
         
        })

        axios.get(backendwebsite[0].backendwebsite+`/products/cets`)
        .then(res => {
          this.setState({cetagories:res.data})
        })

      }
  render() {


     let catlist=this.state.cetagories.map((val)=>
        
            <div className='d-inline' >


           <button type="button"  class="btn btn-outline-primary btn-sm mx-4 px-md-3 mt-4" id='blankbuttonstyle3' >{val}</button>

            </div>
        );

       
    

    return (
      <div className='cetagoriessection' >
          
         <div className="row text-center" id='cetagoriessection'>

             <div className="col-10 mx-auto ">
                  <h2>
                      {this.state.Websitedata.cetagoriesheading}
                  </h2>
                  <p className='mt-3 mb-3' id='subheading' >{this.state.Websitedata.cetagoriessubheading}
                  </p>
                <div className="devider my-3 mx-auto"></div>
                  <div className="cats">

                        {catlist}

                  </div>


             </div>
         </div>
          
      </div>
    )
  }
}

export default Catogires