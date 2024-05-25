import React, { Component } from 'react'
import backendwebsite from "../../../backendwebsite.json"
import axios from 'axios'
export class Promotionpage extends Component {
  render() {


    let submitchanges=async()=>{

      let flag=false

      let shcontrol=document.getElementById("sh").value
      let stcontrol=document.getElementById("st").value

      let dshcontrol=document.getElementById("dsh").value
      let dstcontrol=document.getElementById("dst").value

      let fpshcontrol=document.getElementById("fpsh").value
      let fpstcontrol=document.getElementById("fpst").value

      if(shcontrol==""|| shcontrol.length>30)
      {
          flag=true
      }
      else if(stcontrol==""|| stcontrol.length>90)
      {
          flag=true
      }
      else if(dshcontrol==""|| dshcontrol.length>25)
      {
           flag=true
      }
      else if(dstcontrol==""|| dstcontrol.length>50)
      {
         flag=true
      }
      else if(fpshcontrol==""|| fpshcontrol.length>25)
      {
           flag=true
      }
      else if(fpstcontrol==""|| fpstcontrol.length>50)
      {
         flag=true
      }
     

      if(flag==true)
        {
            alert("Please fill all inputs according to instructions")
        }
        else if (flag==false){
           
          let data={
          
            promotionssliderheading:shcontrol,
            promotionsslidermessage:stcontrol,

            promotionsdealheading:dshcontrol,
            promotionsdealmessage:dstcontrol,

            promotionsflatheading:fpshcontrol,
            promotionsflatlmessage:fpstcontrol

            
        }
    
    let response = await axios
        .patch(backendwebsite[0].backendwebsite+`/websitedata/627857af4287f8a5b39009e3`, data)
        .catch((error) => console.log('Error: ', error));
    if (response && response.data) {
        console.log(response);
        console.log(response.data);
    }
    alert("Done")


        }
    }


    return (
      <div className='animate__animated animate__fadeIn' >

<div className="basicinfoupperpart shadow text-center">

<div className="container">
    <i class="fa fa-solid fa-info mb-3" id='basicinfocardicon' ></i>
    <h4>Website Promotion page</h4>
    <p> The information below will be used in promotion page of website</p>
</div>

</div>

<div className="basicinfolowerpart  shadow ">

<div className="container mt-4 ">

      <div className="row ">
          <div className="col-md-6 mx-auto">

                <p> <b> Why-us section headings and text</b></p>  
                <form className='' >

                <label for="sh" class="form-label ">Slider heading</label>
                <input type="text" class="form-control" id="sh" aria-describedby="emailHelp"/>
                <div  id="shHelp" class="form-text">*30 Characters only</div>

                <label for="st" class="form-label  mt-2">Slider text</label>
                <input type="text" class="form-control" id="st" aria-describedby="emailHelp"/>
                <div  id="stHelp" class="form-text">*90 Characters only</div>

                <label for="dsh" class="form-label  mt-2">Deals section heading</label>
                <input type="text" class="form-control" id="dsh" aria-describedby="emailHelp"/>
                <div  id="dshHelp" class="form-text">*25 Characters only</div>


                <label for="dst" class="form-label mt-2 ">Deals section text</label>
                <input type="text" class="form-control" id="dst" aria-describedby="emailHelp"/>
                <div  id="dstHelp" class="form-text">*50 Characters only</div>

                <label for="fpsh" class="form-label  mt-2">Flat promotions section heading</label>
                <input type="text" class="form-control" id="fpsh" aria-describedby="emailHelp"/>
                <div  id="fpshHelp" class="form-text">*25 Characters only</div>

                 <label for="fpst" class="form-label mt-2 ">Flat promotions section text</label>
                <input type="text" class="form-control" id="fpst" aria-describedby="emailHelp"/>
                <div id="fpstHelp" class="form-text">*50 Characters only</div> 

                  
                </form>

          </div>

       
         
      </div>

      <div className="basicinfobuttondiv text-center my-5 ">
      <p> <b> Note: </b>make sure to fill all details as per description</p>
      <button type="button" class="btn btn-primary px-4" id='buttonstyle3' onClick={submitchanges} >Cinfirm</button>
      </div>

</div>

</div>

      </div>
    )
  }
}

export default Promotionpage