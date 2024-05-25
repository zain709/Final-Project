import React, { Component } from 'react'
import "./promotions.scss"
import axios from 'axios'
import backendwebsite from "../../../backendwebsite.json"
export class Promotions extends Component {


    constructor(props) {
        super(props)
      
        this.state = {
            warningalertdisplay:"none",
            warningmessage:"",
            Websitedata:{},
            discounts:[],
            voucehrs:[],
            popups:[]
        }
      } 

      componentDidMount(){

            axios.get(backendwebsite[0].backendwebsite+`/websitedata`)
            .then(res => {
              let newdata = res.data;
              this.setState({Websitedata:newdata[0]})
             
            })

            axios.get(backendwebsite[0].backendwebsite+`/discount`)
            .then(res => {
              let newdata = res.data;
           
              this.setState({discounts:newdata})
             
            })

            axios.get(backendwebsite[0].backendwebsite+`/voucher/simple`)
            .then(res => {
              let newdata = res.data;
              this.setState({voucehrs:newdata})
            })

            axios.get(backendwebsite[0].backendwebsite+`/popups`)
            .then(res => {
              this.setState({popups:res.data})
            })
           
        }

  render() {

    
    let dealscart=this.state.discounts.map((de)=>    
    
    <div className="align-self-start mx-4 my-3 d-md-inline-block" >

        
            <div class="card shadow mx-auto  " style={{width: "18rem;"}} id='dealcard'>
                <div class="card-body align-self-start">
                     <h4 class="card-title text-white ">{de.productname}</h4>
                     <div className="carddevider mx-auto"></div>
                     <p class="card-text text-white ">{de.description}</p>
                     <p className='text-white' > <b> Discount : {de.discount} /RS </b></p>
                    <button type="button" onClick={()=>{window.location.href = "/order"}} class="btn px-4  " id='buttonstyle4' >  Buy now</button>
                 </div>
            </div>

              
    </div>

    );





    let promotionscart=this.state.voucehrs.map((de)=>
    
    <div className="promotions   mx-4 my-3 d-md-inline-block">


                 <div class="card-body mx-auto " id='dealcard'>
                     <h5 class="card-title text-white ">{de.name}</h5>
                     <div className="carddevider mx-auto"></div>
                     <p class="card-text text-white ">{de.description}</p>
                     <p className='text-white' >   Promocode : <b>{de.code}</b></p>
                    <button type="button" onClick={()=>{window.location.href="/order"}} class="btn px-2 btn-sm  " id='buttonstyle4' >Avail Now</button>
                 </div>

    </div>

    );


    


    let check= "carousel-item active"

    return (
      <div className='promotionsbody'>



          <div className="sliderpromotions">

          
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  
     
           <div className='carousel-inner' >

           

          {this.state.popups.map((e)=>
           <div class={check}>
           <h4>{e.heading}</h4>
           <p>{e.message}</p>
           <p className='d-none' > {check="carousel-item"}</p>
           </div>    
          )}

           </div>
      

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


          </div>


          <div className="promotionsaread">

                {/* Deald area */}

                <div className="row dealsarea">
                    <div className="dealsheader">
                      
                      <h4>{this.state.Websitedata.promotionsdealheading}</h4>
                      <p>{this.state.Websitedata.promotionsdealmessage}</p>
                    </div>

                    <div className="dealscards mt-5   my-4 text-center">
                        {dealscart}
                    </div>
                </div>

                {/* Promotions Area */}

                <div className="flatpromotionsarea">
                    <div className="flatpromotionsheader">
                      
                      <h4>{this.state.Websitedata.promotionsflatheading}</h4>
                      <p>{this.state.Websitedata.promotionsflatlmessage}</p>
                    </div>

                    <div className="flatpromotionsscards text-center my-5">
                        {promotionscart}
                    </div>
                </div>

                


          </div>
    
      </div>
    )
  }
}

export default Promotions