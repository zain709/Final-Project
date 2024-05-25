import React,{useEffect,useState} from 'react'
import "./dineinpick.scss"
import TableComponent from '../../components/Tables/TableComponent'

import axios from 'axios'
import backendwebsite from "../../backendwebsite.json"

function Dineinpick() {

    let [dineinorders, setdineinorders] = useState([]);
    let [dineinorderscopy, setdineinorderscopy] = useState([]);
    let [takeawayorders, settakeawayorders] = useState([]);
    let [takeawayorderscopy, settakeawayorderscopy] = useState([]);

    useEffect(() => {

        // for getting all Asset detials
         axios.get(backendwebsite[0].backendwebsite+`/sales/dinein/pending`)
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
                    price:element.totalprice,
                    tablenumber:element.cordertype.replace(/\D/g, '')
                }

                dorders.push(item)

            });
           setdineinorders(dorders) 
           setdineinorderscopy(dorders)

         })
     
         // for getting monthly and yearly
     
         axios.get(backendwebsite[0].backendwebsite+`/sales/takeaway/pending`)
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
                    price:element.totalprice,
                    number:element.cphonenumber
                }

                dorders.push(item)

            });
           settakeawayorders(dorders) 
           settakeawayorderscopy(dorders)

         }) 

    },[])



    let columns=["#","ID","name","order","price","Table"]
    let data=dineinorders
    
    let columns2=["#","ID","name","order","price","Number"]
   


    // FIltering actions

    let filterdinein=()=>{
        
        let textcontrol=document.getElementById("dineinenamefilter").value
        let newarr=[]
        if(textcontrol!="")
        {
            dineinorders.forEach(element => {
          let text=element.name.toLowerCase()
          if(text.startsWith(textcontrol.toLowerCase()))
          {
           newarr.push(element)
         
          }
        });

        
        setdineinorders(dineinorders=newarr)
       
      }
      else if(textcontrol=="")
      {
        setdineinorders(dineinorders=dineinorderscopy)
      }

    }

    let takeaway=()=>{
        
        let textcontrol=document.getElementById("takeawayordersfilter").value
        let newarr=[]
        if(textcontrol!="")
        {
            takeawayorders.forEach(element => {
          let text=element.name.toLowerCase()
          if(text.startsWith(textcontrol.toLowerCase()))
          {
           newarr.push(element)
         
          }
        });

        
        settakeawayorders(takeawayorders=newarr)
       
      }
      else if(textcontrol=="")
      {
        settakeawayorders(takeawayorders=takeawayorderscopy)
      }

    }



    // order actions

    let completeorder=async()=>{
        let orderid=document.getElementById("trackorder").value
        if(orderid!="")
        {
            
            let data={status:"finished"}

            let response = await axios
            .patch(backendwebsite[0].backendwebsite+`/sales/${orderid}`, data)
            .catch((error) => {

                console.log('Error: ', error)
             
        });
        if (response && response.data) {
            console.log(response);
            console.log(response.data);
           
        }
        alert("Finished")

      

        }
        else
        {
            alert("Please Enter order ID 1st")
        }

    }
 
    let cancelorder=async()=>{

        let orderid=document.getElementById("trackorder").value
        if(orderid!="")
        {
            
            axios.get(backendwebsite[0].backendwebsite+`/sales/cancel/${orderid}`)
            .then(res => {
             
                if(res.data="deleted")
                {
                    alert("Done!")
                }
                else
                {
                    alert("Error! for unkown reason")
                }


            })
         

        }
        else
        {
            alert("Please Enter order ID 1st")
        }

    }
    

  return (
    <div>
        <div className="dineinbody row">
         <div className="dineinside col-md-6 p-4">

            <h5 className='d-inline' >Dine in orders</h5>

            <span class="badge badge-primary mx-4">{dineinorderscopy.length}</span>

                <div class="mt-4 ">
                 <label for="exampleFormControlInput1" class="form-label">Search by name</label>
                 <input onChange={filterdinein}  type="email" class="form-control" id="dineinenamefilter" placeholder="Customer name"/>
                </div>
                <div className="orderstable mt-4">
                <TableComponent columns={columns} data={data} />
                </div>

           

         </div>
         <div className="takeawayside col-md-6 p-4">


                 <h5 className='d-inline' >Take-Away</h5>
                 <span class="badge badge-primary mx-4">{takeawayorderscopy.length}</span>

                <div class="mt-4">
                 <label for="exampleFormControlInput1" class="form-label">Search by name</label>
                 <input type="email" onChange={takeaway} class="form-control" id="takeawayordersfilter" placeholder="Customer name"/>
                </div>

                <div className="orderstable mt-4">
                <TableComponent columns={columns2} data={takeawayorders} />
                </div>


              

         </div>
        </div>

        <div className="cinfirmdinein text-center mt-2">

<div class="mt-4 w-50 mx-auto ">
 <label for="exampleFormControlInput1" class="form-label">Complete / Cancel order by ID</label>
 <input type="text" class="form-control" id="trackorder" placeholder="Enter ID"/>
</div>

<button type="button" onClick={completeorder} class="btn btn-primary mt-3 mb-4" id='buttonstyle1' >Complete</button>
<button type="button" onClick={cancelorder} class="btn btn-primary mt-3 mx-4 mb-4 " id='buttonstyle2' >Cancel</button>


</div>


    </div>
  )
}

export default Dineinpick