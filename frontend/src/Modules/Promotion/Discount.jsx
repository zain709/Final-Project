import React, { useState,useEffect } from 'react'
import "./Discount.scss"
import Simplelistgroup from '../../components/listgroup/simplelistgroup'
import axios from 'axios'
import backendwebsite from "../../backendwebsite.json"


function Discount() {

  let [discounts,setdiscounts]=useState([])
  let [discountscopy,setdiscountscopy]=useState([])
  let [productnames,setproductnames]=useState([])

  useEffect(() => {

    // for getting all Asset detials
     axios.get(backendwebsite[0].backendwebsite+`/discount`)
     .then(res => {
      let arr=[]
      res.data.forEach(element => {

        let item={
          name:element.productname,
          description:element.description,
          code:element.discount+"/RS"
        }
        arr.push(item) 
      });
      setdiscounts(arr)
      setdiscountscopy(arr)
     })

    // get product names
    axios.get(backendwebsite[0].backendwebsite+`/products`)
    .then(res => {
      let arr=[]
    res.data.forEach(element => {
      arr.push(element.name)
    });
    setproductnames(arr)  
    })
   },[])


   //Send and submit discount
   let submitdiscount=()=>{

    let name=document.getElementById("productname").value
    let description=document.getElementById("description").value
    let discount=document.getElementById("discount").value
    // validation
    if(name!="--Product name--" && description!="" && discount!="")
    {
        if(description.length<80)
        {
          //sending
          axios.post(backendwebsite[0].backendwebsite+'/discount', {
            productname:name,
            description:description,
            discount:discount,     
          })
          .then(function (response) {
            console.log(response);
            alert("Successfully send!")
          })
          .catch(function (error) {
            console.log(error);
            alert("Unsuccessfull for unknown reason")
          });
        }
        else
        {
          alert("Discription: Only 80 alphabets allowed!")
        }
    }
    else
    {
      alert("Please enter all detials")
    }      

   }


   let namefilter=()=>{

    let textcontrol=document.getElementById("discountnamefilter").value
    let newarr=[]
    if(textcontrol!="")
    {
    discounts.forEach(element => {
      let text=element.name.toLowerCase()
      if(text.startsWith(textcontrol.toLowerCase()))
      {
       newarr.push(element)
      }
    });

    setdiscounts(discounts=newarr)
  }
  else if(textcontrol=="")
  {
    setdiscounts(discounts=discountscopy)
  }
   
   }

  return (
    <div className='discountbody shadow-lg animate__animated animate__fadeIn' >

        <div className='text-center pt-2 text-light animate__animated animate__zoomIn'>
        <h4>Discounts</h4>
        <p>These discounts will show on website promotion page</p>
        </div>
        <div className="discountinnerbody shadow animate__animated animate__fadeInUp ">

        <div className="row">

                {/* Left side form */}

            <div className="col-md-6 p-4 mt-2">

              <h5>Add a discount</h5>  
              <p>*Add detials carefully</p>

              <label for="exampleFormControlInput1" class="form-label my-2">Product name</label>
           
                
                <select class="form-control w-75" name="" id="productname">
                  <option>--Product name--</option>
                  { productnames.map((e)=>
                   <option>{e}</option>
                  ) } 
                 
                </select>
          

              <label for="exampleFormControlInput1" class="form-label my-2">Discount discription</label>
              <textarea type="text" class="form-control mb-4 w-75" id="description" placeholder="Discription"/>    
      
              <label for="" class="form-label mt-2 ">Discount</label>

                            <div class="input-group w-75 mb-3">
                            <input type="Number" class="form-control" id="discount" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <span class="input-group-text" id="basic-addon2">Rs</span>
                            </div>

              <button type="button" onClick={submitdiscount} class="btn btn-primary px-4" id='buttonstyle3'>Submit</button>

            </div>

                {/* Right side form */}

            <div className="col-md-6 p-4">
            <label for="exampleFormControlInput1" class="form-label my-2">Search Discount</label>
            <input type="text" class="form-control mb-4 w-75" id="discountnamefilter" onChange={namefilter} placeholder="Product name"/>    
            <div className='discountslist' >          
            <Simplelistgroup title="Discount" titlemessage="List of all Discounts" listitems={discounts} />
            </div>
            </div>


        </div>

        </div>
    </div>
  )
}

export default Discount