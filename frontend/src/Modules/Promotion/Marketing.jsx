import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import automarketingicon from "../../images/marketingiconwhite.png";
import Vouchers from "./Vouchers";

function Marketing() {
  const menuItems = [
    {
      title: "Promotion",
      links: [
        {
          name: "Vouchers",
          href: "/dashboard/marketing/vouchers",
          pageicon: "fa fa-solid fa-ticket",
        },

        {
          name: "Discounts",
          href: "/dashboard/marketing/discounts",
          pageicon: "fa fa-certificate",
        },
      ],
    },
    {
      title: "Marketing",
      links: [
        {
          name: "Marketing",
          href: "/dashboard/marketing/marketingpage",
          pageicon: "fa fa-magic",
        },
      ],
    },
  ];

  return (
    <div className="">
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar
            title={"Expense"}
            headingicon={automarketingicon}
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
  );
}

export default Marketing;
