import React,{useState,useEffect} from 'react'
import "./Marketingpage.scss"
import Basicbanner from '../../components/Cards/basicbanner'
import Smallcards from '../../components/Cards/smallcards'

import axios from 'axios'
import backendwebsite from "../../backendwebsite.json"

import Simplelistgroup from '../../components/listgroup/simplelistgroup'

function Marketingpage() {


  let [popuppromotionslists, setpopuppromotionslists] = useState([]);
  let [convastitle, setconvastitle] = useState("Group List");
  let [convasmessage, setconvasmessage] = useState("List of promotions and emails");
  let [convaslist, setconvaslist] = useState([]);


  // Emails

  let [autoemails, setautoemails] = useState([]);



  useEffect(() => {

    // for getting all Asset detials
    axios.get(backendwebsite[0].backendwebsite+`/popups`)
    .then(res => {
    
    
      let item
      res.data.forEach(element => {

        item={
          name:element.heading,
          description:element.message ,
          code:"Pop-up"
        }
         
      });
      popuppromotionslists.push(item)
    
    })
 
 
    axios.get(backendwebsite[0].backendwebsite+`/autoemails`)
    .then(res => {
    
    
      let item
      res.data.forEach(element => {

        item={
          name:element.heading,
          description:element.message ,
          code:"Auto-Email"
        }
         
      });
      autoemails.push(item)
    
    })
 

   },[])


   // Sending mails
  let sendemailmarketing=()=>{
    let heading=document.getElementById("Emailmarketingsubject").value
    let message=document.getElementById("Emailmarketingmessage").value

    if(heading!="" && message!="")
    {
     
      if(heading.length<80 &&  message.length<400)
      {
        
        axios.post(backendwebsite[0].backendwebsite+'/autoemails', {
          heading:heading,
          message:message
         
        })
        .then(function (response) {
          alert("Auto Emails sended !")
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          alert("Unsuccessfull for unknown reason")
        });

      }
      else
      {
        alert("Please enter valid details")
      }
      
    }
    else
    {
      alert("Please enter Heading and message")
    }
   
  }

  // Sending Pops uops

  let sendpopuppromotion = () =>{

    let heading = document.getElementById("popuppromotionheading").value
    let message = document.getElementById("popuppromotionmessage").value

    if( heading!="" && message!="" && heading.length<80 && message.length<200 )
    {

        axios.post(backendwebsite[0].backendwebsite+'/popups', {

          heading:heading,
          message:message,

        })
        .then(function (response) {
          alert("Added Successfully !")
          document.getElementById("popuppromotionheading").value = ""
          document.getElementById("popuppromotionmessage").value = ""
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);            
        });  
        
      }
      else
      {
        alert("Please enter valid Detaills")
      }

  }


// Card actions

 let displaypopups=()=>{

  setconvastitle("Popups")
  setconvasmessage("List of pop-ups")
  setconvaslist(convaslist=popuppromotionslists)


 }

 
  return (
    <div>

        <div className="row">
           
            <div className="col-md-4 mt-4 animate__animated animate__fadeInUp" id='promotiondiv'>
            <h5>Pop up promotins</h5>
            <p>*It will show on pop-ups when use enter the home page of website</p>

            <div className="form">
             
                  <label for="" class="form-label ">Promotion heading</label>
                  <textarea type="email" class="form-control" name="" id="popuppromotionheading" aria-describedby="emailHelpId" placeholder=""/>
                  <small id="emailHelpId" class="form-text text-muted  d-block ">80 letters only</small>
 

                  <label for="" class="form-label mt-2 ">Promotion message</label>
                  <textarea type="email" class="form-control" name="" id="popuppromotionmessage" aria-describedby="emailHelpId" placeholder=""/>
                  <small id="emailHelpId" class="form-text text-muted d-block ">200 letters only</small>

                  <button type="button" class="btn btn-primary mt-4 px-2 " onClick={sendpopuppromotion}  id='buttonstyle3'>Submit</button>
            </div>
            </div>

           
            <div className="col-md-4 mt-4 animate__animated animate__fadeInUp" id='emailmarketingdiv'>

            <h5>Auto-generated Emails</h5>
            <p>*It will send to all leads and customers</p>

            <div className="form">
             
                  <label for="" class="form-label ">Subject</label>
                  <textarea type="email" class="form-control" name="" id="Emailmarketingsubject" aria-describedby="emailHelpId" placeholder=""/>
                  <small id="emailHelpId" class="form-text text-muted  d-block ">80 letters only</small>
 

                  <label for="" class="form-label mt-2 ">Email Message</label>
                  <textarea type="email" class="form-control" name="" id="Emailmarketingmessage" aria-describedby="emailHelpId" placeholder=""/>
                  <small id="emailHelpId" class="form-text text-muted d-block ">400 letters only</small>

              

                  <button type="button" class="btn btn-primary mt-4 px-2" onClick={sendemailmarketing} id='buttonstyle3'>Submit</button>
            </div>
           

            </div>
            
            <div className="col-md-4 " >
                <div className="rightpartmarketingbanner animate__animated animate__fadeInRight shadow">
            
                <br />
                <Smallcards title="Pop up promotions" clickaction={displaypopups}  bg="1" counter={popuppromotionslists.length} link="Click to show" />
                <br />
                <Smallcards title="Marketing messages" clickaction={()=>{   setconvastitle("Auto emails")  ; setconvasmessage("List of Auto generated Emails");  setconvaslist(convaslist=autoemails)  }}   bg="2" counter={autoemails.length} link="Click to show" />
               
                <br />
                <Simplelistgroup
                title={convastitle}
                titlemessage={convasmessage}
                listitems={convaslist}
                />
                
                </div>
            </div>
        </div>



      <div className="campas">

     
      </div>



      

    </div>
  )
}

export default Marketingpage