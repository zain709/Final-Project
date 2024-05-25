import React from 'react'
import "./Contacts.scss"

import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet } from "react-router-dom";
import contacticonwhite from "../../images/contacticonwhite.png"

function Contacts() {

    const menuItems = [
        {
          title: "Contact Management ",
          links: [
            {
              name: "Contact Management",
              href: "/dashboard/contacts/contactmanagement",
              pageicon: "fa fa-address-book" 
            }
            
          ],
        },
       
      ];

  return (
    <div>

<div className="">
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <Sidebar title={"Contacts"} headingicon={contacticonwhite}  menuItems={menuItems} />
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

export default Contacts