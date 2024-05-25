import React, { Component } from "react";
import "./websitebuilder.scss";
import Feedback from "./Feedback/feedback";
import Leads from "./Leads/leads";
import Basicinfo from "./Basicinfo/basicinfo";
import Sidebar from "../../components/Sidebar/Sidebar";
import {Outlet} from "react-router-dom"
import webbuilderwhiticon from "../../images/wbiconwhite.png"


export class Websidebuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: [
        {
          title: "Customers info",
          links: [
            {
              name: "Feedback",
              href: "/dashboard/websitebuilder/feedback",
              pageicon: "fa fa-comments"  
            
            },
            {
              name: "Leads",
              href: "/dashboard/websitebuilder/leads",
              pageicon: "fa fa-check-circle"  
            },
          ],
        },

        {
          title: "Website pages",
          links: [
            {
              name: "Basic Info",
              href: "/dashboard/websitebuilder/basicinfo",
              pageicon: "fa fa-info-circle"  
            },
            {
              name: "Home page",
              href: "/dashboard/websitebuilder/homepage",
              pageicon: "fa fa-home"  
            },
            {
              name: "About",
              href: "/dashboard/websitebuilder/about",
              pageicon: "fa fa-user"  
            },
            {
              name: "Promotion page",
              href: "/dashboard/websitebuilder/promotionpage",
              pageicon: "fa fa-bullhorn"  
            },
          ],
        },
      ],
    };
  }
  
  render() {
    return (
      <div className="">
        <div class="container-fluid">
          <div class="row flex-nowrap">
            <Sidebar title="Website Builder" headingicon={webbuilderwhiticon} menuItems={this.state.menuItems} />

             <div class="col pb-3">
              <div className="content">
              <Outlet/>
              </div>				
             </div>

         </div>
      </div>
    </div>
    );
  }
}

export default Websidebuilder;
