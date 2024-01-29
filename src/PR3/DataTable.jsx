// "use client";
// import React from "react";
import React, { useEffect, useState } from "react";
import Style from "./pr3.module.css";
import allUserData from "./allUserData.js";
import TableRows from "./TableRows.jsx";

export default function DataTable() {
  // console.log(allUserData);

  // const deleteTr = (index) => {
  //   const updatedData = [...display];
  //   updatedData.splice(index, 1);

  //   setDisplay(updatedData);
  //   alert("Deleted Successfull");
  // };

  // const editTr = (btnIndex) => {
  //   allUserData.map((userData, index) => {
  //     if (btnIndex === index) {
  //       console.log(userData);
  //       // console.log(e);
  //     }
  //   });

  //   localStorage.setItem("allUserData", JSON.stringify(allUserData));
  //   // alert("Edited Successfull");
  // };

  // useEffect(() => {
  //   console.log("deleted");
  // }, [allUserData]);

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
        </tr>
      </thead>
      <tbody>
        {allUserData.map((userData, index) => (
          <TableRows key={index} tableData={userData} />
        ))}
      </tbody>
    </table>
  );
}
