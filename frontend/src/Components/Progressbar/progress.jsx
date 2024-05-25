import React from 'react'

function Progress(props) {
  return (
    <div className='my-4' >

                      <img src={props.image} style={{width:"34px"}} alt="" />  <label htmlFor="">{props.heading}</label>  
                        <div class="progress mt-2">  
                        <div class="progress-bar" role="progressbar" id={props.progressid} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{props.percentage}</div>
                        </div>

    </div>
  )
}

export default Progress