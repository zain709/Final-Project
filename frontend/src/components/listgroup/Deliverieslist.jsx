import React,{useState,useEffect} from 'react'
import "./Deliverieslist.scss"
import Simplelistgroup from '../../components/listgroup/simplelistgroup'
import TableComponent from '../../components/Tables/TableComponent';

import axios from 'axios'
import backendwebsite from "../../backendwebsite.json"

function Deliverieslist() {


    let [deliveryboyslist, setdeliveryboyslist] = useState([]); 
    let [deliveryorders, setdeliveryorders] = useState([]); 
    let [tabledata, settabledata] = useState([]); 
    


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
                   status:element.status
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
  

    let columns=["#","ID","Name","Order","Number","Address"]
    

    let showorderslist=()=>{
        let db=document.getElementById("deliveryboynameselect").value
        if(db!=="--Select name--")
        {
            let deliveries=[]
            deliveryorders.forEach(element => {
               if(element.status.slice(8)===db)
               {    
                    delete element.status
                    deliveries.push(element)
               }
            });
            
            settabledata(tabledata=deliveries)     
            console.log(tabledata)
        }
        else
        {
            settabledata(tabledata=[])     
        }
    }


  return (
    <div>

        <div className="Deliverylistpage row">

            <div className="p-4 col-md-9">

                <h5> Delivery orders </h5>
                <p>list of assigned orders</p>

               <div class="mb-3 w-50">
                 <label for="" class="form-label">Filter orders by name</label>
                 <select onChange={showorderslist} class="form-control" name="" id="deliveryboynameselect">
                 <option>--Select name--</option>
                    { deliveryboyslist.map((e)=>
                   <option>{e.name}</option>
                   ) }
                 </select>
               </div>

                <div className="tablesection">
                        <TableComponent columns={columns} data={tabledata}/>
                </div>

            </div>
            <div className="rightsidedelivery py-4 col-md-3">

            <Simplelistgroup
            title="Delivery boys"
            titlemessage="List of delivery boys"
            listitems={deliveryboyslist}
            />

            </div>
            
        </div>

    </div>
  )
}

export default Deliverieslist