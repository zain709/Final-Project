import React, { useState } from 'react'

function SimpleModal(props) {

    //Inputs

    // 1 modalaction ( function on save button click)
    //Content
    //title
    // closebuttontext,savebuttontext
    //showsavebutton (true of false)
  

    function modalcontent(){

     return   props.Content

    }

  return (
    <div>

<button type="button" id='showmodalbutton' class="btn btn-primary d-none w-75" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">{props.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
  {modalcontent()}

      </div>
      <div class="modal-footer">
        <button type="button" id="closebutton" class="btn btn-secondary" data-bs-dismiss="modal">{props.closebuttontext}</button>
      
      {(props.showsavebutton=="true")? <button type="button" onClick={props.modalaction}  data-bs-dismiss="" id='buttonstyle3' class="btn btn-primary">{props.savebuttontext}</button>:""} 
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default SimpleModal