import React from 'react'
import "./educaton.scss"

//logos

import uog from "../../images/icons/University_of_Gujrat_Logo.png"
import pgc from "../../images/icons/pgc.png"
import HMSS from "../../images/icons/HMSS.png"
import Educationvactor from "../../images/icons/Educationvactor.gif"


function Educaton() {
  return (
    <div className='Educationarea' >

    <div className="row">
        <div className="leftsideeducation col-md-8">

         <div className="row">

            <div className="col-4"> 
            
            <div className="longcardbody1 shadow text-center" id='educationcard' >
                <img style={{height:"55px"}} src={HMSS} alt="Logo" />
                <h5 className='mt-4' >Matric <br></br> with Computer</h5>
                <div className="dividereducationcard my-2 mx-auto"></div>
                <p>Hashmat memorial School</p>
            
                <p className='datearecard mt-5 '>2019-2022</p>
              
            </div>

            </div>
            <div className="col-4">
            <div className="longcardbody2 shadow text-center" id='educationcard'>
                 <img style={{height:"55px"}} src={uog} alt="Logo" />
                <h5 className='mt-4' >Bachelors in <br /> Information Technology</h5>
                <div className="dividereducationcard my-2 mx-auto"></div>
                <p>University of gujrat</p>
            
                <p className='datearecard mt-5 '>2019-2022</p>
               
            </div>
            </div>
            <div className="col-4">
            <div className="longcardbody3 shadow text-center" id='educationcard'>
               <img style={{height:"55px"}} src={pgc} alt="Logo" />
                <h5 className='mt-4' >ICS  <br />with Pyhysics</h5>
                <div className="dividereducationcard my-2 mx-auto"></div>
                <p>Punjab group of collages</p>
                
                <p className='datearecard mt-5 '>2019-2022</p>
               
            </div>
            </div>

        </div>   

        </div>
        <div className="rightsideeducation col-md-3">
             <img style={{height:"250px"}} src={Educationvactor} alt="" />
            <h3>Education</h3>
            <p>Education is what defines your spirit and spirit</p>
        </div>
    </div>

    </div>
  )
}

export default Educaton