import React,{useEffect} from 'react'
import "./header.scss"
import Solidbuttondark from '../../Components/Buttons/solidbuttondark';
function Header() {
   
  return (
    <div className='navbarsimple px-4' >

    <div className="name"> <h5 className='myname' > Taha rasheed </h5></div>

    <div className="menuebar">
        <ul className='menue' >
            <li className='menuelink mx-4' >Home</li>
            <li className='menuelink mx-4 ' >Projects</li>
            <li className='menuelink mx-4 ' >Skills</li>
            <li className='menuelink mx-4' >Education</li>
        </ul>
    </div>

    <div className="contact m-0 mt-2">
        <Solidbuttondark text="Contact" />
    </div>

    </div>
  )
}

export default Header