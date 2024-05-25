import React from "react";
import "./MainDashboard.scss";

//Icons
import Dashboardmoduleicons from "../components/Comps/Dashboardmoduleicons";
import wbbuildericonimage from "../images/wbicon.png";
import inventoryiconimage from "../images/inventoryicon.png";
import automarketingicon from "../images/automarketingicon.png";
import ordermangementicon from "../images/ordermangementicon.png";
import fleetmangementicon from "../images/fleetmangementicon.png";
import empicon from "../images/empicon.png";
import contacticon from "../images/contacticon.png";
import Exporticon from "../images/Exporticon.png";
import settingsicon from "../images/settingsicon.png";
import Expenseicon from "../images/Expenseicon.png";
import salesicon from "../images/salesicon.png"

function MainDashboard() {
  return (
    <div className="maindashboardbody">
      <div className="mainbody">
        <Dashboardmoduleicons
          className="d-inline-block"
          link="/dashboard/websitebuilder"
          iconimage={wbbuildericonimage}
          iconheading={"Website builder"}
        />
        <Dashboardmoduleicons
          className="d-inline-block"
          link="/dashboard/inventory"
          iconimage={inventoryiconimage}
          iconheading={"Inventory"}
        />
        <Dashboardmoduleicons
          className="d-inline-block"
          link="/dashboard/marketing"
          iconimage={automarketingicon}
          iconheading={"Automated Marketing"}
        />
        <Dashboardmoduleicons
          className="d-inline-block"
          link="/dashboard/ordersmanagement"
          iconimage={ordermangementicon}
          iconheading={"Order management"}
        />
        <Dashboardmoduleicons
          className="d-inline-block"
          link="/dashboard/fleetmangement"
          iconimage={fleetmangementicon}
          iconheading={"Fleet management"}
        />
        <Dashboardmoduleicons
          className="d-inline-block"
          link="/dashboard/empmanagement"
          iconimage={empicon}
          iconheading={"Employees management"}
        />
        <Dashboardmoduleicons
          className="d-inline-block"
          link="/dashboard/contacts"
          iconimage={contacticon}
          iconheading={"Contacts"}
        />
        <Dashboardmoduleicons
          className="d-inline-block"
          link="/dashboard/export"
          iconimage={Exporticon}
          iconheading={"Export"}
        />
        <Dashboardmoduleicons
          className="d-inline-block"
          link="/dashboard/setting"
          iconimage={settingsicon}
          iconheading={"Setting"}
        />
        <Dashboardmoduleicons
          className="d-inline-block"
          link="/dashboard/expense"
          iconimage={Expenseicon}
          iconheading={"Expense"}
        />
        <Dashboardmoduleicons
          className="d-inline-block"
          link="/dashboard/sales"
          iconimage={salesicon}
          iconheading={"Sales"}
        />

      </div>
    </div>
  );
}

export default MainDashboard;
