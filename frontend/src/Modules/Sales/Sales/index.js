import axios from "axios";
import React, { useEffect, useState } from "react";

import BarChart from "../../../components/BasicCharts/BarChart";
import DisplayAmountCard from "../../../components/Cards/ExpenseCards/DisplayAmountCard";
import { FLASK_API } from "../../../utils/FLASKAPI_utils";

import BasicDropdown from "./Comps/BasicDropdown";
import LineChart from "../../../components/BasicCharts/LineChart";
import { Button } from "@mui/material";
import MLineChart from "../../../components/BasicCharts/MLineChart";

function Sales() {
  const [ordersData, setOrdersData] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [salesData, setSalesData] = useState([]);
  const [monthlySales, setMonthlySales] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [year2, setYear2] = useState(new Date().getFullYear());
  const [n_periods, setNPeriods] = useState(3);
  const [predicted, setPredicted] = useState();
  const years = [...Array(new Date().getFullYear() - 1990 + 1).keys()].map(
    (i) => i + 1990
  );
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const handleMonth = (m) => {
    console.log("month", m);
    setMonth(m);
  };
  const handleYear = (y) => {
    console.log("YEAR: ", years[y]);
    setYear(years[y]);
  };
  const handleNPeriods = (p) => {
    console.log("n_period: ", p, typeof p);
    setNPeriods(p);
  };
  const getMonthlyData = () => {
    var data = JSON.stringify({
      year: year2,
      mode: "monthly",
    });

    var config = {
      method: "post",
      url: `${FLASK_API}/sales`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        if (response.data.status == "success")
          setMonthlySales([...response.data.data]);
        else setMonthlySales([]);
        // const totalC = response.data.Sales.reduce(
        //   (total, currentItem) => (total = total + currentItem.count),
        //   0
        // );
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getPrediction = () => {
    var data = JSON.stringify({
      n_periods: n_periods,
    });

    var config = {
      method: "post",
      url: `${FLASK_API}/sales/predict`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        if (response.data.status == "success") {
          console.log("Predictions: ", response.data.data);
          setPredicted({ ...response.data.data });
        } else {
          console.log("FALSE: ");
          setPredicted({});
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getData = () => {
    var data = JSON.stringify({
      month: month,
      year: year,
    });

    var config = {
      method: "post",
      url: `${FLASK_API}/sales`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data.OrdersCount);
        if (response.data.status == "success") {
          setOrdersData([...response.data.data.OrdersCount]);
          const totalC = response.data.data.OrdersCount.reduce(
            (total, currentItem) => (total = total + currentItem.count),
            0
          );
          setTotalOrders(totalC);
          setSalesData([...response.data.data.Sales]);
          const totalS = response.data.data.Sales.reduce(
            (total, currentItem) => (total = total + currentItem.sale),
            0
          );
          setTotalSales(totalS);
        } else {
          setTotalSales(0);
          setSalesData([]);
          setOrdersData([]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
    getMonthlyData();
    getPrediction();
  }, []);

  return (
    <>
      <div className="row mt-4">
        <div className="col-md-6">
          <DisplayAmountCard
            title="Total Sales"
            amount={totalSales}
            currency="PKR"
          />
        </div>

        <div className="col-md-6">
          <DisplayAmountCard
            title="Total Number of Orders"
            amount={totalOrders}
          />
        </div>
      </div>
      {/* Bar Charts */}
      <div>
        <div className="col-md-12 d-flex flex-row justify-content-end">
          <Button onClick={() => getData()}>Get</Button>
          <BasicDropdown
            options={months}
            onChange={(e) => handleMonth(e.target.value)}
            selected={month}
          />
          <BasicDropdown
            options={years}
            onChange={(e) => handleYear(e.target.value)}
            selected={years.indexOf(year)}
          />
        </div>

        <div className="d-flex flex-row">
          <div className="col-md-6">
            <BarChart
              title="Total Sales per OrderType"
              color="rgb(0,0,255)"
              chartData={salesData}
              label="Sales"
            />
          </div>

          <div className="col-md-6">
            <BarChart
              title="Number of Orders per OrderType"
              color="rgb(0,255,0)"
              chartData={ordersData}
              label="Orders"
            />
          </div>
        </div>
      </div>
      {/* Line Charts */}
      <div>
        <div className="col-md-12 d-flex flex-row justify-content-end">
          <Button onClick={() => getMonthlyData()}>Get</Button>
          <BasicDropdown
            options={years}
            onChange={(e) => setYear2(years[e.target.value])}
            selected={years.indexOf(year2)}
          />
        </div>
        <div className="col-md-12">
          <LineChart
            title={`Monthly Data for Year ${year2}`}
            label="Sales"
            chartData={monthlySales}
          />
        </div>
      </div>
      <div>
        <div>
          <div className="col-md-12 d-flex flex-row justify-content-end">
            <div className="col-md-2 d-flex flex-row">
              <Button onClick={() => getPrediction()}>Get</Button>
              <input
                id="number_input"
                type="number"
                className="form-control form-control-sm"
                onChange={(e) => handleNPeriods(parseInt(e.target.value))}
                min="1"
                defaultValue={"3"}
              />
            </div>
          </div>
          <MLineChart title="Predicted Sales" chartData={predicted} />
        </div>
      </div>
    </>
  );
}

export default Sales;
