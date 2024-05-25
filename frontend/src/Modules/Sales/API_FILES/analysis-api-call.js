// import axios from "axios";
// import { FLASK_API } from "../../../utils/FLASKAPI_utils";

// export const getSales = (raw) => async () => {
//   var data = JSON.stringify({
//     month: "5",
//     year: "2019",
//   });

//   var config = {
//     method: "post",
//     url: `${FLASK_API}/sales`,
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };

//   axios(config)
//     .then(function (response) {
//       console.log(response.data.OrdersCount);
//       setOrdersData([...response.data.OrdersCount]);
//       const totalC = response.data.OrdersCount.reduce(
//         (total, currentItem) => (total = total + currentItem.count),
//         0
//       );
//       setTotalOrders(totalC);
//       setSalesData([...response.data.Sales]);
//       const totalS = response.data.Sales.reduce(
//         (total, currentItem) => (total = total + currentItem.sale),
//         0
//       );
//       setTotalSales(totalS);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   // console.log("Sales:", salesData);
// };
