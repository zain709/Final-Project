import React,{useEffect,useState} from 'react'
import "./Employeedata.scss"

import Smallcards from '../../components/Cards/smallcards'
import TableComponent from '../../components/Tables/TableComponent'

import axios from 'axios'
import backendwebsite from "../../backendwebsite.json"


function Employeedata() {

  let [employees, setemployees] = useState([]);
  let [dbemployees, setdbemployees] = useState([]);
  let [sallary, setsallary] = useState();

  
  useEffect(() => {


  
    axios.get(backendwebsite[0].backendwebsite+`/employees`)
    .then(res => {
      let total=0
      let dbm=[]
       res.data.forEach(element => {

         delete element.__v
         if(element.designation="Delivery boys")
         {
          dbm.push(element)
         }
          total=total+element.sallary
       });
       setemployees(res.data)     
       setsallary(total)
       setdbemployees(dbm)
    })

    })

  let columns=["#","ID","Name","Designation","Address","Sallary","Number"]



  return (
    <div>

      <div className="upperpartemployee mt-4 mx-4 row ">
        <div className="col-md-4">
        <Smallcards bg="2" title="Salary" link="Total sum of sallaries"  counter={sallary} />

        </div>
        <div className="col-md-4">
        <Smallcards bg="1" title="Empoyees" link="Number of total employees"  counter={employees.length} />
        </div>
        <div className="col-md-4">
        <Smallcards bg="2" title="Delivery boys" link="Number of Delivery persons" counter={dbemployees.length}  />
        </div>
      </div>

      <div className="tablesectionemployee mt-4 mx-4 shadow px-5">
      <TableComponent columns={columns} data={employees} />
      </div>

    </div>
  )
}

export default Employeedata