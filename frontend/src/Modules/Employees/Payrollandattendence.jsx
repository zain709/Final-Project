import React,{useState,useEffect} from 'react'
import "./Payrollandattendence.scss"
import Simplelistgroup from '../../components/listgroup/simplelistgroup'

import axios from 'axios'
import backendwebsite from "../../backendwebsite.json"


function Payrollandattendence() {

    let [Listitems, setListitems] = useState([]);
    let [sheetlist, setsheetlist] = useState([]);
  

    useEffect(() => {

      
  
        axios.get(backendwebsite[0].backendwebsite+`/attendence`)
        .then(res => {
          let newitem={}
          let array=[]
          res.data.forEach(e=>{
            newitem={
              name:e.name,
              description:e.attendence+" -> Month:"+e.Month,
              code:e._id
            }
            array.push(newitem)
          })
          setListitems(Listitems=array)
        })
        
        })

        let generatesheet=()=>{


          // Delete OLD sheet

          if(Listitems.length>0){
      
              axios.get(backendwebsite[0].backendwebsite+`/attendence/deletesheet`)
              .then(res => {
                console.log(res.data)
               })
            alert("Already Data existed")

          }

          //  generating sheet

          axios.get(backendwebsite[0].backendwebsite+`/employees`)
        .then(res => {
         
            let d = new Date();
            let month = d.getMonth()+1;
            let sheetitem={}
            res.data.forEach(element => {
            sheetitem={
                name:element.name,
                Designation:element.designation,
                Month:month,
                attendence:0
            }
            sheetlist.push(sheetitem)
          });      
        })

          console.log(sheetlist)
          

          
          // Posting new sheet 

          sheetlist.forEach(element => {
                axios.post(backendwebsite[0].backendwebsite+'/attendence/generatesheet', {
                name:element.name,
                Designation:element.Designation,
                Month:element.Month,
                attendence:0
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);            
                  });      
            });
        }


    let markattendence=async()=>{

      let ID=document.getElementById("EmployeeID").value

      if(ID!="")
      {
        axios.get(backendwebsite[0].backendwebsite+`/attendence`)
        .then(res => {    
          res.data.forEach(e=>{
            if(e._id==ID)
            {
            
              let data={
              attendence:e.attendence+1
              }

           let response = axios
           .patch(backendwebsite[0].backendwebsite+`/attendence/${ID}`, data)
           .catch((error) => console.log('Error: ', error));
              if (response && response.data) {
                  console.log(response);
                  console.log(response.data);
                }
                alert("Attendence Marked")
            }
          })
          
        })
  
  //  

}
else
{
  alert("PLease put ID 1st")
}

    }

    let Payroll=()=>{

      let name=document.getElementById("Employeename").value
      let amount=document.getElementById("Amounttopay").value

      if(name!="" && amount!="" && name.match(/^[A-Za-z\s]*$/))
      {
        axios.post(backendwebsite[0].backendwebsite+'/libility', {
          name:name + " (Payroll)",
          description:"Employee Payroll",
          amount:amount
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          alert("Unsuccessfull for unknown reason")
        });
        alert("Paid")
      }
      else
      {
        alert("Please enter valid name / pay")
      }

    

    }

  return (
    <div>

        
        <div class="payroll row">
         <div className="leftsidepayroll col-md-6 p-4">
            <h5>Attendece</h5>
           
              <label for="" class="form-label">Employee ID</label>
              <input type="text"
              class="form-control w-75" name="" id="EmployeeID" aria-describedby="helpId" placeholder=""/>
              <button type="button" id='buttonstyle3' onClick={markattendence} class="btn btn-primary mt-3 ">Mark Attendence</button>           
              <button type="button" id='buttonstyle2' onClick={generatesheet} class="btn btn-primary mt-3 mx-4 ">Generate Sheet</button>           

                <div className="attendencelist mt-4">

                <Simplelistgroup title="Attendence" titlemessage="Employees Attendence Sheet" listitems={Listitems}/>                        

                </div>
           
         </div>
         <div className="rightsitepayroll col-md-6 p-4 shadow">


              <h5>Payroll</h5>

              <label for="" class="form-label mt-4">Employee Name</label>
              <input type="text"
              class="form-control w-75" name="" id="Employeename" aria-describedby="helpId" placeholder=""/>
              <label for="" class="form-label mt-4 ">Amount to pay</label>
              <input type="number"
              class="form-control w-75 " name="" id="Amounttopay" aria-describedby="helpId" placeholder=""/>
             
              <button type="button" id='buttonstyle3' onClick={Payroll} class="btn btn-primary mt-4 px-4 ">Pay</button>           
            

         </div>
        </div>

    </div>
  )
}

export default Payrollandattendence