import React,{useState,useEffect} from 'react'
import "./Settings.scss"
import Simplelistgroup from "../../components/listgroup/simplelistgroup.jsx"
import axios from 'axios'
import backendwebsite from "../../backendwebsite.json"

function Settings() {

    let [users, setusers] = useState([]);

    useEffect(()=>{

        axios.get(backendwebsite[0].backendwebsite+`/user`)
       .then(res => {
        setusers(users=res.data)
       })

    })

    // Delete User

    let deleteuser=()=>{
        
        let id=document.getElementById("userID").value
        let flag=false

        users.forEach(e=>{
        if(e.code==id)
        {
          axios.delete(backendwebsite[0].backendwebsite+`/user/${id}`)
         .then();
          alert("Deleted!")
          flag=true
          document.getElementById("userID").value=""
        }
      })

      if(flag==false)
      {
        alert("Please enter valid ID")
      }

       }


    //   Add new user

    let addnewuser=()=>{
        let user=document.getElementById("username").value
        let pass=document.getElementById("password").value
        if(user!="" && pass!="")
        {
            axios.post(backendwebsite[0].backendwebsite+'/user', {
                username:user,
                password:pass,              
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
                alert("Unsuccessfull for unknown reason")
              });
  
              alert("Successfully Added!")
            document.getElementById("username").value=""
            document.getElementById("password").value=""
        }
        else{
            alert("Please enter Valid Detials")
        }
    }
    
  return (
    <div>


            <div className="row">

          
            
            <div className="col-md-6 mt-4 p-5">

            <h4> User management </h4>
            <p>Add/Delet/Edit User</p>

            <form action="" className='w-75'>
   
              <label for="" class="form-label">Username</label>
              <input type="text"
                class="form-control" name="" id="username" aria-describedby="helpId" placeholder="username"/>

              <label for="" class="form-label mt-4">Password</label>
               <input type="text"
                class="form-control" name="" id="password" aria-describedby="helpId" placeholder="password"/>

                <button type="button" id='buttonstyle1' onClick={addnewuser} class="btn btn-primary mt-4 ">Submit</button>
            
            </form>

         

               <label for="" class="form-label mt-5 ">Enter User ID to delete</label>
               <input type="text"
                class="form-control w-75" name="" id="userID" aria-describedby="helpId" placeholder="Username ID"/>

                <button type="button" id='buttonstyle1' onClick={deleteuser} class="btn btn-primary mt-4 ">Delete</button>


            </div>
            <div className="contactright shadow p-5 col-md-6 ">

                <Simplelistgroup

                    title="Users list"
                    titlemessage="list of users in Database"
                    listitems={users}
                
                />


            </div>

            </div>



    </div>
  )
}

export default Settings