import React from 'react'
import "./Skills.scss"
import Progress from '../../Components/Progressbar/progress'

// Skills icon

import CSSlogo from "../../images/icons/CSSlogo.png"
import MongoDB from "../../images/icons/mongodb.png"
import c from "../../images/icons/clogo.png"
import sql from "../../images/icons/SQL.png"
import Javascript from "../../images/icons/Javascript.png"
import NodeJS from "../../images/icons/NodeJS.png"
import Reactlogo from "../../images/icons/React.png"
import HTMLlogo from "../../images/icons/HTMLlogo.png"

// Importing Illustration

import skillsillustration from "../../images/icons/skillsillustration.gif"

function Skills() {
  return (
    <div className='Skillbackground shadow ' >

        <div className="row">
            <div className="col-md-5">

            <img src={skillsillustration} style={{height: "450px"}} alt="" />


            </div>
            <div className="col-md-7">
                <h4 className='skillheading' >Experience Skill</h4>
                <p>Creativity with great logic building brings revolutionary results</p>

                <div className="skills">
                    <div className="row">
                        <div className="col-5">
                        <Progress heading="React JS" image={Reactlogo} progressid="Reactprogress" percentage="55%" />
                        <Progress heading="Node JS" image={NodeJS} progressid="Nodeprogress" percentage="35%" />
                        <Progress heading="Mongo DB" image={MongoDB} progressid="Mongoprogress" percentage="50%" />
                        <Progress heading="SQL" image={sql} progressid="SQLprogress" percentage="45%" />
                        </div>
                        <div className="col-5 offset-1">

                        <Progress heading="HTML" image={HTMLlogo} progressid="htmlprogress" percentage="80%" />
                        <Progress heading="CSS" image={CSSlogo} progressid="cssprogress" percentage="60%" />
                        <Progress heading="Java script ES6/JSX" image={Javascript} progressid="javascriptprogress" percentage="70%" />
                        <Progress heading="c#"  image={c} progressid="cprogress" percentage="40%" />

                        </div>
                    </div>
                </div>
            </div>
        </div>

        

    </div>
  )
}

export default Skills