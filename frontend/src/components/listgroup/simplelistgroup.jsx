import React from 'react'
import "./simplelistgroup.scss"

function Simplelistgroup(props) {

//  Input

//Heading -> title
//Heading message -> titlemessage

// Listitems
  return (
    <div style={{width:"100%",overflow:"auto"}} >
<ol class="list-group list-group-numbered">
   <div> 
   <h5>{props.title}</h5> 
   <p>{props.titlemessage}</p> 
   </div>


  { props.listitems.map((e)=>
 <li  id='simplelistgroupitem' class="list-group-item d-flex justify-content-between align-items-start">
 <div class="ms-2 me-auto">
   <div class="fw-bold">{e.name}</div>
   {e.description}
 </div>
 <span class="badge bg-primary rounded-pill" style={{padding:"9px"}} >{e.code}</span>
</li>
  ) 
 
}
 
</ol>

    </div>
  )
}

export default Simplelistgroup