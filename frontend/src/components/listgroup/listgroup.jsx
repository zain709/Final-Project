import React from 'react'

function Listgroup(props) {
  return (
    <div>

<ul class="list-group">
  <li class="list-group-item active bg-dark text-light" aria-current="true">{props.title}</li>
  { 
   props.data.map((e)=>
     <li class="list-group-item">{e}</li>
  ) 
  }
  
</ul>
    </div>
  )
}

export default Listgroup