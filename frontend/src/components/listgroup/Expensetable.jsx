import React from 'react'

function Expensetable(props) {

  return (
    <table class="table table-bordered">
    <thead>    
      <tr>
        {props.columns.map((e) =>
        <th scope="col">{e}</th>
        )}
      </tr>    
    </thead>
    <tbody>
      {props.data.map((row)=>
      <tr> 
        {Object.values(row).map((cell)=>
        <td> { props.generatecell( cell ) }</td>
        )}
      </tr>
      )}
    </tbody>
  </table>
  )
}

export default Expensetable