import React from "react";
import "../GlobalStyles/GlobalStyles.css";

function TableComponent({ columns, data }) {
  return (
    <div className="tablesection animate__animated animate__fadeIn">
      <table class="table">
        <thead>
          <tr>
            {columns.map((col) => {
              return <th scope="col">{col}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{index + 1}</th>

                  {Object.keys(row).map((key) => {
                    return (
                      <td>
                        <div></div>
                        <div class="d-flex align-items-center">
                          {Array.isArray(row[key]) ? (
                            <div>
                              <select class="form-control">
                                {row[key].map((e) => (
                                  <option>{e}</option>
                                ))}
                              </select>
                            </div>
                          ) : (
                            row[key]
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
