import React, { useState,useEffect } from "react";
import BasicCard from "../../../components/Cards/BasicCard";
import Filterbar from "../../../components/Comps/Filterbar";
import "../../../components/GlobalStyles/GlobalStyles.css";
import TableComponent from "../../../components/Tables/TableComponent";
import axios from "axios";
import backendwebsite from "../../../backendwebsite.json"
import Basicbanner from "../../../components/Cards/basicbanner";
import SimpleModal from "../../../components/Modal/Modal";

function Materials() {
  // Name,quantity,unitprice( of 1 item ), date purchased, expiery date
 
  let [meterials,setmeterials]=useState([])
  let [meterialscopy,setmeterialscopy]=useState([])
  let [expireditems,setexpireditems]=useState([])
  let [expireditemscopy,setexpireditemscopy]=useState([])
  let [emptyitems,setemptyitems]=useState([])
  let [emptyitemscopy,setemptyitemscopy]=useState([])
  let [modalboxcontent,setmodalboxcontent]=useState()
  let [modelbxoxtitle,setmodelbxoxtitle]=useState()
  let [savebutton,setsavebutton]=useState("true")
  




  useEffect(() => {

    // for getting all Asset detials
     axios.get(backendwebsite[0].backendwebsite+`/meterial`)
     .then(res => {
      removingattribute(res.data) 
      setmeterials(res.data)    
      setmeterialscopy(res.data)
     })
   
    //for getting expired items
    axios.get(backendwebsite[0].backendwebsite+`/meterial/expiredalerts`)
    .then(res => {
     removingattribute(res.data) 
     setexpireditems(res.data)
     setexpireditemscopy(res.data) 
        
    })

    //for getting empty items  
    axios.get(backendwebsite[0].backendwebsite+`/meterial/emptyelerts`)
    .then(res => {
     removingattribute(res.data) 
     setemptyitems(res.data)
     setemptyitemscopy(res.data)
    })

   },[])

  

  //Setting tables 
  const columns = ["#", "ID", "Name", "Discription", "price", "quantity","datepurchased","Expiry alert ","Empty alert ","expierydate"];
  const data = meterials 
 




  //---->>>actions

  let removingattribute=(e)=>{
    e.forEach(element => {
      delete element.__v
    });
  }

   //---Showing 1st card model box ( Expire items )

   let showexpireditems=()=>{
    let showmodalbutton=document.getElementById("showmodalbutton")
    setmodelbxoxtitle("Expired Meterial List")
    setsavebutton("false")
    setmodalboxcontent(expireditemscontent())
    
    showmodalbutton.click()
  }


    //---Showing 2nd ard model box ( empty items )

    let showemptyitems=()=>{
      let showmodalbutton=document.getElementById("showmodalbutton")
      setmodelbxoxtitle("Empty Meterial List")
      setsavebutton("false")
      setmodalboxcontent(emptyitemscontent())
      showmodalbutton.click()
    }

    //---showing new Meterial model box
  let addmeterial=()=>{
  let showmodalbutton=document.getElementById("showmodalbutton")
  setmodelbxoxtitle("Add new Meterial")
  setsavebutton("true")
  setmodalboxcontent(newmeterialcontent())
  showmodalbutton.click()

  }

  

    //---Model box save meterial
  let saveandsubmitmeterial=()=>{

    // getting controls

    let name=document.getElementById("name").value
    let Discription=document.getElementById("Discription").value
    let Price=document.getElementById("Price").value
    let expirydate=document.getElementById("expirydate").value

    let Quanity=document.getElementById("Quanity").value
    let expiryalerts= parseInt( document.getElementById("expiryalerts").value )
    let emptyalerts= parseInt( document.getElementById("emptyalerts").value )
    
    if (name!="" && Discription!="" && Price!="" && Quanity!="" && expiryalerts!="" && emptyalerts!="" && expirydate!="")
    {
      console.log("data")
      console.log( typeof(expiryalerts ))
      console.log( typeof( emptyalerts ))
      console.log("--------")

      axios.post(backendwebsite[0].backendwebsite+'/meterial', {
        name:name,
        discription:Discription,
        price:Price*Quanity,
        quantity:Quanity,
        expiryalert: expiryalerts,
        emptyalert: emptyalerts,
        expierydate :expirydate
      })
      .then(function (response) {
        console.log(response);

        alert("Successfuly saved")
        document.getElementById("name").value=""
        document.getElementById("Discription").value=""
        document.getElementById("Price").value=""
        document.getElementById("expirydate").value=""
        document.getElementById("Quanity").value=""
        document.getElementById("expiryalerts").value=""
        document.getElementById("emptyalerts").value=""
        let closemodalbox=document.getElementById("closebutton")
        closemodalbox.click()

      })
      .catch(function (error) {
        console.log(error);
        alert("Unsuccessfull for unknown reason")
      });

    }
    else
    {
      alert("Please fill all detials correctly")
    }


  }

 


  //---->>> Filtering 

  //Tables Of meterials

  let filterbyname=()=>{
    let textcontrol=document.getElementById("namefiltermeterial").value
    let newarr=[]
    if(textcontrol!="")
    {
    meterials.forEach(element => {
      let text=element.name.toLowerCase()
      if(text.startsWith(textcontrol.toLowerCase()))
      {
       newarr.push(element)
      }
    });

    setmeterials(meterials=newarr)
  }
  else if(textcontrol=="")
  {
    setmeterials(meterials=meterialscopy)
  }
   
  }
  
//Expired elerts

    let filterexpirealerts=()=>{
    
      let textcontrol=document.getElementById("expirednamefilter").value
    let newarr=[]
    if(textcontrol!="")
    {
    expireditems.forEach(element => {
      let text=element.name.toLowerCase()
      if(text.startsWith(textcontrol.toLowerCase()))
      {
       newarr.push(element)
      }
    });

    setexpireditems(expireditems=newarr)
    setmodalboxcontent(expireditemscontent())
  }
  else if(textcontrol=="")
  {
    setemptyitems(expireditems=expireditemscopy)
    setmodalboxcontent(expireditemscontent())
  }
  
}

//Empty elerts

let filteremptyealerts=()=>{
    
  let textcontrol=document.getElementById("expirednamefilter").value
let newarr=[]
if(textcontrol!="")
{
emptyitems.forEach(element => {
  let text=element.name.toLowerCase()
  if(text.startsWith(textcontrol.toLowerCase()))
  {
   newarr.push(element)
  }
});

setemptyitems(emptyitems=newarr)
setmodalboxcontent(emptyitemscontent())
}
else if(textcontrol=="")
{
setemptyitems(emptyitems=emptyitemscopy)
setmodalboxcontent(emptyitemscontent())
}

}



  //---->>>Model box contents
  
  // Expired items model box content ( 1st card )

  let expireditemscontent=()=>{

    return <div>
      <label for="name" class="form-label mt-3 ">Meterial name</label>
      <input type="text" onChange={filterexpirealerts} class="form-control mb-3 " id="expirednamefilter" placeholder="Tables"></input>
    
    
      <TableComponent columns={columns} data={expireditems} />

    </div>

  }

  //Model box Empty items Content ( 2nd card at top )

  let emptyitemscontent=()=>{
    return <div>
    <label for="name" class="form-label mt-3 ">Meterial name</label>
    <input type="text" onChange={filteremptyealerts} class="form-control mb-3 " id="emptynamefilter" placeholder="Tables"></input>
  
  
    <TableComponent columns={columns} data={emptyitems} />

  </div>
  }

  //model box new meterial content ( 3rd card at top )

  let newmeterialcontent=()=>{
   return <div className="content">
    
   <h5  className="content text-center "  >Add new meterial</h5>
   <p className="content text-center " >Please fill all detials correctly</p>
    <div className="form">
      <div className="row my-2">

        <div className="col-md-6">
 
            <label for="name" class="form-label mt-3 ">Meterial name</label>
            <input type="text" class="form-control" id="name" placeholder="Tables"></input>

            <label for="Discription" class="form-label mt-3 ">Discription</label>
            <textarea type="text" class="form-control" id="Discription" placeholder="For ousite dine in..."/>

            <label for="Price" class="form-label mt-3 ">Price (Per unit)</label>
            <input type="number" class="form-control" id="Price" placeholder=""></input>

            <label for="Price" class="form-label mt-3 ">Expiry Date</label>
            <input type="Date" class="form-control" id="expirydate" placeholder=""></input>

          
        </div>
        <div className="col-md-6">

            <label for="Price" class="form-label mt-3 ">Quanity</label>
            <input type="number" class="form-control" id="Quanity" placeholder="Numbers of unites"></input>

            <label for="Price" class="form-label mt-3 ">Expiery alerts (Days)</label>
            <input type="number" class="form-control" id="expiryalerts" placeholder="Notify ** days before"></input>

            <label for="Quantity" class="form-label mt-3 ">Empty alerts (Quanity)</label>
            <input type="number" class="form-control" id="emptyalerts" placeholder="Notify if ** items left"></input>
        </div>
      </div>

    </div>

  </div>
  }
 
  // Content for showing Expired items (1st card)

  
  // changing quanity for meterial

  let changequantity = () =>{

    let mid = document.getElementById("meterialID").value
    let quanity = document.getElementById("meterialquantity").value

    if( mid!="" )
    {
      
      meterialscopy.forEach(e=>{
        if(e._id==mid)
        {
          let response = axios
          .patch(backendwebsite[0].backendwebsite+`/meterial/${mid}`, {
            quantity:quanity
          })
          .catch((error) => console.log('Error: ', error));
             if (response && response.data) {
                 console.log(response);
                 console.log(response.data);
               }
          alert("Quanity Added!")
          document.getElementById("lid").value=""
          document.getElementById("meterialID").value=""
        }
      })

    }
    else
    {
      alert("Please Enter ID ")
    }
  }

  // Delete meterial

  let deletemeterial = () =>{

    
    let mid = document.getElementById("meterialID").value


    if( mid!="" )
    {
      
      meterialscopy.forEach(e=>{
        if(e._id == mid)
        {
          axios.delete(backendwebsite[0].backendwebsite+`/meterial/${mid}`)
       .then();
        alert("Deleted!")
        document.getElementById("lid").value=""
        document.getElementById("meterialID").value=""
        }
      })

    }
    else
    {
      alert("Please Enter ID ")
    }

  }

  return (
    <div>
     
        <div className="row mt-4">

        <div className="col-md-4">
        <BasicCard
          title="Expiry alerts"
          newval={expireditems.length}
          unit="Meterial items"
          middletext="going to expired"
          linkaction={showexpireditems}
          interval=""
          linktext="Click to show list"
          loweroption1="2"
        />
        </div>
        <div className="col-md-4">
        <BasicCard
           title="Empty alerts"
           newval={emptyitems.length}
           unit="items"
           middletext="goind to expired"
           linkaction={showemptyitems}
           interval=""
           linktext="Click to show list"
           loweroption1="2"
        />
        </div>
        <div className="col-md-4">
        <Basicbanner
           heading="Meterial"
           text="Add new Metterial"
           buttontext="Add"
           buttonaction={addmeterial}
        />
        </div>

        </div>    
     
        <div className="row shadow mt-2 toolbar animate__animated animate__fadeIn">

        <div class="col-md-3 input-group">
            <span class="input-group-text" id="basic-addon1">Search</span>
            <input type="text" id="namefiltermeterial" onChange={filterbyname} class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
       </div>
       <div class="col-md-3 input-group">
            <button class="input-group-text" onClick={deletemeterial} id="basic-addon1">Delete</button>
            <input type="text" id="meterialID"  class="form-control" placeholder="Meterial ID" aria-label="" aria-describedby="basic-addon1"/>
            <input type="number" id="meterialquantity" onChange={changequantity} class="form-control" placeholder="Quantity" aria-label="Username" aria-describedby="basic-addon1"/>
       </div>

        </div>

      <div className="container" >
        <TableComponent columns={columns} data={data} />
      </div>

    <SimpleModal
    
    modalaction={saveandsubmitmeterial}
    Content={modalboxcontent}
    title={modelbxoxtitle}
    closebuttontext="close"
    savebuttontext="Save"
    showsavebutton={savebutton}
    />

    </div>
  );
}

export default Materials;
