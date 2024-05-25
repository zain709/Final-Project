import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const ExpenseManagment = () => {
  const menuItems = [
    {
      links: [
        {
          name: "Expense",
          href: "/dashboard/expense-managment/expense",
          pageicon: "fa fa-solid fa-ticket",
        },

        {
          name: "Profit",
          href: "/dashboard/expense-managment/profit",
          pageicon: "fa fa-certificate",
        },
        {
          name: "Liability",
          href: "/dashboard/expense-managment/liability",
          pageicon: "fa fa-magic",
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
              // headingicon={automarketingicon}
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
};

export default ExpenseManagment;
