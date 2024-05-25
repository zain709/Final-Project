import React, { Component } from 'react'
import "./basicinfo.scss"
import backendwebsite from "../../../backendwebsite.json"
import axios from 'axios'

export class Basicinfo extends Component {
    
  render() {

    let checkandpushchanges= async()=>{

        //flag to validate each time data is to be submitted, it will true if even 1 input dont validate

        let flag=true

        //------------validation for each  input

        //getting input controls

      
        let fbcontrol=document.getElementById("facebooklink").value
        let instacontrol=document.getElementById("instagramlink").value
        let ytcontrol=document.getElementById("youtubelink").value
        let twitrcontrol=document.getElementById("twitterlink").value
        let phnumbercontrol=document.getElementById("contactnumber").value
        let emailcontrol=document.getElementById("emailladress").value

        let namecontrol=document.getElementById("websitename").value
        let addresscontrol=document.getElementById("address").value
        let abouttxtcontrol=document.getElementById("aboutbusiness").value
        let footertextcontrol=document.getElementById("footerheadtext").value
        
       if(namecontrol.length>20 || namecontrol =="" )
        {
            flag=false
        }
        else if(addresscontrol.length>35 || addresscontrol =="" )
        {
            flag=false
        }
        else if(abouttxtcontrol.length>260 || abouttxtcontrol =="" )
        {
            flag=false
        }
        else if(footertextcontrol.length>60 || footertextcontrol =="" )
        {
            flag=false
        }


    //-----

    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

        if(!fbcontrol.match(pattern) || fbcontrol =="" )
        {
            flag=false
          
        }
        else if(!instacontrol.match(pattern) || instacontrol =="" )
        {
            flag=false
        }
        else if(!ytcontrol.match(pattern) || ytcontrol =="" )
        {
            flag=false
        }
        else if(!twitrcontrol.match(pattern) || twitrcontrol =="" )
        {
            flag=false
        }
        else if(!phnumbercontrol.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im) || phnumbercontrol =="" )
        {
            flag=false
        }
        else if(!emailcontrol.match(/\S+@\S+\.\S+/) || emailcontrol=="" )
        {
            flag=false
        }

        if(flag==false)
        {
            alert("Please fill all inputs according to instructions")
        }
        else if (flag==true){
         
            let data={
                websitename:namecontrol,
                address:addresscontrol,
                aboutstonefire:abouttxtcontrol,
                footerupperheading:footertextcontrol, 

                email:emailcontrol,
                phonenumber:phnumbercontrol,
                facebooklink:fbcontrol,
                twitterlink:twitrcontrol,
                youtubepagelink:ytcontrol,
                instagramlink:instacontrol,    
            }
        
        let response = await axios
            .patch(backendwebsite[0].backendwebsite+`/websitedata/627857af4287f8a5b39009e3`, data)
            .catch((error) => console.log('Error: ', error));
        if (response && response.data) {
            console.log(response);
            console.log(response.data);
        }
        alert("Done")

        }
    

        
    }

    return (
      <div className='animate__animated animate__fadeIn' >

          <div className="basicinfoupperpart shadow text-center">

              <div className="container">
                  <i class="fa fa-solid fa-info mb-3" id='basicinfocardicon' ></i>
                  <h4>Perosnal and basic info for website</h4>
                  <p>The information below will be used in all over in website</p>
              </div>

          </div>

          <div className="basicinfolowerpart  shadow ">

              <div className="container mt-4 ">

                    <div className="row ">
                        <div className="col-md-6">

                              <p>Basic information about business that will show on website</p>  
                              <form className='' >

                              <label for="websitename" class="form-label ">Website address</label>
                              <input type="text" class="form-control" id="websitename" aria-describedby="emailHelp"/>
                              <div  id="websitenameHelp" class="form-text">Should contain alphabets only (20 Characters only)</div>

                               <label for="address" class="form-label mt-2 ">Address</label>
                              <input type="text" class="form-control" id="address" aria-describedby="emailHelp"/>
                              <div id="addressHelp" class="form-text">Address of your business (35 Characters only)</div> 

                              <label for="aboutbusiness" class="form-label mt-2 ">About (short Discription of business)</label>
                              <textarea  class="form-control" id="aboutbusiness" aria-describedby="emailHelp"/>
                              <div id="aboutbusinessHelp" class="form-text">Short bio of your business (260 lettes only)</div>

                              <label for="footerheadtext" class="form-label mt-2 ">footer upper section heading</label>
                              <input type="text" class="form-control" id="footerheadtext" aria-describedby="emailHelp"/>
                              <div id="footerheadtextHelp" class="form-text">Text to show on footer head (60 Characters only)</div>
                              
                                
                              </form>

                        </div>
                        <div className="col-md-6 mt-md-2 mt-3 ">
                              
                              <p>Contact info and social media accounts/pages link</p>  
                              <form className='' >

                              <label for="facebooklink" class="form-label"> <i class="fa fa-brands fa-facebook-f"></i> Facebook</label>
                              <input type="text" class="form-control form-control-sm" id="facebooklink" aria-describedby="emailHelp"/> 
                              <div id="facebooklinkHelp" class="form-text">Link of facebook account/page (Http link)</div>  

                              <label for="instagramlink" class="form-label mt-2"><i class="fa fa-brands fa-instagram"></i> Instagram</label>
                              <input type="text" class="form-control form-control-sm " id="instagramlink" aria-describedby="emailHelp"/>
                              <div id="instagramlinkHelp" class="form-text">Link of instagram account/page (Http link)</div> 

                              <label for="youtubelink" class="form-label mt-2"><i class="fa fa-brands fa-youtube"></i> Youtube</label>
                              <input  type="text" class="form-control form-control-sm  " id="youtubelink" aria-describedby="emailHelp"/>
                              <div id="youtubelinkHelp" class="form-text">Link of Youtube account/channel (Http link)</div>

                              <label for="twitterlink" class="form-label mt-2"><i class="fa fa-brands fa-instagram"></i> Twitter link</label>
                              <input type="text" class="form-control form-control-sm " id="twitterlink" aria-describedby="emailHelp"/>
                              <div id="twitterlinkHelp" class="form-text">Link of Twitter account (Http link)</div>
                              
                              <label for="contactnumber" class="form-label mt-2"><i class="fa fa fa-solid fa-phone"></i> Contact Number</label>
                              <input type="number" class="form-control form-control-sm mt-2" id="contactnumber" aria-describedby="emailHelp"/>
                              <div id="contactnumberHelp" class="form-text">#+9230******** (without space) </div>
                             
                              <label for="emailladress" class="form-label mt-2"><i class="fa fa-solid fa-envelope"></i> Email address</label>
                              <input type="email" class="form-control form-control-sm " id="emailladress" aria-describedby="emailHelp"/>
                              <div id="emailladressHelp" class="form-text">Valid email address</div>
                             
                                
                              </form>

                        </div>
                    </div>

                    <div className="basicinfobuttondiv text-center my-5 ">
                    <p> <b> Note: </b>make sure to fil all details as per description</p>
                    <button type="button" class="btn btn-primary px-4" id='buttonstyle3' onClick={checkandpushchanges} >Cinfirm</button>
                    </div>

              </div>

          </div>

      </div>
    )
  }
}

export default Basicinfo