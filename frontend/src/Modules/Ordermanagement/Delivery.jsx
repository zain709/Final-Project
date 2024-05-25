import React,{useState,useEffect} from 'react'
import "./Delivery.scss"

import axios from 'axios'
import backendwebsite from "../../backendwebsite.json"

// Componenets
import Simplelistgroup from '../../components/listgroup/simplelistgroup'
import TableComponent from '../../components/Tables/TableComponent';


function Delivery() {




    let [deliveryboys, setdeliveryboys] = useState(["Jamshed","ALi","Ahmad"]);
    let [deliveryorders, setdeliveryorders] = useState([]);
    let [deliveryorderscopy, setdeliveryorderscopy] = useState([]);
    let [deliveryboyslist, setdeliveryboyslist] = useState([]); 


    useEffect(() => {
    axios.get(backendwebsite[0].backendwebsite+`/sales/delivery/pending`)
    .then(res => {
       let dorders=[]
       let item={}
       res.data.forEach(element => {
         
           let ordereditems=[]

           element.order.forEach(element => {
               let iname=element.itemname+"  "+element.itemquantity
               ordereditems.push(iname)
           }); 

           item={
               id:element._id,
               name:element.cname,
               order:ordereditems,
               number:element.cphonenumber,
               address:element.caddress,
               price:element.totalprice, 
           }

           dorders.push(item)

       });
       setdeliveryorders(dorders) 
      

    })


    axios.get(backendwebsite[0].backendwebsite+`/employees`)
    .then(res => {
       let item={}
       let dblist=[]
       res.data.forEach(element => {
         
         
           item={
               name:element.name,
               description:element.address,
               code:element.number,
           }   
           dblist.push(item)  
       });
       setdeliveryboyslist(dblist)       
    })


    })


    let columns=["#","ID","name","order","Number","Address","Total"]
   let data=deliveryorders
  
    // Actions ( Assign delivery )
 
let assigndelivery=()=>{
    let dbname=document.getElementById("dbselect").value
    let orderID=document.getElementById("deliveryorderid").value
   if(orderID!="")
   {
    let flag=false
    deliveryorders.forEach(e=>{
        if(e.id==orderID)
        {
        
            flag=true
            let data={ status:`pending ${dbname}` }
            let response =axios
            .patch(backendwebsite[0].backendwebsite+`/sales/${orderID}`, data)
            .catch((error) => console.log('Error: ', error));
        if (response && response.data) {
            console.log(response);
            console.log(response.data);
          
        }
        alert("Assigned")
    
        }
    })

    if(flag==false)
    {
        alert("Invalid ID")
    }

   }
   else
   {
    alert("Please enter ID")
   }
}


//  Finish order

let finishorder=()=>{
    let orderID=document.getElementById("orderidDelivery").value
   if(orderID!="")
   {
    let flag=false
    deliveryorders.forEach(e=>{
        if(e.id==orderID)
        {
            flag=true
            let data={ status:`finished` }
            let response =axios
            .patch(backendwebsite[0].backendwebsite+`/sales/${orderID}`, data)
            .catch((error) => console.log('Error: ', error));
        if (response && response.data) {
            console.log(response);
            console.log(response.data);
          
        }
        alert("Finished")
      
        }
    })

    if(flag==false)
    {
        alert("Invalid ID")
    }

   }
   else
   {
    alert("Please enter ID")
   }
}


let cancelorder=()=>{

    let orderID=document.getElementById("orderidDelivery").value
    if(orderID!="")
    {
     let flag=false
     deliveryorders.forEach(e=>{
         if(e.id==orderID)
         {
             flag=true
             axios.get(backendwebsite[0].backendwebsite+`/sales/cancel/${orderID}`)
             .then(res => {             
                console.log("Deleted")  
             })
       
         }
     })
 
     if(flag==false)
     {
         alert("Invalid ID")
     }
 
    }
    else
    {
     alert("Please enter ID")
    }
}

  return (
    <div>

        <div  className="row">
            <div className="col-9 py-4">

            <h5>Deliveries</h5>

    <p>List of Delivery orders</p>
                
                <div className="deliverytable mt-4">
                <TableComponent columns={columns} data={data} />
                </div>

                <div className="deliveriesactions row">

                    <div className="col-md-6">

                 <h6>Assign Delivery Boy</h6>
                <div class="mt-4 w-75">
                 <label for="exampleFormControlInput1" class="form-label">Assign by ID</label>
                <div className="row">
                 <div className="col-6">
                  <select class="form-control d-inline" name="" id="dbselect">
                   { deliveryboyslist.map((e)=>
                    <option>{e.name}</option>
                    )}
                  </select>
                  </div>
                  <div className="col-6">
                  <input type="email"  class="form-control d-inline" id="deliveryorderid" placeholder="order ID"/>
                   </div>
                   </div>
                </div>
                <button type="button" onClick={assigndelivery} class="btn btn-primary mt-3 mb-4" id='buttonstyle1' >Assign</button>


                    </div>
                    <div className="col-md-6">
                    <h6>Delivery actions</h6>
                <div class="mt-4 w-75">
                 <label for="exampleFormControlInput1" class="form-label">Search by ID</label>
                 <input type="email"  class="form-control" id="orderidDelivery" placeholder="order ID"/>
                </div>


                <button type="button" onClick={finishorder} class="btn btn-primary mt-3 mb-4" id='buttonstyle1' >Complete</button>
                <button type="button" onClick={cancelorder}  class="btn btn-primary mt-3 mx-4 mb-4 " id='buttonstyle2' >Cancel</button>



                    </div>

                </div>

            </div>
            <div className="deliveryrightsection col-3">


            
            <Simplelistgroup

                title="Delivery boys"
                titlemessage="list of delivery boys"
                listitems={deliveryboyslist}
            />

            </div>
        </div>
        
    </div>
  )
}

export default Delivery