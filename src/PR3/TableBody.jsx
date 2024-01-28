import React, { useEffect, useState } from "react";
import allUserData from "./allUserData.js";

export default function TableBody() {
  // console.log(allUserData);

  const [display, setDisplay] = useState(allUserData);
  let tableRow = "";
  let allTableRow = "";

  // let display;
  useEffect(() => {});

  const editTr = (btnIndex) => {
    allUserData.map((userData, index) => {
      if (btnIndex === index) {
        console.log(userData);
        // console.log(e);
      }
    });

    localStorage.setItem("allUserData", JSON.stringify(allUserData));
    // alert("Edited Successfull");
  };

  const deleteTr = (index) => {
    allUserData.splice(index, 1);

    localStorage.setItem("allUserData", JSON.stringify(allUserData));

    setDisplay(allUserData);
    alert("Deleted Successfull");
  };

  console.log(allTableRow);
  // return allTableRow;

  // return display.map(() => {
  //   tableRow;
  // });

  // return display.map((userData, index) => {
  //   // console.log(userData);
  //   tableRow = (
  //     <tr>
  //       <td>{userData.uName}</td>
  //       <td>{userData.uEmail}</td>
  //       {/* <td>{userData.uPass}</td> */}
  //       <td>{userData.uGender}</td>
  //       <td>{userData.hobbies.uReadding}</td>
  //       <td>{userData.uCorse}</td>
  //       <td>{userData.uAddress}</td>
  //       <td>
  //         <button
  //           onClick={() => {
  //             editTr(index);
  //           }}
  //         >
  //           Edit
  //         </button>{" "}
  //         <button
  //           onClick={() => {
  //             deleteTr(index);
  //           }}
  //         >
  //           Del
  //         </button>
  //       </td>
  //     </tr>
  //   );
  //   return tableRow;
  // });
}
