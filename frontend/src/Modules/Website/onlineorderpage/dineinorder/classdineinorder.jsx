import React, { Component } from 'react'
import "./dineinorderstyle.scss"
import {Modal} from "bootstrap"
import Rating from '@mui/material/Rating';

import deletebuttonicon from "../../../../images/deleteicondineinorder.png"

import axios from 'axios'
import backendwebsite from "../../../../backendwebsite.json"

export class Classdineinorder extends Component {


  constructor(props) {
    super(props)
    
    this.state = {
        displayproperty:'none',
        pe:'auto',
        o:"1",
        stateitems:[],
        
        cinfirmitems:[],
        customername:"",
        customeremail:"",
        customerphonenumber:"",
        ordertype:"",
        ordertablenumber:0,
        customerlocation:"",

        alertheading:"General Message",
        alertmessageheading:"Empty or invalid Data",
        alertmessage:"Please fill all data correctly",
        warningalertdisplay:"none",

        cartmodeldisplay:"none",

        cinfirmboxdisplay:"none",
        sendorder:0,
        totalprice:0,
        warningdisplay:"none",   
        locationboxdisplay:"none",   

        ratingusername:"",
        ratingemail:"",
        ratingfeedback:"",
        ratingstarts:0,
        cetagoriesofmenue:[],
        discount:0

    }
  }

  componentDidMount() {
  
    axios.get(backendwebsite[0].backendwebsite+`/products/menue`)
    .then(res => {

      this.setState({
        cetagoriesofmenue:res.data
      })
                 
    })
  
  }

  render() {

    let cetagories = this.state.cetagoriesofmenue
  
    let stateelements=[]
    let itemcounting=0;
  
  
    // Functions

    let modelfunctionshow=()=>{
    
        this.setState({

            displayproperty:"block",
            pe:"none",
            o:"0.5"

        })
        
      
     }

   
    
     let modelfunctionhide=()=>{


        this.setState({

            displayproperty:"none",
            pe:"auto",
            o:"1"
        })
      
     }
    
  
      let itemcountingfunct=()=>{
        stateelements.push(0)  
       
        this.state.stateitems.push(0)
        
        itemcounting+=1
        
      }


      let additem=(e)=>{
          let getid=e.target.id
          let gid=getid.replace(/\D/g, '')
    
          this.state.stateitems.splice(gid-1,1,this.state.stateitems[gid-1]+1)
          // this.state.totalprice+=
        let newarr=this.state.stateitems
        this.setState({
            stateitems:newarr
        })
         
    
   
    }

    let cinfirmorder=()=>{

      // validating voucher code
      let voucher = document.getElementById("voucher").value
      if( voucher!="" )
      {

        axios.get(backendwebsite[0].backendwebsite+`/voucher/validate`,{
          params: {
            code:voucher,
            price: this.state.totalprice
          }
        })
    .then(res => {

      if (res.data[0] == "found")
      { 
          alert("Vouched Claimed!")
          this.setState({
            totalprice:res.data[1]
          })
          document.getElementById("voucher").value = ""
      }
      else
      {
          alert( " Voucher Invalid or Expired! " )
          return 0
      }
    
     })

      }
  
     //validate if there is items in cinfirm list
      if(this.state.cinfirmitems.length!=0)
      { 
        //will validate user name and email
        if(this.state.customername.match(/^[a-zA-Z\s]*$/) && this.state.customeremail.match(/\S+@\S+\.\S+/))
        {

          //will check if username and email is empty
        if(this.state.customername!="" && this.state.customeremail!="")
        {
          //will validate if user edit order type
          if(this.state.ordertype!="" && this.state.ordertype!="Select order type")
          {
              // for validating Dine in and table number
              if(this.state.ordertype=="Dine in" && this.state.ordertablenumber!="")
              {

                document.getElementById("showcart").click()
              
              }
              

              // for validating take away and phone number
              else if(this.state.ordertype=="Take Away" && this.state.customerphonenumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im))
              {
         
                document.getElementById("showcart").click()

              }
              

    

              //for delivery validating

             else if(this.state.ordertype=="Delivery" && this.state.customerlocation!="" && this.state.customerphonenumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im) )
              {
         
                document.getElementById("showcart").click()
      
              }
              

              else
              {
               
                if(this.state.ordertype=="Dine in")
                {
                  let dataExportModal = new Modal(document.getElementById('exampleModalNotification'))
                  this.setState({
                    warningalertdisplay:"block",
                    alertheading:"Warning",
                    alertmessageheading:"Invalid Table number",
                    alertmessage:"Enter Table number"
        
                  })  
                  dataExportModal.show()
                  
                }
                if(this.state.ordertype=="Take Away")
                {
                   let dataExportModal = new Modal(document.getElementById('exampleModalNotification'))
                  this.setState({
                    warningalertdisplay:"block",
                    alertheading:"Warning",
                    alertmessageheading:"Invalid phone number",
                    alertmessage:"Enter valid phone number"
        
                  })  
                  dataExportModal.show()
                 
                }
                if(this.state.ordertype=="Delivery")
                {
                  let dataExportModal = new Modal(document.getElementById('exampleModalNotification'))
                  this.setState({
                    warningalertdisplay:"block",
                    alertheading:"Warning",
                    alertmessageheading:"Invalid phone number/address",
                    alertmessage:"Enter valid phone number and address"
        
                  })  
                  dataExportModal.show()
                }
                
              }

         }
         else
         {
         
           let dataExportModal = new Modal(document.getElementById('exampleModalNotification'))
           this.setState({
             warningalertdisplay:"block",
             alertheading:"Warning",
             alertmessageheading:"Invalid order type",
             alertmessage:"Please select order type"
 
           })  
           dataExportModal.show()
           
         }


        }
        else{
          this.setState({
            warningdisplay:"block"
          })
        }
     
      }
        else{
          let dataExportModal = new Modal(document.getElementById('exampleModalNotification'))
          this.setState({
            warningalertdisplay:"block",
            alertheading:"Warning",
            alertmessageheading:"invalid username or Email",
            alertmessage:"Please put Username(only alphabets) and valid email"

          })  
          dataExportModal.show()
         

          this.setState({
            warningdisplay:"block"
          })
        }
        
      }
      else{
        let dataExportModal = new Modal(document.getElementById('exampleModalNotification'))
        this.setState({
          warningalertdisplay:"block",
          alertheading:"Warning",
          alertmessageheading:"Empty Cart",
          alertmessage:"Please select items to order"

        })  
        dataExportModal.show()
      }
      
    }
   
    let removecatdisplay=()=>{
      this.setState({
        cartmodeldisplay:"none"
      })
      document.getElementById("showcart").click()
    }

    let poistingdata=(ob)=>{

      console.log(ob)
      
    }
    

    let sendorder=()=>{

      if(this.state.cinfirmitems.length!=0)
      {

        if(this.state.ordertype=="Dine in")
        {

         
          axios.post(backendwebsite[0].backendwebsite+'/sales/dinein', {
            cname:this.state.customername,
            cemail:this.state.customeremail,
            cordertype:this.state.ordertype+this.state.ordertablenumber,
            order:this.state.cinfirmitems,
            totalprice:this.state.totalprice,
            status:"pending"          
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            alert("Unsuccessfull for unknown reason")
          });
          document.getElementById("showcart").click()
         this.setState({
          cinfirmitems:[],
          totalprice:0
         })

        // console.log(item)
          alert("Thanks for the order")
     
        }

        if(this.state.ordertype=="Take Away")
        {
          axios.post(backendwebsite[0].backendwebsite+'/sales/takeaway', {
            cname:this.state.customername,
            cemail:this.state.customeremail,
            cphonenumber:this.state.customerphonenumber,
            cordertype:this.state.ordertype,
            order:this.state.cinfirmitems,
            totalprice:this.state.totalprice,
            status:"pending"  
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            alert("Unsuccessfull for unknown reason")
          });
          document.getElementById("showcart").click()
          this.setState({
           cinfirmitems:[],
           totalprice:0
          })
          alert("Thanks for the order")
           
        }

        if(this.state.ordertype=="Delivery")
        {

          let address=document.getElementById("floatingTextarea").value
      

          axios.post(backendwebsite[0].backendwebsite+'/sales/delivery', {
            cname:this.state.customername,
            cemail:this.state.customeremail,
            cphonenumber:this.state.customerphonenumber,
            caddress:address,
            cordertype:this.state.ordertype+this.state.ordertablenumber,
            order:this.state.cinfirmitems,
            totalprice:this.state.totalprice,
            status:"pending"
   
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            alert("Unsuccessfull for unknown reason")
          });
          document.getElementById("showcart").click()
          this.setState({
           cinfirmitems:[],
           totalprice:0
          })
          alert("Thanks for the order")
       
        }

      
      }
        else{

          let dataExportModal = new Modal(document.getElementById('exampleModalNotification'))
          this.setState({
            warningalertdisplay:"block",
            alertheading:"Warning",
            alertheading:"No item in cart",
            alertmessage:"PLease select items to order"

          })  
          dataExportModal.show()

          this.setState({

            cinfirmboxdisplay:"none",
            pe:"auto",
            o:"1"
        })
        }
    }

    let outitem=(e)=>{
        let getid=e.target.id
        let gid=getid.replace(/\D/g, '')
        if(this.state.stateitems[gid-1]>0){
        this.state.stateitems.splice(gid-1,1,this.state.stateitems[gid-1]-1)
      
      let newarr=this.state.stateitems
      this.setState({
          stateitems:newarr
      })
    }
    }

    let cinfirmaddingitems=(c)=>{

      let getid=c.target.id
      let gid=getid.replace(/\D/g, '')
      let checkingstring=document.getElementById("productinfo"+gid).innerText.toString()

      if(this.state.stateitems[gid-1]>0){

        this.setState({
        sendorder:1
        })
        
      //for singlevarientitems
      if(checkingstring.includes("Price")){

        let ai=document.getElementById("singleitemprice"+gid).innerText
        ai=ai.replace(/\D/g, '')
        
        let items
       
        
        
        items={

           itemname:document.getElementById("itemname"+gid).innerText,
           itemcetagory:document.getElementById("itemcetagory"+gid).innerText,
           itemquantity:this.state.stateitems[gid-1],
           itemprice:ai*this.state.stateitems[gid-1],
           

            }

        let flag=0
        let scounting=-1   
        this.state.cinfirmitems.map((si)=>{
          scounting++
            if(si.itemname==items.itemname)
            {
              si.itemquantity+=items.itemquantity
              si.itemprice+=items.itemprice
              let singlearra=this.state.cinfirmitems
              let newprice= this.state.totalprice+items.itemprice  
              this.setState({
                cinfirmitems:singlearra,
                totalprice:newprice
              })
     
             
              flag=1
            }
            


        }) 
        if(flag==0)
        {

       
        let nprice= this.state.totalprice+items.itemprice  
        this.setState({
          totalprice:nprice
        })
        this.state.cinfirmitems.push(items)
        
  
        }   
      
         
      }


      // formultivarientitemsprice
      else{
       
        var sel = document.getElementById("priceoption"+gid);
        var text= sel.options[sel.selectedIndex].text
        var p=text.replace(/\D/g, '')
        let items
        let vr=text.replace(/[^a-z]/gi, '')
        vr=vr.substring(0, vr.length - 2);
        vr=`(${vr})`
       
        
        
        items={

           itemname:document.getElementById("itemname"+gid).innerText+vr,
           itemcetagory:document.getElementById("itemcetagory"+gid).innerText,
           itemquantity:this.state.stateitems[gid-1],
           itemprice:p*this.state.stateitems[gid-1],
           

            }
        
        
        let o=0
        let counting=-1
        this.state.cinfirmitems.map((ui)=>{
          counting++
         if(items.itemname==ui.itemname)
         {

           items.itemquantity+=1
           let newci=this.state.cinfirmitems
           newci[counting].itemquantity+=this.state.stateitems[gid-1]
           newci[counting].itemprice+=items.itemprice
           this.setState({

            cinfirmitems:newci

           })
            o=1
            this.state.totalprice+=items.itemprice
        


         }
         
        })
        if(o==0){

        this.state.cinfirmitems.push(items)
        this.state.totalprice+=items.itemprice
       
        }
        } 

      
      this.state.stateitems.splice(gid-1,1,0)
        
      let newarr=this.state.stateitems
      this.setState({
          stateitems:newarr
      })
       

    }
    }
   
    let varientsoption=(c,vr)=>{
      
    
       return(
        <select class="form-select form-select-sm  mt-2" id={"priceoption"+c} aria-label="Default select example">

            {vr.map((vre)=>
                  <option value="1">{vre}</option>
            )}
            
             
        </select>

        
       )
      

    }
    
    
    
    // Showing menue List rendering
    
    
    
    
      let menue = cetagories.map((d) => 
    
      <>
      <div className="col-md-5 mx-4 my-2 " id='singlemenuelist' >
      
        <div className="list-group">
      <a  style={{"background-color" : "#066163",border: "none"}} className="list-group-item list-group-item-action active" aria-current="true">
       {d[0].cetagory}
      </a>
      
      

        {
          d.map((dc)=>
    
        
    
          <div class="menueitem" >
    
    {
      itemcountingfunct()
    }
    
    
    <a  className="list-group-item list-group-item-action" > <p  style={{"display":'block'}}>Item:{itemcounting}</p>
    <div id={'productinfo'+itemcounting} className="p-0 m-0 content d-inline-block">  <b id={"itemname"+itemcounting} > {dc.name}  </b> <br />  {( Array.isArray( dc.price ))? < i  id={"singleitemprice"+itemcounting}> {varientsoption(itemcounting,dc.price)}</i>: <i id={"singleitemprice"+itemcounting} >Price: {dc.price}  </i> }  <br/> {dc.Discription}<br/>
    <p style={{display:'none'}} id={"itemcetagory"+itemcounting} >{dc.cetagory}</p>
    <div   class="btn-group me-2 py-2 btn-group-sm" role="group" aria-label="First group">
        <button id={"addbutton"+itemcounting} onClick={additem}   type="button"  className="btn btn-outline-secondary"  >+</button>
        <button type="button" disabled="false" className="btn btn-outline-secondary">{this.state.stateitems[itemcounting-1]}</button>
        <button id={"outbutton"+itemcounting} type="button" onClick={outitem}  className="btn btn-outline-secondary">-</button>
        
      </div>


      <button type="button" id={'cinfirmaddbutton'+itemcounting } onClick={cinfirmaddingitems} class="blankbuttonstyle1 btn btn-primary btn-sm"  >Add item</button>
    
     </div>
    
     </a>
          </div>
    
        
          )
        }
        </div>
       </div>
    
      </>
      );
      
      let increasecountordercart=()=>{
        alert(counting)
        counting++
      }
       let deletecinfirmitem=(g)=>{

        let eid=g.target.id
       
        eid=eid.replace(/\D/g, '')
      
       
        let newcinfirmitems=this.state.cinfirmitems
        let price=this.state.totalprice-newcinfirmitems[eid].itemprice
        newcinfirmitems.splice(eid,1)
       
       
        this.setState({
          cinfirmitems:newcinfirmitems,
          totalprice:price
        
        })

       }
     
    
       let counting=0
        let menuecart=this.state.cinfirmitems.map((er)=>
        
        <>
        
        <div id={"item1"} key={er.itemname} className="cartitems py-2 my-2" >
           
       <b> {er.itemname} </b> <span className='px-1' ></span>  Quantity: <b> {er.itemquantity} </b>  Price: <b > {er.itemprice}/RS </b>    <i className='Delteitembutton' ><img id={"deletingbutton"+counting} onClick={deletecinfirmitem}  src={deletebuttonicon} alt="Not found" />{increasecountordercart}</i>
    </div>
          </>
        );

     
            
      // end List rendering Menue
    

      //User detials functions

      let namechange=()=>{
        let name=document.getElementById("nameinput").value
       
        this.setState({
          customername:name
        })
      }

      let emailchange=()=>{
        let email=document.getElementById("emailinput").value
        this.setState({
          customeremail:email
        })
      }

      let ordertypechange=()=>{
        let otype=document.getElementById("ordertypeinput").value
        if(otype=="Delivery")
        {
          this.setState({
            locationboxdisplay:"block"
          })
        }
        else{

          this.setState({
            locationboxdisplay:"none"
          })

        }
        this.setState({
          ordertype:otype,
          ordertablenumber:"",
          customerphonenumber:""

        })
        document.getElementById("Tablenumber").value=""


      }

      let tablenumberchange=()=>{
        let tnumber=document.getElementById("Tablenumber").value
        
        if(this.state.ordertype!="" )
        {
          if(this.state.ordertype!="Select order type"){

          
          if(this.state.ordertype=="Dine in")
          {
          this.setState({
            ordertablenumber:tnumber
           })
          }
           else{
            this.setState({
             customerphonenumber:tnumber
             })
           }
          }
          else{
         
         
            let dataExportModal = new Modal(document.getElementById('exampleModalNotification'))
            this.setState({
              warningalertdisplay:"block",
              alertheading:"Warning",
              alertmessageheading:"invalid Input",
              alertmessage:"Please select order type first"
  
            })  
            dataExportModal.show()
              
          document.getElementById("Tablenumber").value=""
          
          }
        }
        else{
         
         
          let dataExportModal = new Modal(document.getElementById('exampleModalNotification'))
          this.setState({
            warningalertdisplay:"block",
            alertheading:"Warning",
            alertheading:"invalid Input",
            alertmessage:"Please select order type first"

          })  
          dataExportModal.show()
            
        document.getElementById("Tablenumber").value=""
        
        }
        
      }

      let removealert=()=>{
        this.setState({
          warningalertdisplay:"none"
        })
      }

      let customerlocationchange=()=>{
        let location=document.getElementById("customeraddress").value
        this.setState({
          customerlocation:location
        })
      }


      let submitreview=()=>{

        let name=document.getElementById("reviewname").value
        let email=document.getElementById("reviewemail").value
        let feedback=document.getElementById("reviewfeedback").value

        if(this.state.ratingstarts!=0 && name!="" && email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)  && name.match(/^[A-Za-z\s]*$/) && email!="" && feedback!="" )
        {
          axios.post(backendwebsite[0].backendwebsite+'/feedback', {
            name:name,
            email:email,
            rating:this.state.ratingstarts,
            feedback:feedback    
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            alert("Unsuccessfull for unknown reason")
          });
          alert("Thanks for submitting review!")
        }
        else
        {
          alert("Please enter all detials")
        }

      }
    
      

    return (
      <div>


              {/* Upper part */}
<div style={{"pointer-events":this.state.pe,"opacity":this.state.o}} className="allcontent">
    <div className="container-fluid t-center d-block " id='upperpart' >
      
        <h3 className="heading1 pt-2 mt-5" id='uh1' >Place your order here</h3>
        <div className=""></div>
    <h6 className="heading2 p-1 mt-3 pb-2" id='uh2' >Select the deals and items you want to order</h6>
    </div>  

    
    {/* Menue */}

<div className="row  justify-content-center align-item-center mx-auto shadow-lg " id='menuesection'>
   {
menue
   }

</div>

   {/* Lower part */}

<div className="row  " id='lowerpart' >
  <div className="col text-center">

     <h2 id='lowertext1' >Order detials</h2>
    <p className="text" id='lowertext2' >Put orer and customer detials below</p>

    <p id='validationwarning' style={{display:this.state.warningdisplay}} >*Please fill all details Correctly</p>
     <div class="form-group mx-auto my-3 " id="userdetails">

        <div className="  row my-3 " id="userinputs ">

          
          <input type="text" class="form-control form-control-sm mb-3 text-center"  onChange={namechange} id="nameinput" placeholder="Enter your name"/>
          <input type="Email" class="form-control form-control-sm text-center my-2" onChange={emailchange}  id="emailinput" placeholder="Enter your Email"/>
          <input type="Email" class="form-control form-control-sm text-center my-2" id="voucher" placeholder="Voucher Code (optional)"/>
        </div>  

        <div className="row" id="ordertypedetails">
       
         <select class="form-control form-control-sm"  onChange={ordertypechange} name="" id="ordertypeinput">
           <option id="selectoptions" >Select order type</option>
           <option id="selectoptions" >Dine in</option>
           <option id="selectoptions" >Take Away</option>
           <option id="selectoptions" >Delivery</option>
         </select>

                
                <input type="number" class="form-control form-control-sm "  onChange={tablenumberchange} id="Tablenumber" placeholder={(this.state.ordertype=="Dine in")?"Table number":"Enter phone number"}/>

       </div>
       <div class="form-floating my-4" id='customeraddress' onChange={customerlocationchange}  style={{display:this.state.locationboxdisplay}} >
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label for="floatingTextarea">Add location</label>
        </div>


     </div>


   

   <button type="button" id='buttonstyle1' onClick={cinfirmorder} class="btn btn-primary mt-3 mx-3 px-3">Place order</button>
   <br />
   <div className="row my-3 text-center" id='model'>
   <div className="col-md-3 mx-auto">
        <a  href="#" onClick={modelfunctionshow} id="Modeltrigger"  >Feedback and Review</a>
   </div>
   <p id='showtext'></p>
 
   </div>
   
  </div>
</div>

</div>


 {/* Model Reviews */}


<div className="modelcontent w-75 text-center shadow mx-auto" style={{display:this.state.displayproperty}} id='suggetionmodel'>

   <h5 className='mt-4'>Give feedback and review</h5> 
   <p>Please give rating</p>
   <Rating
        name="simple-controlled"
      
        onChange={(event, newValue) => {
       this.setState({
         ratingstarts:newValue
       })
       alert(newValue)
        }}
      />

   <div className="row  my-4 mx-auto justify-content-center">
     <div className="col-md-4">
     <input type="Text"  placeholder='Enter Name' className='form-control' id="reviewname" />
     </div>
     <div className="col-md-4 mt-md-0 mt-3">
     <input type="Text"  placeholder='Enter Email' className='form-control' id="reviewemail" />

     </div>
   
      <div className="row justify-content-center">
        <div className="col-md-6 mx-auto ">
        <textarea type="textarea" className='form-control my-4' name="" id="reviewfeedback" placeholder='Reviews' />

        </div>
      </div>

    <div className="row mx-auto justify-content-center">
      <div className="col-md-2 ">
      <button type="button" id='buttonstyle1' onClick={submitreview} class="btn btn-primary ">Cinfirm</button>
      </div>
      <div className="col-md-2 mt-md-0 mt-2 ">
      <button type="button" onClick={modelfunctionhide}  id='buttonstyle1' class="btn btn-primary ">Close</button>
      </div>
    </div>


   </div>

   </div>



{/* Model end */}



{/* ORDER */}

<button class="btn btn-primary d-none" id="showcart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Order Cart</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  
             <div class="modal-body my-3 text-center"  >
             <div id="itemsincart" className="my-3">
            {menuecart}
             </div>

            <b className="my-5" >Total:</b>{this.state.totalprice}
            </div>

              <button type="button" class="closeordercart btn bg-gradient-dark ml-4" onClick={removecatdisplay} data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn bg-gradient-primary mxa-auto" onClick={sendorder} id="buttonstyle1" >Submit Order</button>
    

  </div>
</div>

{/*  */}



{/* new Submit order */}



<div class="container py-7" style={{display:this.state.cartmodeldisplay}}>
  <div class="row mt-5">
    <div class="col-sm-3 col-6 mx-auto">
    
      <button type="button" class="btn bg-gradient-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

     
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content" id="cartmodel" >
            <div class="modal-header text-center">
              <h5 class="modal-title text-center " id="exampleModalLabel">Ordered items</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
           
            <div class="modal-body my-3 text-center"  >
             <div id="itemsincart" className="my-3">
            {menuecart}
             </div>

            <b className="my-5" >Total:</b>{this.state.totalprice}
            </div>


            <div class="modal-footer justify-content-between">
              <button type="button" class="btn bg-gradient-dark mb-0" onClick={removecatdisplay} data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn bg-gradient-primary mb-0" onClick={sendorder} id="buttonstyle1" >Submit Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



{/*  */}

{/* warning */}

<div class="container py-7" style={{display:this.state.warningalertdisplay}} id="Totalmodal"  >
  <div class="row mt-5">
    <div class="col-sm-3 col-6 mx-auto">
      
      <button type="button d-none " class="btn bg-gradient-danger d-none" data-bs-toggle="modal" data-bs-target="#exampleModalNotification">
        Launch demo modal
      </button>

    
      <div class="modal fade" id="exampleModalNotification" tabindex="-1" aria-labelledby="exampleModalNotification" aria-hidden="true">
        <div class="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
          <div class="modal-content bg-gradient-danger" id="Warningalert">
            <div class="modal-header border-0">
              <h6 class="modal-title text-white" id="modal-title-notification">{this.state.alertheading}</h6>
              <button type="button" class="btn btn-link text-white my-1" data-bs-dismiss="modal"><i class="fas fa-times"></i></button>
            </div>
            <hr class="horizontal light mt-0" />
            <div class="modal-body">
              <div class="py-3 text-center text-white">
                <i class="material-icons text-3xl text-danger">notifications_active</i>
                <h4 class="heading mt-4 text-white">{this.state.alertmessageheading}</h4>
                <p class="text-white opacity-8">{this.state.alertmessage}</p>
              </div>
            </div>
            <hr class="horizontal light mb-0" />
            <div class="modal-footer justify-content-between border-0">
              <button type="button" class="btn btn-white text-white my-1" onClick={removealert} data-bs-dismiss="modal">Ok, Got it</button>
              <button type="button" class="btn btn-link text-white my-1" onClick={removealert} data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    )
  }
}

export default Classdineinorder