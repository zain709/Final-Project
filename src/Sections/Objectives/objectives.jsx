import React from 'react'
import "./objectives.scss"

//icons import
import fastwork from "../../images/icons/fastworkgif.gif"
import professioancodegid from "../../images/icons/professioancodegid.gif"
import creativity from "../../images/icons/creativity.gif"



function Objectives() {

    let objectives=[
        {
        icon:fastwork,
        heading:"Fast Learning",
        text:"Learning the curves of work to provide the best output "
        },
        {
            icon:professioancodegid,
            heading:"Professional Coding",
            text:"Professionaly customizeable code , for easy customization and understanding "
        },
        {
                icon:creativity,
                heading:"Creativity",
                text:"Thinking out of the box is always a key to provide the imaginary results"
        }
]
  return (
    <div>
        <div className="objectivesbody shadow  text-center">
            
            {/* My picture GIF */}
            <div className="objectivepicture shadow mx-auto mb-5">

            </div>

            {/* Text */}

            <h5 className='whyus text-light'>Why us ?</h5>

            <p className='w-50 mx-auto text-light' >Qualtiy of work is more important then anything when it comes to customer satisfaction , with our greate exeperienc we deliver the best</p>


            {/* Cards  */}
            <div className="objectiveinner row">

            { objectives.map((e)=>
            <div className="objectivecard shadow-lg mx-4 text-center col-md-3">
                <div className="cardicon mt-2"> <img id='objectivecardicon' src={e.icon} alt="" /> </div>
                <div className="cardheading mt-4"> <h5>{e.heading}</h5></div>
                <div className="cardtext mt-4">{e.text}</div>
            </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default Objectives