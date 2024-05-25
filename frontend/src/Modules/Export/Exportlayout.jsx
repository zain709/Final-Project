import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet } from "react-router-dom";
import Exporticonwhite from "../../images/Exporticon-white.png"

function Exportlayout() {

    const menuItems = [
        {
          title: "Employee management",
          links: [
            {
              name: "Export Data",
              href: "/dashboard/export",
              pageicon:"fa fa-download" 
            },
            
          ],
        },
       
      ];

  return (
    <div>

    <div className="">
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar title={"Employee management"} headingicon={Exporticonwhite}  menuItems={menuItems} />
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

export default Exportlayout