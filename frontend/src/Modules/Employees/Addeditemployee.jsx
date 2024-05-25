import React,{useState,useEffect} from 'react'
import "./Addeditemployee.scss"

import axios from 'axios'
import backendwebsite from "../../backendwebsite.json"


function Addeditemployee() {

  let [emplist,setemplist]=useState([])

  useEffect(() => {

    axios.get(backendwebsite[0].backendwebsite+`/employees`)
    .then(res => {
      setemplist(res.data)
    })
    })

  let [edit, setedit] = useState("false");

  let addemployee=()=>{

    let name=document.getElementById("nameselect").value
    let adress=document.getElementById("addresselect").value
    let number=document.getElementById("numberselect").value
    let sallary=document.getElementById("sallaryselect").value
    let designation=document.getElementById("designatoionselect").value

    if(name!="" && adress!="" && number!="" && sallary!="" && designation!="")
    {
        if(name.match(/^[A-Za-z\s]*$/) && adress.length<200 && number.length<12)
        {

          axios.post(backendwebsite[0].backendwebsite+'/employees', {
            name:name,
            designation:designation,
            address:adress,
            number:number,
            sallary:sallary
          
          })
          .then(function (response) {
            console.log(response);
            alert("Successfully send!")
          })
          .catch(function (error) {
            console.log(error);
            alert("Unsuccessfull for unknown reason")
          });


            alert("Added")
        }
        else
        {
          alert("Invalid name or address (address<200) and valid number ")
        }
    }
    else
    {
      alert("Please enter all detials")
    }

  }

  let validateemployee=()=>{

   
    let orderID=document.getElementById("employeeIDselect").value

    if(orderID!=""){

    axios.get(backendwebsite[0].backendwebsite+`/employees/check/${orderID}`)
    .then(res => {
      if(res.data=="Yes")
      {
        setedit("true")
        alert("Enter data to edit")
      }
      else if(res.data=="No")
      {
        setedit("false")
        alert("Invalid ID")
      }
    })
  }
  else{
    setedit("false")
  }
   

  }

  let editemploye=()=>{


    let name=document.getElementById("nameselect").value
    let adress=document.getElementById("addresselect").value
    let number=document.getElementById("numberselect").value
    let sallary=document.getElementById("sallaryselect").value
    let designation=document.getElementById("designatoionselect").value
    let orderID=document.getElementById("employeeIDselect").value
   

    if(name!="" && adress!="" && number!="" && sallary!="" && designation!="")
    {
        if(name.match(/^[A-Za-z\s]*$/) && adress.length<200 && number.length<12)
        {
          let data={
            name:name,
            designation:designation,
            address:adress,
            number:number,
            sallary:sallary
          }

          let response =axios
          .patch(backendwebsite[0].backendwebsite+`/employees/${orderID}`, data)
          .catch((error) => console.log('Error: ', error));
      if (response && response.data) {
          console.log(response);
          console.log(response.data);
        
      }

            alert("Edite!")
        }
        else
        {
          alert("Invalid name or address (address<200) and valid number ")
        }
    }
    else
    {
      alert("Please enter all detials")
    }
    

  }


  let deleteemployee=()=>{
    let EmployeeID=document.getElementById("employeeIDselecttodelete").value
    let flag=false
      if(EmployeeID!=""){
        emplist.forEach(e=>{
      if(e._id==EmployeeID)
      {
        flag=true
      }
    })
    if(flag==true){
      axios.get(backendwebsite[0].backendwebsite+`/employees/delete/${EmployeeID}`)
      .then(res => {
        console.log(res.data)
      }) 
      alert("Successfully deleted")  
    }
    else{
      alert("Please enter Valid ID")
    }
  } 
    else{
      alert("Please enter ID")
    }
  }
 

  return (
    <div>

      <div className="row">

        <div className="col-md-7 p-5">
          <h5>Employee Detail</h5>
          <p>*Enter detials carefully</p>

       <div class="mb-3 w-75">
         <label for="" class="form-label mt-2 ">Name</label>
         <input type="text" class="form-control" name="" id="nameselect" aria-describedby="helpId" placeholder=""/>

         <label for="" class="form-label mt-2 ">address</label>
         <input type="text" class="form-control" name="" id="addresselect" aria-describedby="helpId" placeholder=""/>

         <label for="" class="form-label mt-2 ">Number</label>
         <input type="Number" class="form-control" name="" id="numberselect" aria-describedby="helpId" placeholder=""/>

         <label for="" class="form-label mt-2 ">Sallay</label>
         <input type="text" class="form-control" name="" id="sallaryselect" aria-describedby="helpId" placeholder=""/>


        <label for="" class="form-label mt-2 ">Designation</label>
          <select class="form-control" name="" id="designatoionselect">
            <option>Delivery boys</option>
            <option>Manager</option>
            <option>Cashier</option>
            <option>Watchman</option>
            <option>Waiter</option>
            <option>Hr</option>
            <option>Kitchen employee</option>
            <option>Other</option>
          </select>
    {(edit=="false")?
          <button onClick={addemployee} type="button" class="btn btn-primary mt-4 " id='buttonstyle1' >Submit</button>
        :
        <button onClick={editemploye} type="button" class="btn btn-primary mt-4 " id='buttonstyle1' >Edit employee</button>

        }

         
       </div>


        </div>

        <div className="rightsectionaddemp shadow p-5 text-center col-md-5">

     <h4>Edit employee data</h4>

       <p>Please enter Valid ID of employee</p>

        <label for="" class="form-label mt-2 ">Emp ID</label>
         <input type="text" onChange={validateemployee} class="form-control text-center " name="" id="employeeIDselect" aria-describedby="helpId" placeholder="xxxxxx"/>


        {/* Delete employee  */}

        <h4 className='mt-5' >Delete employee</h4>

        <p>Please enter Valid ID of employee</p>

        <label for="" class="form-label mt-2 ">Emp ID</label>
        <input type="text" onChange={validateemployee} class="form-control text-center " name="" id="employeeIDselecttodelete" aria-describedby="helpId" placeholder="xxxxxx"/>
  
        <button onClick={deleteemployee} type="button" class="btn btn-primary mt-3 " id='buttonstyle1' >Delete employee</button>

        </div>

        

      </div>

    </div>
  )
}

export default Addeditemployee