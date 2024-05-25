import React, { useEffect, useState } from "react";
import "../../GlobalStyles/GlobalStyles.css";

function ExpenseTable({ data, totalEarnings, setProfit, setExpense }) {
  // const [totalSpend, setTotalSpend] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalAsset, setTotalAsset] = useState(0);
  const [totalLiability, setTotalLiability] = useState(0);
  const [totalMaterial, setTotalMaterial] = useState(0);

  useEffect(() => {
    let recordsTotal = [];
    let totalAssetPrice = [];
    let totalLiabilityPrice = [];
    let totalMaterialPrice = [];

    const total = (() => {
      data.map((record) => {
        record.type === "asset"
          ? recordsTotal.push(Number(record.price))
          : record.type === "liability"
          ? recordsTotal.push(Number(record.price))
          : recordsTotal.push(Number(record.price));

        record.type === "asset"
          ? totalAssetPrice.push(Number(record.price))
          : record.type === "liability"
          ? totalLiabilityPrice.push(Number(record.price))
          : totalMaterialPrice.push(Number(record.price));

        return "";
      });
      return {
        allSpend: recordsTotal.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        ),
        totalAssets: totalAssetPrice.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        ),
        totalLiability: totalLiabilityPrice.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        ),
        totalMaterial: totalMaterialPrice.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        ),
      };
    })();

    console.log(total);

    // setTotalSpend(total.allSpend);
    setTotalAsset(total.totalAssets);
    setTotalLiability(total.totalLiability);
    setTotalMaterial(total.totalMaterial);

    const spend = totalEarnings - total.allSpend;

    setTotalProfit(spend);

    setProfit(spend);
    setExpense(total.allSpend);
  }, [data, totalEarnings]);

  return (
    <div className="tablesection animate__animated animate__fadeIn overflow-auto">
      <table className="table text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th colSpan="3">Spend</th>
          </tr>

          <tr>
            <th colSpan={3}></th>
            <th>Asset</th>
            <th>Liability</th>
            <th>Material</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <>
                <tr key={index}>
                  <td style={{ width: "40px" }}>{row.name}</td>
                  <td style={{ width: "40px" }}>{row.description}</td>
                  <td style={{ width: "40px" }}>{row.date}</td>
                  {row.type === "asset" ? (
                    <td style={{ width: "40px" }}>{row.price}</td>
                  ) : (
                    <td style={{ width: "40px" }}>-</td>
                  )}
                  {row.type === "liability" ? (
                    <td style={{ width: "40px" }}>{row.price}</td>
                  ) : (
                    <td style={{ width: "40px" }}>-</td>
                  )}
                  {row.type === "material" ? (
                    <td style={{ width: "40px" }}>{row.price}</td>
                  ) : (
                    <td style={{ width: "40px" }}>-</td>
                  )}
                </tr>
              </>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} style={{ fontWeight: "bolder" }}></td>
            <td style={{ fontWeight: "bolder" }}> {totalAsset}</td>
            <td colSpan={2}>-</td>
          </tr>
          <tr>
            <td colSpan={3} style={{ fontWeight: "bolder" }}></td>
            <td>-</td>
            <td style={{ fontWeight: "bolder" }}> {totalLiability}</td>
            <td colSpan={3}>-</td>
          </tr>
          <tr>
            <td colSpan={3} style={{ fontWeight: "bolder" }}></td>
            <td colSpan={2}>-</td>
            <td style={{ fontWeight: "bolder" }}> {totalMaterial}</td>
          </tr>
          <tr>
            <td colSpan={4} style={{ fontWeight: "bolder" }}>
              Total Profit
            </td>
            <td colSpan={3} style={{ fontWeight: "bolder" }}>
              {totalProfit}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ExpenseTable;
