import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet } from "react-router-dom";
import fleetmangementicon from "../../images/fleetmangement.pngwhite.png"


function Fleetmangementdashboard() {

    const menuItems = [
        {
          title: "Fleet tracking",
          links: [
            {
              name: "Deliveries Details ",
              href: "/dashboard/fleetmangement/deliverylist",
              pageicon: "fa fa-list-ul" 
            }            
          ],
        },
       
      ];

  return (
    <div>

<div className="">
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar title={"Fleet management"} headingicon={fleetmangementicon}  menuItems={menuItems} />
          <div class="col pb-3">
            <div className="content ">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Fleetmangementdashboard
