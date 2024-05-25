import React, { Component } from 'react'
import BasicCard from '../../../components/Cards/BasicCard'
import backendwebsite from "../../../backendwebsite.json"
import axios from 'axios'
import Basicbanner from '../../../components/Cards/basicbanner'
export class Leads extends Component {

    constructor(props) {

   
      super(props)
      this.state = {
         
         leads1stcopy:[],   
         leadslists:[],
         currentmonthfeedback:0,
         prevmonthfeedback:0
      }
    }


    componentDidMount(){
      axios.get(backendwebsite[0].backendwebsite+`/leads`)
      .then(res => {
        let newdata = res.data;
        this.setState({
          leads1stcopy:newdata,
          leadslists:newdata
         } )
       
      })
      axios.get(backendwebsite[0].backendwebsite+`/leads/monthratio`)
      .then(res => {
        let newdata = res.data;
        this.setState({
          currentmonthfeedback:res.data[0],
          prevmonthfeedback:res.data[1]
          
         } )
       console.log(this.state.currentmonthfeedback)
       console.log(this.state.prevmonthfeedback)
      })
     
    }
  
   

    render() {

    let thismonthleads=250;
    let previousmonthsleads=150;    


//List rendering of table leads

let numbering=0
   let tableitems=this.state.leadslists.map((e)=>
   
   <tr>
   <th scope="row">{e._id}</th>
      <td>
          <div class="d-flex align-items-center">
          {e.name} 
         </div>
      </td>
      <td>{e.email}</td>
      <td className='feedbackintable' >
       {e.message}
      </td>
</tr>

   )



   // Function to search through table

   let changeleadstable=()=>{

    let un=document.getElementById("inlineFormInputGroupUsername").value
    let newarr=[]
    if(un.match(/^[A-Za-z ]+$/))
    {
        let checking=0
       
         if(un!="")
        {
            
           this.state.leadslists.forEach(element => {
               if(element.name.toLowerCase().startsWith(un.toLowerCase()))
               {
               
                 checking=1
                 newarr.push(element)
                 this.setState({
                     leadslists:newarr
                 })
               }
           });

           if(checking==0)
           {
            let newa=this.state.leads1stcopy
            this.setState({
                leadslists:newa
            }) 
           }
        }
        else if(un="")
        {
           let newa=this.state.leads1stcopy
            this.setState({
                leadslists:newa
            })
        }
    }
    else
    {
       
       document.getElementById("inlineFormInputGroupUsername").value=""
       let newa=this.state.leads1stcopy
       this.setState({
           leadslists:newa
       })
    }
 }

 let deletelead = ()=>{

  let lid= document.getElementById('leadid').value
  if ( lid!="")
  {

  this.state.leads1stcopy.forEach(e=>{

    if(e._id == lid)
    {
      axios.delete(backendwebsite[0].backendwebsite+`/leads/${lid}`)
      .then();
       alert("Deleted!") 
    }

  })


  }

 }


    return (

      <div>

      <div className="container mt-3">

            {/* Upperpart of leads */}

          <div className="row " id="upperpartleads">

             {/* 1st card */}
              <div className=" offset-1 col-md-5">    
              <BasicCard
              title="Leads stats"
              newval={this.state.currentmonthfeedback}
              prevval={this.state.prevmonthfeedback}
              unit="Leads"
              middletext="total Leads in month"
              interval="month"
              loweroption1="1"
              />

              </div>

              {/* 2nd card */}
              <div className="col-md-5 p-4">
             
              <h6>Delete Leads</h6>
             
                <label for="" class="form-label">Enter Valid ID</label>
                <input type="text"
                  class="form-control" name="" id="leadid" aria-describedby="helpId" placeholder=""/>
                <button type="button" class="btn btn-primary mt-2 " onClick={deletelead} id='buttonstyle1' >Delete</button>

              </div>
          </div>

            {/* Lower part of Leads   */}

        <div className="row" id="lowerpartleads">

        <div className="tabletoolsfeedback animate__animated animate__fadeIn toolbar d-flex justify-content-between mt-3 mb-2 px-3 ">
          
        <div class="col-lg-3 input-group">
            <span class="input-group-text" id="basic-addon1">Search by name</span>
            <input type="text" id="inlineFormInputGroupUsername" onChange={changeleadstable} class="form-control" placeholder="Username" aria-label="Name" aria-describedby="basic-addon1"/>
       </div>
             

           

          </div>

             {/* Table  */}

        
            <div className="tablesection animate__animated animate__fadeIn">
        

                 <table class="table">
                    <thead>
                       <tr>
                       <th scope="col">#</th>
                         <th scope="col">Name</th>
                         <th scope="col">Email</th>
                         <th scope="col">Message</th>

                       </tr>
                    </thead>
                    <tbody>
                     {tableitems}
                    </tbody>
                    </table>

            </div>

        </div>

      </div>

      </div>

    )
    }
}

export default Leads