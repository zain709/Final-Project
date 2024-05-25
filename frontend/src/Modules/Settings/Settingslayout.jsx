import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet } from "react-router-dom";
import settingsiconwhite from "../../images/settingsiconwhite.png"

function Settingslayout() {

    const menuItems = [
        {
          title: "Employee management",
          links: [
            {
              name: "User management",
              href: "/dashboard/setting",
              pageicon:"fa fa-user-circle-o" 
            },
            
          ],
        },
       
      ];

  return (
    <div>

    <div className="">
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar title={"Settings"} headingicon={settingsiconwhite}  menuItems={menuItems} />
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

export default Settingslayout