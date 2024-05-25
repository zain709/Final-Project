import React,{useState , useEffect} from 'react'
import "./contactmanagement.scss"

import axios from 'axios'
import backendwebsite from "../../backendwebsite.json"

import Simplelistgroup from '../../components/listgroup/simplelistgroup'



function Contactmanagement() {

  let [contacts, setcontacts] = useState([]);

  useEffect(() => {
   
    axios.get(backendwebsite[0].backendwebsite+`/contact`)
    .then(res => {
      let newitem={}
      let array=[]
      res.data.forEach(e=>{
        newitem={
          name:e.name,
          description:e.description+` ( ${e.number} ) `,
          code:e._id
        }
        array.push(newitem)
      })
      setcontacts(contacts=array)
    })
    
    })

    let addcontact=()=>{

      let name=document.getElementById("name").value
      let number=document.getElementById("number").value
      let description=document.getElementById("description").value

      if( name!="" && number!="" && description!="")
      {

          if(name.match(/^[A-Za-z\s]*$/) && description.length<80 && number.length<12)
          {
          
            axios.post(backendwebsite[0].backendwebsite+'/contact', {
              name:name,
              description:description,
              number:number
            
            
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
              alert("Unsuccessfull for unknown reason")
            });

            alert("Successfully Added!")

          }
          else{
            alert("Incorrect details")
          }

      }
      else
      {
        alert("Please enter all detials")
      }

    }


    let deletecontacct=()=>{

      let id=document.getElementById("ID").value
      let flag=false

      contacts.forEach(e=>{
        if(e.code==id)
        {
          axios.delete(backendwebsite[0].backendwebsite+`/contact/${id}`)
         .then();
          alert("Deleted!")
          flag=true
        }
      })

      if(flag==false)
      {
        alert("Please enter valid ID")
      }

      

    }

  return (
    <div>

      <div className="row">
        <div className="col-md-6 p-4">

            <h2>Add contact</h2>
            <p>*Putt Correct details</p>

            <div className="row mt-4">
            <div className="col-md-6"> 

             
                <label for="" class="form-label">Name</label>
                <input type="text"
                  class="form-control" name="" id="name" aria-describedby="helpId" placeholder=""/>
               
                <button type="button" onClick={addcontact} id='buttonstyle1' class="btn btn-primary px-4 mt-4">Add</button>

            </div>
            <div className="col-md-6">  
            
              <label for="" class="form-label">Number</label>
                <input type="text"
                  class="form-control" name="" id="number" aria-describedby="helpId" placeholder=""/>

              <label for="" class="form-label">Description</label>
                <textarea type="text"
                  class="form-control" name="" id="description" aria-describedby="helpId" placeholder=""/>

            </div> 
            </div>

          <div className="contactdivider">

          </div>

            <h4>Delete contact</h4>
            <label for="" class="form-label">Enter valid ID</label>
            <input type="text"
                  class="form-control" name="" id="ID" aria-describedby="helpId" placeholder=""/>
               
            <button type="button" onClick={deletecontacct} id='buttonstyle1' class="btn btn-primary px-4 mt-4">Delete</button>


        </div>
        <div className="contactright shadow p-4 col-md-6">

          <Simplelistgroup title="Contacts" titlemessage="List of contacts" listitems={contacts} />

        </div>
      </div>

    </div>
  )
}

export default Contactmanagement