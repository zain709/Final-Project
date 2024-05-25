import React, { Component } from 'react'
import backendwebsite from "../../../backendwebsite.json"
import axios from 'axios'

export class Aboutpagewb extends Component {
  render() {


    let submitchagnesabout=async()=>{

        let flag=false

        // Validation for objectives

        let o1h=document.getElementById("ob1h").value
        let o1t=document.getElementById("ob1t").value

        let o2h=document.getElementById("ob2h").value
        let o2t=document.getElementById("ob2t").value

        let o3h=document.getElementById("ob3h").value
        let o3t=document.getElementById("ob3t").value

        let o4h=document.getElementById("ob4h").value
        let o4t=document.getElementById("ob4t").value
        

        if(o1h==""|| o1h.length>18)
        {
            flag=true
        }
        else if(o1t==""|| o1t.length>70)
        {
            flag=true
        }
        else if(o2h==""|| o2h.length>18)
        {
             flag=true
        }
        else if(o2t==""|| o2t.length>70)
        {
           flag=true
        }
        else if(o3h==""|| o3h.length>18)
        {
             flag=true
        }
        else if(o3t==""|| o3t.length>70)
        {
          flag=true
        }
        else if(o4h==""|| o4h.length>18)
        {
           flag=true
        }
        else if(o4t==""|| o4t.length>70)
        {
             flag=true
        }

         
        let shcontrol=document.getElementById("sh").value
        let stcontrol=document.getElementById("st").value

        let ichcontrol=document.getElementById("ich").value
        let ictcontrol=document.getElementById("ict").value


        if(shcontrol==""|| shcontrol.length>30)
        {
            flag=true
        }
        else if(stcontrol==""|| stcontrol.length>140)
        {
            flag=true
        }
        else if(ichcontrol==""|| ichcontrol.length>25)
        {
             flag=true
        }
        else if(ictcontrol==""|| ictcontrol.length>65)
        {
           flag=true
        }
       
        if(flag==true)
        {
            alert("Please fill all inputs according to instructions")
        }
        else if (flag==false){
           
            let data={
              
                
            section1heading:o1h,
            section1text:o1t,

            section2heading:o2h,
            section2text:o2t,

            section3heading:o3h,
            section3text:o3t,

            section4heading:o4h,
            section4text:o4t,


            rightsectionheading:ichcontrol,
            rightsectionmessage:ictcontrol,

            aboutsliderheading1:shcontrol,
            aboutsliderheading2:stcontrol

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
    <h4>Website About page</h4>
    <p> The information below will be used in About page of website</p>
</div>

</div>

<div className="basicinfolowerpart  shadow ">

<div className="container mt-4 ">

      <div className="row ">
          <div className="col-md-6">

                <p> <b> Why-us section headings and text</b></p>  
                <form className='' >

                <label for="ob1h" class="form-label ">Objective 1 heading</label>
                <input type="text" class="form-control" id="ob1h" aria-describedby="emailHelp"/>
                <div  id="ob1hHelp" class="form-text">*18 Characters only</div>

                <label for="ob1t" class="form-label  mt-2">Objective 1 text</label>
                <input type="text" class="form-control" id="ob1t" aria-describedby="emailHelp"/>
                <div  id="ob1tHelp" class="form-text">*70 Characters only</div>

                <label for="ob2h" class="form-label  mt-2">Objective 2 heading</label>
                <input type="text" class="form-control" id="ob2h" aria-describedby="emailHelp"/>
                <div  id="ob2heHelp" class="form-text">*18 Characters only</div>


                <label for="ob2t" class="form-label mt-2 ">Objective 2 text</label>
                <input type="text" class="form-control" id="ob2t" aria-describedby="emailHelp"/>
                <div  id="ob2tHelp" class="form-text">*70 Characters only</div>

                <label for="ob3h" class="form-label  mt-2">Objective 3 heading</label>
                <input type="text" class="form-control" id="ob3h" aria-describedby="emailHelp"/>
                <div  id="ob3hHelp" class="form-text">*18 Characters only</div>

                 <label for="ob3t" class="form-label mt-2 ">Objective 3 text</label>
                <input type="text" class="form-control" id="ob3t" aria-describedby="emailHelp"/>
                <div id="ob3tHelp" class="form-text">*70 Characters only</div> 

                <label for="ob4h" class="form-label mt-2 ">Objective 4 heading</label>
                <input  class="form-control" id="ob4h" aria-describedby="emailHelp"/>
                <div id="ob4hHelp" class="form-text">*18 Characters only</div>

                <label for="ob4t" class="form-label mt-2 ">Objective 4 text</label>
                <input type="text" class="form-control" id="ob4t" aria-describedby="emailHelp"/>
                <div id="ob4ttHelp" class="form-text">*70 Characters only</div>
                
                  
                </form>

          </div>
          <div className="col-md-6 mt-md-2 mt-3 ">
                
                <p> <b> Slider / Whyus image card</b></p>  
                <form className='' >

                <label for="sh" class="form-label">  Slder heading</label>
                <input type="text" class="form-control form-control-sm" id="sh" aria-describedby="emailHelp"/> 
                <div id="shHelp" class="form-text">*30 charactors only</div>  

                <label for="st" class="form-label mt-2"> Sider text</label>
                <input type="text" class="form-control form-control-sm " id="st" aria-describedby="emailHelp"/>
                <div id="stkHelp" class="form-text">*140 charactors only</div> 

                <label for="ich" class="form-label mt-2">Image card heading</label>
                <input  type="text" class="form-control form-control-sm  " id="ich" aria-describedby="emailHelp"/>
                <div id="ichHelp" class="form-text">*25 charactors only</div>

                <label for="ict" class="form-label mt-2"> image Card Text</label>
                <input type="text" class="form-control form-control-sm " id="ict" aria-describedby="emailHelp"/>
                <div id="ictHelp" class="form-text">*65 charactors only</div>
                
               
                  
                </form>

          </div>
      </div>

      <div className="basicinfobuttondiv text-center my-5 ">
      <p> <b> Note: </b>make sure to fill all details as per description</p>
      <button type="button" class="btn btn-primary px-4" id='buttonstyle3' onClick={submitchagnesabout}  >Cinfirm</button>
      </div>

</div>

</div>

      </div>
    )
  }
}

export default Aboutpagewb