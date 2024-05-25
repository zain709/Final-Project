import React,{ useState,useEffect  } from 'react'
import axios from 'axios'
import backendwebsite from "../../../backendwebsite.json"
import "./product.scss"


//importing components

import SimpleModal from "../../../components/Modal/Modal";
import Listgroup from '../../../components/listgroup/listgroup'
import Basicbanner from '../../../components/Cards/basicbanner'
import BasicCard from '../../../components/Cards/BasicCard'
import BasicCard2 from '../../../components/Cards/basiccard2'
import TableComponent from '../../../components/Tables/TableComponent'
import Iconroundbutton from '../../../components/buttons/iconroundbutton';

function Products() {

 


  let [products,setproducts]=useState([])
  let [productcopy,setproductcopy]=useState([])


  let [cetagories,setcetagories]=useState([])

  let [modalboxcontent,setmodalboxcontent]=useState()
  let [modelbxoxtitle,setmodelbxoxtitle]=useState()

  let [savebutton,setsavebutton]=useState("true")
  let [saveandsubmitmeterial,setsaveandsubmitmeterial]=("")

  let [priceoption,setpriceoption]=useState("true")

  let [varientslist,setvarientslist]=useState([])

 


  // -------- Modal box actions


  // 1st model box action to save

  let showcetagoies=()=>{
   
    let showmodalbutton=document.getElementById("showmodalbutton")
    setmodalboxcontent(cetagoriescontent())
    setmodelbxoxtitle("Cetagories List")
    setsavebutton("false")
    showmodalbutton.click()
  }

  let cetagoriescontent=()=>{
   
    return <div>
   
   <Listgroup
   title="Cetagories"
   data={cetagories}
   />
    

    </div>
  }


  // 2nd modal box and 3rd card button

  let newproductmodalshow=()=>{
    nullvalues()
    let showmodalbutton=document.getElementById("showmodalbutton")
    setmodalboxcontent(newproductmodal())
    setmodelbxoxtitle("Add new product")
    setsavebutton("true")
    showmodalbutton.click()
  }

  let newproductmodal=()=>{
 return <div>
  <h5 className='text-center mt-2' >Product detials</h5>
  <p className='text-center mt-2 mb-4' >*Please enter valid detials</p>

  <form action="">

    <div className="row">
     <div className="col-md-6">

     <label for="exampleFormControlInput1" class="form-label mt-2 ">Product name</label>
     <input type="email" class="form-control" id="nameselect" placeholder=""/>

     <label for="exampleFormControlInput1" class="form-label mt-2 ">Discription</label>
     <textarea type="email" class="form-control" id="discriptionselect" placeholder="50 letters only"/>

     <label for="" class="form-label mt-2 ">Cetagory</label>
       <select class="form-control" onClick={()=>{ document.getElementById("newcetagory").disabled=true ;   document.getElementById("cetagoryselect").disabled=false ; setmodalboxcontent(newproductmodal()) }}  onChange={()=>{ if(document.getElementById("cetagoryselect").value!="--Select Cetagory--"){ document.getElementById("newcetagory").disabled=true ; setmodalboxcontent(newproductmodal()) } else{  document.getElementById("newcetagory").disabled=false ; setmodalboxcontent(newproductmodal()) } }} name="" id="cetagoryselect">
       <option >--Select Cetagory--</option>
         { cetagories.map((e)=> <option>{e}</option>) }   
       </select>


     <label for="exampleFormControlInput1" class="form-label mt-2 ">New cetagory ?</label>
     <input type="email" class="form-control" onClick={()=>{ document.getElementById("cetagoryselect").disabled=true ;document.getElementById("newcetagory").disabled=false ; setmodalboxcontent(newproductmodal()); }} id="newcetagory" placeholder="Cetagory name"/>
    

     </div>
     <div className="col-md-6">

    <p className='my-2' > <b>  *Add varients or static price </b></p>

    <div className='mt-2' >
      {/* Adding varients */}
    <label for="exampleFormControlInput1" class="form-label">price</label>
    <div class="input-group mb-3">
  
    <input type="text" class="form-control" id='varientname' placeholder="Name" aria-label="Username"/>
    <input type="number" class="form-control" id='varientprice' placeholder="Price" aria-label="Server"/>
    <button type="button" onClick={addvarient} class="btn btn-secondary px-2 btn-sm">Add</button>
    </div>

       <hr className='my-2' />
    {/* Displaying varient list */}
    <div className="varients">
     <ul id="cetagoryselect" class="list-group">
     
      {varientslist.map((e,key)=><li id='varientslist' key={key} class="list-group-item">{e.name} <span>{"  "}</span>   {e.price} <span className='d-inline-block mx-2'  >  <Iconroundbutton clickaction={() => removeitem(key)} icon="fa fa-trash" /> </span> </li>)}
     </ul>
    </div>



    </div>
    

    

     </div>
    </div>

  </form>
 </div>
  }



  //Functions

  //adding varient
  let addvarient=()=>{

    let name=document.getElementById("varientname").value
    let price=document.getElementById("varientprice").value
    if(name!="" && price!="" )
    {
      let flag=true
       varientslist.forEach(e=>{
        if(e.name.toLowerCase()==name.toLowerCase())
        {
          flag=false
        }
      })
      if(flag==true  )
      {
        let arr={name:name,price:price}
        varientslist.push(arr)
        setmodalboxcontent(newproductmodal())
      }
      else
      {
        alert("Varient already added!")
      }
   
    }
    else{
      alert("Add valid varient detials")
    }
   
  }

  //remove varient list item
  let removeitem=(e)=>{
    let arr=varientslist
    arr.splice(e,1)
    setvarientslist(varientslist=arr)
    setmodalboxcontent(newproductmodal())
  }

  //null new product modal inputs
  let nullvalues=()=>{
    let arr=[]
    setvarientslist(varientslist=arr)   
  }

  // Add product

  let addnewproduct=()=>{
     let name=document.getElementById("nameselect").value
     let discription= document.getElementById("discriptionselect").value
     let cetagory=document.getElementById("cetagoryselect").value
     let newcetagory=document.getElementById("newcetagory").value

     if(name!="" && discription!="" && varientslist.length!=0)
     {
       if(discription.length<=50)
       {
         if(name.length<=30)
         { 
          
          let price;

          if(varientslist.length<2)
          {
            
              price=parseInt(varientslist[0].price)
          }
          else
          {
           
            price=new Array
          varientslist.forEach(e=> {
              let item=e.name +" " + e.price
              price.push(item)
            });
          }
          
           if(document.getElementById("cetagoryselect").attributes.getNamedItem('disabled')!==null && newcetagory!="" )
            {
             
              axios.post(backendwebsite[0].backendwebsite+'/products', {
                name:name,
                price: price,
                Discription:discription,
                cetagory:newcetagory
              })
              .then(function (response) {
                console.log(response);
                alert("Seccuessfully added!")
              })
              .catch(function (error) {
                console.log(error);
                alert("Error: Server error!")
              });
             

            }
           else if(document.getElementById("newcetagory").attributes.getNamedItem('disabled')!==null  && cetagory!="--Select Cetagory--" )
            {
              axios.post(backendwebsite[0].backendwebsite+'/products', {
                name:name,
                price: price,
                Discription:discription,
                cetagory:cetagory
              })
              .then(function (response) {
                console.log(response);
                alert("Seccuessfully added!")
              })
              .catch(function (error) {
                console.log(error);
                alert("Error: Server error!")
              });

            }
            else
            {
              alert("Please select cetagory or add new one")
            }
         }
         else
         {
          alert("Name: Only 30 letters allowed!")
         }
       }
       else
       {
        alert("Description: Only 50 letters allowed!")
       }
     }
     else
     {
      alert("Please fill all detials")
     }


  }


  //Filters

  //Name filter

  let namefilter=()=>{
   
    let textcontrol=document.getElementById("namefilterproduct").value
    let newarr=[]
    if(textcontrol!="")
    {
    products.forEach(element => {
      let text=element.name.toLowerCase()
      if(text.startsWith(textcontrol.toLowerCase()))
      {
       newarr.push(element)
      }
    });

    setproducts(products=newarr)
  }
  else if(textcontrol=="")
  {
    setproducts(products=productcopy)
  }
    
  }

  //Cetagory Filter
  let cetagoryfilter=()=>{
   
    let textcontrol=document.getElementById("cetagoryfilter").value
    let newarr=[]
    let flag=true
    setproducts(products=productcopy)
    if(textcontrol!="--By Cetagories--")
    {
      products.forEach(element => {
      
      if(element.cetagory==textcontrol)
      {
       newarr.push(element)
       flag=false
      }
    });

    setproducts(products=newarr)
  }
  else if(textcontrol=="--By Cetagories--")
  {
    setproducts(products=productcopy)
  }
  if(flag==true)
  {
    setproducts(products=productcopy)
  }
    
  }

  useEffect(() => {

    // for getting all products
    axios.get(backendwebsite[0].backendwebsite+`/products`)
    .then(res => {
      setproducts(res.data)
      setproductcopy(res.data)
    })

    //for getting all cetagories

    axios.get(backendwebsite[0].backendwebsite+`/products/cets`)
    .then(res => {
      setcetagories(res.data)
      
    })
    
  },[])

  let columns=["#","ID","name","price","Discription","Cetagory"]
  
  products.forEach(e=>{
  delete e.__v
  });

  productcopy.forEach(e=>{
    delete e.__v
    });

  return (
    <div className='mt-4' >


    <div className="row">
      <div className="col-md-4">
      <BasicCard2
           title="Total products"
           newval={products.length}
           unit="products"
           middletext="Total products in inventory"
           loweroption="1"
           lowertext="Variants & simple products"
        />
      </div>
      <div className="col-md-4">
      <BasicCard
           title="Total Cetagories"
           newval={cetagories.length}
           unit="products"
           middletext="Total Cetagories of product"
           linkaction={showcetagoies}
           linktext="Click to show list"
           loweroption1="2"
        />
      </div>
      <div className="col-md-4">
        <Basicbanner
           heading="Product"
           text="Add new Product"
           buttontext="Add"
           buttonaction={newproductmodalshow}
        />
      </div>
    </div>

<div className="container  ">
    <div className="row toolbar">
       <div class="col-md-3 input-group">
            <span class="input-group-text" id="basic-addon1">Search</span>
            <input type="text" id="namefilterproduct" onChange={namefilter} class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
       </div>
       <div class="col-md-3 input-group">
            
              <span class="input-group-text" id="basic-addon1">Filter</span>
           

              <select class="form-control" onChange={cetagoryfilter} id="cetagoryfilter">
              <option>--By Cetagories--</option>
              {cetagories.map((e)=><option>{e}</option>)}    
              </select>
          
       </div>
    </div>
    </div>

    <div className="container ">
    <TableComponent columns={columns} data={products} />
    </div>


    <SimpleModal
    
    modalaction={addnewproduct}
    Content={modalboxcontent}
    title={modelbxoxtitle}
    closebuttontext="close"
    savebuttontext="Save"
    showsavebutton={savebutton}

    />
    </div>
  )
}

export default Products