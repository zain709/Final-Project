import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import salesicon from "../../images/sales_white.png"

function SalesManagement() {
  const menuItems = [
    {
      links: [
        {
          name: "Analytics",
          href: "/dashboard/sales",
          pageicon: "fa fa-line-chart",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="">
        <div class="container-fluid">
          <div class="row flex-nowrap">
            <Sidebar
              title={"Expense Tracker"}
              headingicon={salesicon}
              menuItems={menuItems}
            />
            <div class="col pb-3">
              <div className="content ">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesManagement