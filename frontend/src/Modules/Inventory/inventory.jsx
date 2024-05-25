import React, { Component, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Assests from "./Assests/Assests";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Materials from "./Materials/Materials";
import inventoryicon from "../../images/inventoryicon-white.png"

function Inventory() {

  const menuItems = [
    {
      title: "Inventory managmenet",
      links: [
        {
          name: "Assests Management",
          href: "/dashboard/inventory/assets-management",
          pageicon: "fa fa-cutlery" 
        },
        
        {
          name: "Material Management",
          href: "/dashboard/inventory/material-management",
          pageicon: "fa fa-archive " 
        }
      ],
    },
    {
      title: "Product Management",
      links: [
        {
          name: "Manage Product",
          href: "/dashboard/inventory/product",
          pageicon: "fa fa-lemon-o" 
        }
      ],
    },
  ];

  return (
    <div className="">
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar title={"Inventory Management"} headingicon={inventoryicon}  menuItems={menuItems} />
          <div class="col pb-3">
            <div className="content ">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
