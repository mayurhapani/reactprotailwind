// import React, { useEffect, useState } from "react";
// import allUserData from "./allUserData.js";

const TableRows = ({ tableData }) => {
  // console.log(tableData);

  return (
    <tr>
      <td>{tableData.uName}</td>
      <td>{tableData.uEmail}</td>
      <td>{tableData.uPass}</td>
      <td>{tableData.uGender}</td>
      <td>{tableData.hobbies.uReadding}</td>
      <td>{tableData.uCorse}</td>
      <td>{tableData.uAddress}</td>
    </tr>
  );
};

export default TableRows;
