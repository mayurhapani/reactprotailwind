// "use client";
import React from "react";
import Style from "./pr3.module.css";
import allUserData from "./allUserData.js";
import TableRows from "./TableRows.jsx";
// import { TableRow } from "./TableRow";

export default function DataTable() {
  return (
    <table className={Style.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email ID</th>
          <th>Password</th>
          <th>Gender</th>
          <th>Hobbies</th>
          <th>Corse</th>
          <th>Address</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {allUserData.map((userData, index) => {
          <TableRows />;
          //   <TableRow key={index} userData={userData} />;
        })}
      </tbody>
    </table>
  );
}
