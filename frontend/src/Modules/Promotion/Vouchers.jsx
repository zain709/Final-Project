import React from 'react'
import Simplelistgroup from '../../components/listgroup/simplelistgroup'
import Smallcards from '../../components/Cards/smallcards'
import "./vouchers.scss"
import { useEffect } from 'react'
import axios from 'axios'
import backendwebsite from "../../backendwebsite.json"
import { useState } from 'react'
function Vouchers() {

  let [vouchers,setvouchers]=useState([])
  let [simplevoucher,setsimplevoucher]=useState([])
  let [specialvoucher,setspecialvoucher]=useState([])

  useEffect(() => {

    // for getting all Asset detials
     axios.get(backendwebsite[0].backendwebsite+`/voucher`)
     .then(res => {
      setvouchers(res.data)
     })
    // Get simples vouchers
     axios.get(backendwebsite[0].backendwebsite+`/voucher/simple`)
     .then(res => { 
      setsimplevoucher(res.data)
     }) 
    //Get special vouchers 
     axios.get(backendwebsite[0].backendwebsite+`/voucher/special`)
     .then(res => { 
      setspecialvoucher(res.data)
    })  
   
   },[])
 
 //Send special voucher

 let sendspecialvoucher=()=>{

  let name=document.getElementById("specialvouchername").value
  let discription=document.getElementById("specialvoucherdiscription").value
  let discount=document.getElementById("specialvoucherdiscount").value
  let code=document.getElementById("specialvouchercode").value
  let sendersemail=document.getElementById("specialvouchersendersemail").value
  let message=document.getElementById("specialvouchermessage").value

  if(name!="" && discription!="" && code!="" && sendersemail!="" && message!="" && discount!="")
  {
    if( name.match(/^[A-Za-z\s]*$/) && sendersemail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) )
    {
      if(discription.length<80 && code.length<10 && name.length<25)
      {
        axios.post(backendwebsite[0].backendwebsite+'/voucher', {
          name:name,
          description:discription,
          code:code,
          discount:discount,
          sendersemail:sendersemail,
          message:message
        })
        .then(function (response) {
          console.log(response);
          alert("Successfully send!")
        })
        .catch(function (error) {
          console.log(error);
          alert("Unsuccessfull for unknown reason")
        });
      }
      else
      {
        alert("Description (only 80 alphabets) and code (only 10 digits)")
      }
    }
    else
    {
      alert("Please enter valid name (Only alphabets) /email and discount (Only Number)")
    }
  }
  else
  {
    alert("Please fill all detials")
  }

 }

 
 let addsimplevoucher=()=>{

  let name=document.getElementById("simplevouchername").value
  let description=document.getElementById("simplevoucherdescription").value
  let code=document.getElementById("simplevouchercode").value
  let discount=document.getElementById("simplevoucherdiscount").value

  if(name!="" && description!="" && code!="" && discount!="" )
  {
      if(name.match(/^[A-Za-z\s]*$/))
      {
        if(code.length<10 && description.length<80 && name.length<25)
        {

          axios.post(backendwebsite[0].backendwebsite+'/voucher', {
            name:name,
            description:description,
            code:code,
            discount:discount,
          
          })
          .then(function (response) {
            console.log(response);
            alert("Successfully send!")
          })
          .catch(function (error) {
            console.log(error);
            alert("Unsuccessfull for unknown reason")
          });

        }
        else
        {
          alert(" Description ( only 80 alphabets ) code ( only 10 alphabets ) name ( only 25 alphabets )")
        }
      }
      else
      {
        alert("Please enter valid name (only alphabets)")
      }
  }
  else
  {
    alert("Please Enter all detials")
  }

 }

  return (
    <div>

{/* <Smallcards title="Total vouchers" bg="2" counter="10" link="click to show" /> */}

    <div className="row">

        {/* left part showing cards and lower div */}

      <div className="col-md-8 mt-3">
       <div className="container"> 
        <div className="row upperpart">
            <div className="col-md-6 animate__animated animate__zoomIn ">
                <Smallcards title="Vouchers" counter={simplevoucher.length} bg="1" clickaction={()=>{setvouchers(vouchers=simplevoucher)}} link="Click to show" />
            </div>
            <div className="col-md-6 animate__animated animate__zoomIn ">
                <Smallcards title="Special Vouchers" counter={specialvoucher.length} bg="2" clickaction={()=>{setvouchers(vouchers=specialvoucher)}}link="Click to show" />
            </div>
        </div>

            {/* Lowwer part of forms */}

        <div className="lowerpart mt-4 animate__animated animate__fadeInUp">
          <ul  class="nav nav-pills mb-3" id="pills-tab" role="tablist" >
           <li class="nav-item" role="presentation">
           <button class="nav-link  active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Special Voucher</button>
           </li>
           
           <li class="nav-item" role="presentation">
           <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Simple Voucher</button>
           </li>
           </ul>
                <div class="tab-content" id="myTabContent">
                     <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            
                            {/* Special Voucher  */}

                        <div className="form">

                            <label for="" class="form-label mt-2 ">Voucher name</label>
                            <input type="text" class="form-control" name="" id="specialvouchername" aria-describedby="helpId" placeholder=""/>

                            <label for="" class="form-label mt-2 ">Discription</label>
                            <textarea type="text" class="form-control" name="" id="specialvoucherdiscription" aria-describedby="helpId" placeholder=""/>

                            <label for="" class="form-label mt-2 ">Code</label>
                            <input type="text" class="form-control" name="" id="specialvouchercode" aria-describedby="helpId" placeholder=""/>

                            <label for="" class="form-label mt-2 ">Discount</label>
                            <div class="input-group mb-3">
                            <input type="text" class="form-control" id="specialvoucherdiscount" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <span class="input-group-text" id="basic-addon2">%</span>
                            </div>

                            <label for="" class="form-label mt-2 ">Senders Email</label>
                            <input type="email" class="form-control" name="" id="specialvouchersendersemail" aria-describedby="helpId" placeholder=""/>

                            <label for="" class="form-label mt-2 ">Your message</label>
                            <textarea type="text" class="form-control" name="" id="specialvouchermessage" aria-describedby="helpId" placeholder=""/>

                            <button type="button" id='buttonstyle3' onClick={sendspecialvoucher} class="btn btn-primary mt-4">Submit</button>
                        </div>
                     </div>
                     <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                       
                            {/* Simple Voucher */}

                        <div className="form">

                            <label for="" class="form-label mt-2 ">Voucher name</label>
                            <input type="text" class="form-control" name="" id="simplevouchername" aria-describedby="helpId" placeholder=""/>

                            <label for="" class="form-label mt-2 ">Discription</label>
                            <textarea type="text" class="form-control" name="" id="simplevoucherdescription" aria-describedby="helpId" placeholder=""/>

                            <label for="" class="form-label mt-2 ">Code</label>
                            <input type="text" class="form-control" name="" id="simplevouchercode" aria-describedby="helpId" placeholder=""/>

                            <label for="" class="form-label mt-2 ">Discount</label>
                            <div class="input-group mb-3">
                            <input type="Number" class="form-control" id="simplevoucherdiscount" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <span class="input-group-text" id="basic-addon2">%</span>
                            </div>

                            <button type="button" id='buttonstyle3' onClick={addsimplevoucher} class="btn btn-primary mt-4">Submit</button>
                        </div>
                        
                     </div>
                </div>
        </div>

       </div> 
      </div>  
        
        {/* right side long div */}

      <div className="col-md-4 pt-2 animate__animated  animate__fadeInRight shadow " id='voucherslists'>
        <Simplelistgroup title="Vouchers" titlemessage="List of all vouchers" listitems={vouchers} />
      </div> 
    </div>




    </div>
  )
}

export default Vouchers