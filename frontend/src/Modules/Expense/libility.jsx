import React,{useEffect,useState} from 'react'
import "./libility.scss"

import Smallcards from '../../components/Cards/smallcards'
import TableComponent from '../../components/Tables/TableComponent'
import SimpleModal from '../../components/Modal/Modal'

import axios from 'axios'
import backendwebsite from "../../backendwebsite.json"

function Libility() {

  let [libility,setlibility]=useState([])

  useEffect(() => {

    axios.get(backendwebsite[0].backendwebsite+`/libility`)
    .then(res => {
      res.data.forEach(e=>{
        delete e.__v
      })
      setlibility(libility=res.data)
    })

    })

  let columns=["#","ID","Name","Description","Price","Date"]

  // Libility Actions

  //Submit libility
  let submitlibility=()=>{

    let name= document.getElementById("name").value
    let description= document.getElementById("description").value
    let amount= document.getElementById("amount").value

    if( name!="" && description!="" && amount!="" )
    {
      axios.post(backendwebsite[0].backendwebsite+'/libility', {
        name:name,
        description:description,
        amount:amount,   
      })
      .then(function (response) {
        console.log(response);
        alert("Successfully send!")
      })
      .catch(function (error) {
        console.log(error);
        alert("Unsuccessfull for unknown reason")
      });

     document.getElementById("name").value ="" 
      document.getElementById("description").value   =""     
      document.getElementById("amount").value =""      
  
    }
    else
    {
        alert("Please enter detials")
    }


  }

  // Delete libility

  let delatelibility=()=>{

    let id=document.getElementById("lid").value
    let flag=false
    libility.forEach(e=>{   
      if(e._id==id)
      {
      
        axios.delete(backendwebsite[0].backendwebsite+`/libility/${id}`)
       .then();
        alert("Deleted!")
        flag=true
        document.getElementById("lid").value=""
      }
    })
    if(flag==false)
    {
      alert("Please enter valid ID")
    }
  }


  
  let newlibilitycontent=<div className="">
    <h5 className='text-center mt-3' >Enter Valid details</h5>
    <p className='text-center' > *Please enter Valid Detials </p>

    
      <label for="" class="form-label mt-2">Name</label>
      <input type="text"
        class="form-control" name="" id="name" aria-describedby="helpId" placeholder="Enter name"/>

      <label for="" class="form-label mt-2">Description</label>
      <textarea type="text"
        class="form-control" name="" id="description" aria-describedby="helpId" placeholder="Enter description"/>

      <label for="" class="form-label mt-2">Amount</label>
      <input type="number"
        class="form-control mb-4" name="" id="amount" aria-describedby="helpId" placeholder="Enter amount"/>

    </div> 


  

  return (
    <div>

      <div className="libilityupper row">


        <div className="col-md-4 p-4 ">
        <h3 className='mt-3' >Libility management</h3>
        <p>Add or Delete Libility</p>
        </div>

        <div className="col-md-4">
          <h4>Delete Libility</h4>       
          <label for="" class="form-label">Enter Valid ID</label>
          <input type="text"
            class="form-control" name="" id="lid" aria-describedby="helpId" placeholder="ID"/>
          <button type="button" id="buttonstyle1" onClick={delatelibility} class="btn btn-primary mt-2"> Delete </button>      
        </div>

        <div className="col-md-4 p-4">
        <Smallcards  title="liblity" counter={libility.length} link="Click to add new libility" clickaction={()=>{document.getElementById("showmodalbutton").click()}} />
        </div>


      </div>

    <div className="libilitylower p-4">
      <TableComponent columns={columns} data={libility} />
    </div>

      <SimpleModal 
      title="New Libility"
      closebuttontext="cancel"
      savebuttontext="Add"
      showsavebutton="true"
      Content={newlibilitycontent}
      modalaction={submitlibility}
      />

    </div>
  )
}

export default Libility