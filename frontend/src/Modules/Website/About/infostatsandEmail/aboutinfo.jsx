import React, { Component } from 'react'
import { Websitedata } from '../../websitedata'
import "./aboutinfo.scss"
import emailimg from "../../../../images/Emailleadpicture.png"
import {Modal} from "bootstrap"
import whyusrightimage from "../../../../images/whyusrightimage.jpg"
import axios from 'axios'
import backendwebsite from "../../../../backendwebsite.json"

export class Aboutinfo extends Component {

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
           b=Object.keys(b).length.toString();
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



    //lead validation and sending
    
    let sendlead=()=>{

        //validating Email and user name
        
        let email=document.getElementById("emailinput").value
        let name =document.getElementById("nameinput").value
        if(name.match(/^[a-zA-Z\s]*$/) && email.match(/\S+@\S+\.\S+/))
        {
          axios.post(backendwebsite[0].backendwebsite+'/subscriber', {
            name: name,
            email: email
          })
          .then(function (response) {
            alert("Thank you for subscribing!")
          })
          .catch(function (error) {
            alert("Message did not sent due to unknown issue")
          });

        }
        else{
            let dataExportModal = new Modal(document.getElementById('exampleModalNotification'))
            this.setState({
              warningalertdisplay:"block"
            })  
            dataExportModal.show()
        }
    }

    let removealert=()=>{
        this.setState({
          warningalertdisplay:"none"
        })
      }


    return (
      <div className='aboutbody mx-auto shadow' >

{/* <!-- 1st section Why us --> */}


    <section class="Whyussection ">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 className='chooseusheading' >Why choose us ?</h2>  
            <div class="row justify-content-start mt-5">
              <div class="col-md-6">
                <div class="info">
                  <i class="material-icons text-3xl text-gradient text-info mb-3">public</i>
                  <h5>{this.state.Websitedata.section1heading}</h5>
                  <p>{this.state.Websitedata.section1text}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info">
                  <i class="material-icons text-3xl text-gradient text-info mb-3">payments</i>
                  <h5>{this.state.Websitedata.section1heading}</h5>
                  <p>{this.state.Websitedata.section2text}</p>
                </div>
              </div>
            </div>
            <div class="row justify-content-start mt-4">
              <div class="col-md-6">
                <div class="info">
                  <i class="material-icons text-3xl text-gradient text-info mb-3">apps</i>
                  <h5>{this.state.Websitedata.section3heading}</h5>
                  <p>{this.state.Websitedata.section3text}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info">
                  <i class="material-icons text-3xl text-gradient text-info mb-3">3p</i>
                  <h5>{this.state.Websitedata.section4heading}</h5>
                  <p>{this.state.Websitedata.section4text}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mx-auto mt-lg-0 mx-4 mt-4">
            <div class="card">
              <div class="card-header p-0 d-lg-block d-none">
                <a class="d-block blur-shadow-image">
                  <img src={whyusrightimage} alt="img-colored-shadow" class="whyusimage"/>
                </a>
              </div>
              <div class="card-body text-center">
                <h5 class="font-weight-normal">
                  <h4 className='chooseusheading' >{this.state.Websitedata.rightsectionheading}</h4>
                </h5>
                <p class="mb-0">
                  {this.state.Websitedata.rightsectionmessage}
                </p>
                <a href={this.state.Websitedata.facebooklink}><i class="fa fa-facebook text-lg text-dark me-4 mt-3 " id='' ></i></a>
              <a href={this.state.Websitedata.instagramlink}><i class="fa fa-instagram text-lg text-dark me-4" id='' ></i></a>
              <a href={this.state.Websitedata.twitterlink}><i class="fa fa-twitter text-lg text-dark me-4" id='' ></i></a>
              <a href={this.state.Websitedata.youtubepagelink}><i class="fa fa-youtube text-lg text-dark" id='' ></i></a>
      
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* 2nd section of stats */}

        <div class="row justify-content-center text-center mx-auto" id='aboutstatssection' >
          <div class="col-md-3"  id='statsobject'  >
            <h1 class="text-gradient text-info" id="state1">{this.state.ordersdone}+</h1>
            <h5>Orders</h5>
            <p>have been done for our valuabe customers</p>
          </div>
          <div class="col-md-3" id='statsobject' >
            <h1 class="text-gradient text-info"><span id="state2" countTo="3400">{this.state.totalreviews}</span>+</h1>
            <h5>5 star rating</h5>
            <p>we recieved from our customer all over social media platforms</p>
          </div>
          <div class="col-md-3" id='statsobject' >
            <h1 class="text-gradient text-info"><span id="state3" countTo="24">{this.state.totalitems}</span>+</h1>
            <h5>Customers</h5>
            <p>We have been served though out all sales</p>
          </div>
        </div>



{/* Email lead form section */}

    <section class="" id="emailleadsection" >
      <div class="container">
        <div class="row">
          <div class="col-md-6 " id='emailleadleft' >
            <h4>Get free discounts and vouchers</h4>
            <p class="mb-4">
             Email us now and get free discounts and cuppons alogn with our <br /> promotions and activities notificiaions .
            </p>
            <div class="row">
              <div class="col-8">
                <div class="input-group input-group-outline">
                 
                <input type="text" class="form-control form-control-sm  text-center text-dark "   id="nameinput"  placeholder="Enter your name"/>
                 <input type="Email" class="form-control form-control-sm text-center mx-3  text-dark "   id="emailinput" placeholder="Enter your Email"/>
   

                </div>
              </div>
              <div class="col-4 ps-0">
                <button type="button" class="btn bg-gradient-info mb-0 h-100 position-relative z-index-2" onClick={sendlead} id='buttonstyle1' >Subscribe</button>
              </div>
            </div>
          </div>
          <div class="col-md-5 ms-auto">
            <div class="position-relative">
              <img class="max-width-50 w-100 position-relative mt-3 z-index-2" id="leadimage" src={emailimg} alt="image"/>
            </div>
          </div>
        </div>
      </div>
    </section>





    {/* Warning Alert */}

    <div class="container py-7" style={{display:this.state.warningalertdisplay}} id="Totalmodal"  >
  <div class="row mt-5">
    <div class="col-sm-3 col-6 mx-auto">
      
      <button type="button d-none " class="btn bg-gradient-danger d-none" data-bs-toggle="modal" data-bs-target="#exampleModalNotification">
        Launch demo modal
      </button>

    
      <div class="modal fade" id="exampleModalNotification" tabindex="-1" aria-labelledby="exampleModalNotification" aria-hidden="true">
        <div class="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
          <div class="modal-content bg-gradient-danger" id="Warningalert">
            <div class="modal-header border-0">
              <h6 class="modal-title text-white" id="modal-title-notification">Error Message</h6>
              <button type="button" class="btn btn-link text-white my-1" data-bs-dismiss="modal"><i class="fas fa-times"></i></button>
            </div>
            <hr class="horizontal light mt-0" />
            <div class="modal-body">
              <div class="py-3 text-center text-white">
                <i class="material-icons text-3xl text-danger">notifications_active</i>
                <h4 class="heading mt-4 text-white">Wrong input</h4>
                <p class="text-white opacity-8">Invalid Email and username</p>
              </div>
            </div>
            <hr class="horizontal light mb-0" />
            <div class="modal-footer justify-content-between border-0">
              <button type="button" class="btn btn-white text-white my-1" onClick={removealert} data-bs-dismiss="modal">Ok, Got it</button>
              <button type="button" class="btn btn-link text-white my-1" onClick={removealert} data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}

export default Aboutinfo