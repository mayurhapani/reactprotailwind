import React, { useEffect, useState } from "react";
// import allUserData from "./allUserData.js";

const TableRows = ({ tableData, index, onDelete }) => {
  // console.log(tableData, index);

  return (
    <tr>
      <td>{tableData.uName}</td>
      <td>{tableData.uEmail}</td>
      {/* <td>{tableData.uPass}</td> */}
      <td>{tableData.uGender}</td>
      <td>{tableData.hobbies.uReadding}</td>
      <td>{tableData.uCorse}</td>
      <td>{tableData.uAddress}</td>

      <td>
        <button
          onClick={() => {
            editTr(index);
          }}
        >
          Edit
        </button>
        <button onClick={onDelete}>Del</button>
      </td>
    </tr>
  );
};

export default TableRows;
