import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet } from "react-router-dom";
import Expensewhite from "../../images/Expensewhite.png"

function Expenselayout() {

    const menuItems = [
        {
          title: "Expense management",
          links: [
            {
              name: "libility",
              href: "/dashboard/expense/libility",
              pageicon: "fa fa-user" 
            },
            
            {
              name: "Expense Sheet",
              href: "/dashboard/expense/expensesheet",
              pageicon: "fa fa-table" 
            },
          ],
        },
       
      ];

  return (
    <div>

    <div className="">
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar title={"Expense"} headingicon={Expensewhite}  menuItems={menuItems} />
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

export default Expenselayout