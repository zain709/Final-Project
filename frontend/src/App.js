import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// Website
import Homepage from "./Modules/Website/Home/homepage";
import Classdineinorder from "./Modules/Website/onlineorderpage/dineinorder/classdineinorder";
import About from "./Modules/Website/About/about";
import Contact from "./Modules/Website/Contact/contact";
import Promotions from "./Modules/Website/promotions/promotions";
import Websitefrontend from "./Modules/Website/websitemaster/websitefrontend";

// Dashboard
import Dashboardlayout from "./Modules/Dashboardlayout";
import Websidebuilder from "./Modules/Websitebuilder/websidebuilder";
import MainDashboard from "./Modules/mainDashboard";

//Login
import Loginpage from "./Modules/Loginpage/loginpage";

//Inventory modules

import Inventory from "./Modules/Inventory/inventory";
import Assests from "./Modules/Inventory/Assests/Assests";
import Materials from "./Modules/Inventory/Materials/Materials";
import Products from "./Modules/Inventory/Product/products";

//website builder modules

import Feedback from "./Modules/Websitebuilder/Feedback/feedback";
import Leads from "./Modules/Websitebuilder/Leads/leads";
import Basicinfo from "./Modules/Websitebuilder/Basicinfo/basicinfo";
import Homepagewb from "./Modules/Websitebuilder/Homepagewb/homepagewb";
import Aboutpagewb from "./Modules/Websitebuilder/Aboutpage/aboutpagewb";
import Promotionpage from "./Modules/Websitebuilder/promotionpage/promotionpage";

//Marketing modules

import Marketing from "./Modules/Promotion/Marketing";
import Vouchers from "./Modules/Promotion/Vouchers";
import Discount from "./Modules/Promotion/Discount";
import Marketingpage from "./Modules/Promotion/Marketingpage";

//Order management modules

import Ordermangementdashboard from "./Modules/Ordermanagement/Ordermangementdashboard";
import Dineinpick from "./Modules/Ordermanagement/Dineinpick";
import Delivery from "./Modules/Ordermanagement/Delivery";

// Fleet mangement

import Fleetmangementdashboard from "./Modules/Fleet mangement/fleetmangementdashboard";
import Deliverieslist from "./Modules/Fleet mangement/Deliverieslist";
import Tracking from "./Modules/Fleet mangement/Tracking";

// Employee mangement

import Employeesmanagement from "./Modules/Employees/Employeesmanagement";
import Employeedata from "./Modules/Employees/Employeedata";
import Addeditemployee from "./Modules/Employees/Addeditemployee";
import Payrollandattendence from "./Modules/Employees/Payrollandattendence";

// Contacts

import Contacts from "./Modules/Contacts/Contacts.jsx";
import Contactmanagement from "./Modules/Contacts/Contactmanagement.jsx";

// Export

import Export from "./Modules/Export/Export";
import Exportlayout from "./Modules/Export/Exportlayout";

// Settings

import Settings from "./Modules/Settings/Settings";
import Settingslayout from "./Modules/Settings/Settingslayout";

// Expense

import Expenselayout from "./Modules/Expense/Expenselayout";
import Expensesheet from "./Modules/Expense/Expensesheet";
import Libility from "./Modules/Expense/libility";

import Cookies from "js-cookie";

// expense
import SalesManagement from "./Modules/Sales";
import Sales from "./Modules/Sales/Sales";

// Authenticate

function App() {
  let authenticate = () => {
    if (Cookies.get("login") == "true") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="App">
      <Routes>
        {/* Routing for website "layout is Websitefrontend" */}

        <Route path="/" element={<Websitefrontend />}>
          <Route index element={<Homepage />} />
          {/* <Route path="home" element={<Homepage />} /> */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="order" element={<Classdineinorder />} />
        </Route>

        {/* Routing for Dashboard "layout is Dashboard Backend" */}

        <Route path="/login" element={<Loginpage />}>
          <Route index element={<Loginpage />} />
        </Route>

        {/* Routing with authentication */}
        <Route
          path="/dashboard"
          element={
            authenticate() ? <Dashboardlayout /> : <Navigate to={"/login"} />
          }
        >
          <Route index element={<MainDashboard />} />

          {/* Routing for website builder */}

          <Route path="websitebuilder" element={<Websidebuilder />}>
            <Route index element={<Feedback />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="leads" element={<Leads />} />
            <Route path="basicinfo" element={<Basicinfo />} />
            <Route path="homepage" element={<Homepagewb />} />
            <Route path="about" element={<Aboutpagewb />} />
            <Route path="promotionpage" element={<Promotionpage />} />
          </Route>

          {/* Routing for Inventory  */}

          <Route path="inventory" element={<Inventory />}>
            <Route index element={<Assests />} />
            <Route path="assets-management" element={<Assests />} />
            <Route path="product" element={<Products />} />
            <Route path="material-management" element={<Materials />} />
          </Route>

          {/* Routing for Marketing  */}

          <Route path="marketing" element={<Marketing />}>
            <Route index element={<Vouchers />} />
            <Route path="vouchers" element={<Vouchers />} />
            <Route path="discounts" element={<Discount />} />
            <Route path="marketingpage" element={<Marketingpage />} />
          </Route>

          {/* Routing for Order management*/}

          <Route path="ordersmanagement" element={<Ordermangementdashboard />}>
            <Route index element={<Dineinpick />} />
            <Route path="dinepick" element={<Dineinpick />} />
            <Route path="delivery" element={<Delivery />} />
          </Route>

          {/* Routing for Fleet management / Tracking */}

          <Route path="fleetmangement" element={<Fleetmangementdashboard />}>
            <Route index element={<Deliverieslist />} />
            <Route path="deliverylist" element={<Deliverieslist />} />
            <Route path="tracking" element={<Tracking />} />
          </Route>

          {/* For sales Routing */}

          <Route path="sales" element={<SalesManagement />}>
            <Route index element={<Sales />} />
          </Route>

          {/* Routing for Employee management*/}

          <Route path="empmanagement" element={<Employeesmanagement />}>
            <Route index element={<Employeedata />} />
            <Route path="empdata" element={<Employeedata />} />
            <Route path="empedits" element={<Addeditemployee />} />
            <Route
              path="attendencepayroll"
              element={<Payrollandattendence />}
            />
          </Route>

          {/* Routing for Contacts*/}

          <Route path="contacts" element={<Contacts />}>
            <Route index element={<Contactmanagement />} />
            <Route path="contactmanagement" element={<Contactmanagement />} />
          </Route>

          {/* Routing for Export*/}

          <Route path="export" element={<Exportlayout />}>
            <Route index element={<Export />} />
            <Route path="export" element={<Export />} />
          </Route>

          {/* Routing for Settings*/}

          <Route path="setting" element={<Settingslayout />}>
            <Route index element={<Settings />} />
            <Route path="setting" element={<Settings />} />
          </Route>

          {/* Routing for Expense*/}

          <Route path="expense" element={<Expenselayout />}>
            <Route index element={<Libility />} />
            <Route path="libility" element={<Libility />} />
            <Route path="expensesheet" element={<Expensesheet />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
