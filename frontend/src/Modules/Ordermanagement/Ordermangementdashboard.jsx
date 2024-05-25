import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet } from "react-router-dom";
import ordermangementiconwhite from "../../images/ordermangementiconwhite.png"
function Ordermangementdashboard() {


    const menuItems = [
        {
          title: "Order managmenet",
          links: [
            {
              name: "Dine-in & Pickup ",
              href: "/dashboard/ordersmanagement/dinepick",
              pageicon: "fa fa-cutlery" 
            },
            
            {
              name: "Delivery orders",
              href: "/dashboard/ordersmanagement/delivery",
              pageicon: "fa fa-archive " 
            }
          ],
        },
        {
          title: "Customer feedback",
          links: [
            {
              name: "Feedbacks",
              href: "/dashboard/websitebuilder/feedback",
              pageicon: "fa fa-lemon-o" 
            }
          ],
        },
      ];

  return (
    <div>


<div className="">
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar title={"Order management"} headingicon={ordermangementiconwhite}  menuItems={menuItems} />
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

export default Ordermangementdashboard