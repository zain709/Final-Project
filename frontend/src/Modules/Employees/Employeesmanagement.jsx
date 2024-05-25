import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet } from "react-router-dom";
import empiconwhite from "../../images/empiconwhite.png"

function Employeesmanagement() {

    const menuItems = [
        {
          title: "Employee management",
          links: [
            {
              name: "Employe Details",
              href: "/dashboard/empmanagement/empdata",
              pageicon: "fa fa-user" 
            },
            
            {
              name: "Add/Edit Employees",
              href: "/dashboard/empmanagement/empedits",
              pageicon: "fa fa-table" 
            },
            {
              name: "Payroll & Attendence",
              href: "/dashboard/empmanagement/attendencepayroll",
              pageicon: "fa fa-check-square-o" 
            }
          ],
        },
       
      ];


  return (
    <div>

    <div className="">
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar title={"Employee management"} headingicon={empiconwhite}  menuItems={menuItems} />
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

export default Employeesmanagement