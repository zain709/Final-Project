import React, { useState } from 'react'
import "./Loginpage.scss"
import { Link,withRouter  } from 'react-router-dom'

import 'animate.css';
import Cookies from 'js-cookie'

import axios from 'axios'
import backendwebsite from "../../backendwebsite.json"


function Loginpage() {

    let [fadeoutcard,setfadeoutcard]=useState(false)

   
  let validatepassword=()=>{
     
      
      let username=document.getElementById("username").value
      let password=document.getElementById("password").value
  
      if(username!="" && password!="")
      {
        axios.get(backendwebsite[0].backendwebsite+`/user/validate`,{
          params: {
            username:username,
            password:password
          }
        })
        .then(res => {
          if(res.data == "Validated" )
          {
           Cookies.set('login',"true")
           Cookies.set('username',username )
           Cookies.set('password', password) 
           setfadeoutcard(true)
           window.location.replace("/dashboard")
          }
          else
          {
            alert("Invalid detials")
          }
        });  
        
    
      }
      else
      {
        alert("Please fill all detials")
      }

  }  
  
  let forgetpassword=()=>{

    axios.get(backendwebsite[0].backendwebsite+`/user/generate`,{
      params: {
        email:backendwebsite[1].admin
      }
    })
    .then(res => {
      if(res.data == "Created!" )
      {
          alert("A new user genrated and send to ADMIN email!")
      }
      else
      {
        alert("Please Try Again")
      }
    });  
    

  
  }
    
  return (

    <div className='mainbodylogin'>

     <div className={ `logincard shadow ${(fadeoutcard==true)?"animate__fadeOutDown":""}  animate__animated animate__fadeInDown mx-auto `}>  

    <div className="logincardheader  d-block text-center">
       <h5 className='pt-3' >Zedar-ERP</h5> 
       <p>Login</p>
    </div>  

    <div className="logincardbody mt-3 d-block">
    <p className='text-center' >
       *Please enter valid username and password
    </p>

    <form className='logindetialsform' >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> <i class="fa fa-solid fa-user mx-1 "></i> Username</label>
    <input type="email" class="form-control" id="username" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"><i class="fa fa-unlock-alt" aria-hidden="true"></i> Password</label>
    <input type="password" class="form-control" id="password"/>
  </div>
  

</form>
<div className="text-center">
<a className='forgetlink d-block ' onClick={forgetpassword} >  Forget password ?</a>
<button type="submit" id='buttonstyle1' onClick={validatepassword} class="btn btn-primary px-4 mt-3 "><i class="fa fa-sign-in" aria-hidden="true"></i> <span className='mx-2' > Login  </span></button>
</div>
    </div> 
  
    </div>
    </div>

  )
}

export default Loginpage