import React, { useState, useEffect } from "react";
import BasicCard from "../../../components/Cards/BasicCard";
import TableComponent from "../../../components/Tables/TableComponent";
import Filterbar from "../../../components/Comps/Filterbar";
import backendwebsite from "../../../backendwebsite.json";
import axios from "axios";
import Basicbanner from "../../../components/Cards/basicbanner";
import * as bootstrap from "bootstrap";
import { Modal } from "bootstrap";
import SimpleModal from "../../../components/Modal/Modal";
import "./assets.scss";

function Assests() {
  let [assets, setassets] = useState([]);
  let [assetscopy, setassetscopy] = useState([]);
  let [assetsstats, setassetsstats] = useState([]);
  let [modalboxcontent, setmodalboxcontent] = useState();
  let [savebutton, setsavebutton] = useState();
  let [yeardata, setyeardata] = useState();
  let [monthdata, setmonthdata] = useState();
  let [yearcardsdata, setyearcardsdata] = useState([]);
  let [monthcardsdata, setmonthcardsdata] = useState([]);

  useEffect(() => {
    // for getting all Asset detials
    axios.get(backendwebsite[0].backendwebsite + `/asset`).then((res) => {
      setassets(res.data);
      setassetscopy(res.data);
    });

    // for getting monthly and yearly

    axios
      .get(backendwebsite[0].backendwebsite + `/asset/purshasedstats`)
      .then((res) => {
        setassetsstats(res.data);
      });

    axios
      .get(backendwebsite[0].backendwebsite + `/asset/monthly`)
      .then((res) => {
        setmonthcardsdata(res.data);
      });

    axios
      .get(backendwebsite[0].backendwebsite + `/asset/yearly`)
      .then((res) => {
        setyearcardsdata(res.data);
      });
  }, []);

  const columns = [
    "#",
    "ID",
    "Name",
    "Discription",
    "Vendor",
    "Price",
    "Quantity",
    "Date",
  ];

  assets.forEach((element) => {
    delete element["__v"];
  });

  const data = assets;

  //3rd card button to show Asset model box

  let showassetmodelbox = () => {
    setsavebutton("true");
    setmodalboxcontent(newassetcontent());
    let modalshowbutton = document.getElementById("showmodalbutton");
    modalshowbutton.click();
  };

  //2nd card link button to show Asset of the year

  let showymonthlyassetcontent = () => {
    setsavebutton("false");
    setmonthdata([...assetsstats[1]]);
    setmodalboxcontent(monthlyassetcontent());
    let modalshowbutton = document.getElementById("showmodalbutton");
    modalshowbutton.click();
    console.log(assetsstats);
  };

  //1st card link button to show Asset of the year

  let showyyearlyassetcontent = () => {
    setsavebutton("false");
    setyeardata([...assetsstats[0]]);
    setmodalboxcontent(yearlyassetcontent());
    let modalshowbutton = document.getElementById("showmodalbutton");
    modalshowbutton.click();
  };

  //-->> Model box contents

  //monthly items

  //yarly items content
  let monthlyassetcontent = () => {
    monthdata.forEach((element) => {
      delete element["__v"];
    });

    return (
      <div className="my-3">
        <div class="form-group">
          <label for="yearlyfilterassetname">Search by name</label>
          <input
            type="text"
            onChange={filtermonthlyiasset}
            id="yearlyfilterassetname"
            class="form-control mt-2"
            placeholder="E.g Table..."
          />
        </div>

        <div className="table">
          <TableComponent columns={columns} data={monthdata} />
        </div>
      </div>
    );
  };

  let filtermonthlyiasset = () => {
    let yearlyfilterassetname = document
      .getElementById("yearlyfilterassetname")
      .value.toLowerCase();
    if (yearlyfilterassetname != "") {
      let matcheditems = [];

      monthdata.forEach((element) => {
        let en = element.name.toLowerCase();
        if (en.startsWith(yearlyfilterassetname)) {
          matcheditems.push(element);
        }
      });

      setmonthdata((monthdata = matcheditems));
      setmodalboxcontent(monthlyassetcontent());
    } else if (yearlyfilterassetname == "") {
      setmonthdata((monthdata = assetsstats[0]));
      setmodalboxcontent(monthlyassetcontent());
    }
  };

  //yarly items content
  let yearlyassetcontent = () => {
    yeardata.forEach((element) => {
      delete element["__v"];
    });

    return (
      <div className="my-3">
        <div class="form-group">
          <label for="yearlyfilterassetname">Search by name</label>
          <input
            type="text"
            onChange={filteryearlyiasset}
            id="yearlyfilterassetname"
            class="form-control mt-2"
            placeholder="E.g Table..."
          />
        </div>

        <div className="table">
          <TableComponent columns={columns} data={yeardata} />
        </div>
      </div>
    );
  };

  let filteryearlyiasset = () => {
    let yearlyfilterassetname = document
      .getElementById("yearlyfilterassetname")
      .value.toLowerCase();
    if (yearlyfilterassetname != "") {
      let matcheditems = [];

      yeardata.forEach((element) => {
        let en = element.name.toLowerCase();
        if (en.startsWith(yearlyfilterassetname)) {
          matcheditems.push(element);
        }
      });

      setyeardata((yeardata = matcheditems));
      setmodalboxcontent(yearlyassetcontent());
    } else if (yearlyfilterassetname == "") {
      setyeardata((yeardata = assetsstats[0]));
      setmodalboxcontent(yearlyassetcontent());
    }
  };

  //New asset content
  let newassetcontent = () => {
    return (
      <div className="content">
        <h5 className="content text-center ">Add content</h5>
        <p className="content text-center ">
          Please fill all detials correctly
        </p>
        <div className="form">
          <div className="row my-2">
            <div className="col-md-6">
              <label for="name" class="form-label mt-3 ">
                Asset name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Tables"
              ></input>

              <label for="Discription" class="form-label mt-3 ">
                Discription
              </label>
              <textarea
                type="text"
                class="form-control"
                id="Discription"
                placeholder="For ousite dine in..."
              />

              <label for="vendor" class="form-label mt-3 ">
                Vendor
              </label>
              <input
                type="text"
                class="form-control"
                id="Vendor"
                placeholder="xyz company"
              ></input>
            </div>
            <div className="col-md-6">
              <label for="Price" class="form-label mt-3 ">
                Price (Per unit)
              </label>
              <input
                type="number"
                class="form-control"
                id="Price"
                placeholder=""
              ></input>

              <label for="Quantity" class="form-label mt-3 ">
                Quantity
              </label>
              <input
                type="number"
                class="form-control"
                id="Quantity"
                placeholder=""
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  };

  //Function to save asset on save button click on modal box

  let saveasset = async () => {
    let name = document.getElementById("name").value;
    let Discription = document.getElementById("Discription").value;
    let Vendor = document.getElementById("Vendor").value;
    let Price = document.getElementById("Price").value;
    let Quantity = document.getElementById("Quantity").value;

    if (
      name != "" &&
      Discription != "" &&
      Vendor != "" &&
      Price != "" &&
      Quantity != ""
    ) {
      axios
        .post(backendwebsite[0].backendwebsite + "/asset", {
          name: name,
          discription: Discription,
          vendor: Vendor,
          price: Price * Quantity,
          quantity: Quantity,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          alert("Unsuccessfull for unknown reason");
        });

      alert("successfully saved!");
      let asd = document.getElementById("closebutton");
      asd.click();
    } else {
      alert("Please fill all details correctly");
    }
  };

  //tool tip actions

  //name filter
  let assetnamefilter = () => {
    let textcontrol = document.getElementById("namefilterasset").value;
    let newarr = [];
    if (textcontrol != "") {
      assets.forEach((element) => {
        let text = element.name.toLowerCase();
        if (text.startsWith(textcontrol.toLowerCase())) {
          newarr.push(element);
        }
      });

      setassets((assets = newarr));
    } else if (textcontrol == "") {
      setassets((assets = assetscopy));
    }
  };

  //date filter

  let assetsdatefilter = () => {
    let datecontrol = document.getElementById("datefilterasset").value;
    let newarr = [];
    let flag = 0;

    if (datecontrol != "") {
      assets.forEach((element) => {
        if (datecontrol.toString() == element.date) {
          newarr.push(element);
          flag = 1;
        }
      });

      if (flag == 1) {
        setassets((assets = newarr));
      } else if (flag == 0) {
        alert("No record found on date: " + datecontrol);
        setassets((assets = assetscopy));
      }
    }
  };

  return (
    <div>
      {/* 3 cards */}

      <div className="row mt-4">
        <div className="col-md-4">
          <BasicCard
            title="Total Purchased In a Year"
            newval={yearcardsdata.length}
            unit="items"
            middletext="total purchases"
            linkaction={showyyearlyassetcontent}
            interval="year"
            linktext="Click to show list"
            loweroption1="2"
          />
        </div>
        <div className="col-md-4">
          <BasicCard
            title="Total Purchased In a month"
            newval={monthcardsdata.length}
            unit="items"
            middletext="total purchases"
            linkaction={showymonthlyassetcontent}
            interval="month"
            linktext="Click to show list"
            loweroption1="2"
          />
        </div>
        <div className="col-md-4">
          <Basicbanner
            heading="New asset"
            text="Add new asset"
            buttontext="Add"
            buttonaction={showassetmodelbox}
          />
        </div>
       
      </div>
     
     {/* Tool bar */}

     <div className="container toolbardiv my-2">
      <div className="row toolbar shadow">
      <div class="col-lg-3 input-group">
            <span class="input-group-text" id="basic-addon1">Search by name</span>
            <input type="text" id="namefilterasset" onChange={assetnamefilter} class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>

      <div class="col-lg-3 input-group">
         <span class="input-group-text " id="basic-addon1">Search by Date</span>
         <input type="date" id="datefilterasset" class="form-control" onChange={assetsdatefilter} placeholder="Username" aria-label="Name" aria-describedby="basic-addon1"/>
      </div>

      </div>
     </div>

      {/* Table */}

      <div className="container">
        <TableComponent columns={columns} data={data} />
      </div>

      <SimpleModal
        modalaction={saveasset}
        Content={modalboxcontent}
        title="Add new asset"
        closebuttontext="close"
        savebuttontext="Save"
        showsavebutton={savebutton}
      />
    </div>
  );
}

export default Assests;
