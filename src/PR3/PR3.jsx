// "use client";
import React, { useEffect } from "react";
import Style from "./pr3.module.css";
import TableBody from "./TableBody";
import allUserData from "./allUserData.js";
import DataTable from "./DataTable.jsx";

export default function PR3() {
  const submited = (e) => {
    e.preventDefault();

    let uName = e.target.user.value;
    let uEmail = e.target.email.value;
    let uPass = e.target.pass.value;

    let uGenderMale = e.target.male.checked;
    // let uGenderFemale = e.target.female.checked;

    let uReadding = e.target.readding.checked;
    let uCycling = e.target.cycling.checked;
    let uTraveling = e.target.traveling.checked;

    let uCorse = e.target.corse.value;
    let uAddress = e.target.address.value;

    // let allUserData = JSON.parse(localStorage.getItem("allUserData")) || [];

    allUserData.push({
      uName,
      uEmail,
      uPass,
      uGender: uGenderMale ? "male" : "female",
      hobbies: {
        uReadding: uReadding ? "readding" : null,
        uCycling: uCycling ? "cycling" : null,
        uTraveling: uTraveling ? "traveling" : null,
      },
      uCorse,
      uAddress,
    });
    localStorage.setItem("allUserData", JSON.stringify(allUserData));
    alert("Registration Successfull");

    console.log(allUserData);
    // console.log(uName, uEmail, uPass);
    // console.log(uGenderMale, uGenderFemale);
    // console.log(uReadding, uCycling, uTraveling);
    // console.log(uCorse, uAddress);
  };

  return (
    <>
      <div className={Style.container}>
        <div className={Style.loginWrap}>
          <div className={Style.loginHtml}>
            <h2 className={Style.tab}>Sign In</h2>
            <h2 className={Style.tab}>List</h2>

            <div className={Style.loginForm}>
              <form onSubmit={submited} className={Style.signInHtm}>
                <div className={Style.group}>
                  <label className={Style.label}>Your Name</label>
                  <input id="user" type="text" className={Style.input} />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Email Id</label>
                  <input id="email" type="email" className={Style.input} />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Choose Password</label>
                  <input id="pass" type="password" className={Style.input} />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Gender</label>
                  <input id="male" name="gender" type="radio" />
                  <label htmlFor="male" className="ps-2 pe-20">
                    Male
                  </label>
                  <input id="female" name="gender" type="radio" />
                  <label htmlFor="female" className="ps-2">
                    Female
                  </label>
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Hobbies</label>
                  <input id="readding" name="gender" type="checkbox" />
                  <label htmlFor="readding" className="ps-2 pe-10">
                    Readding
                  </label>
                  <input id="cycling" className="" name="gender" type="checkbox" />
                  <label htmlFor="cycling" className="ps-2 pe-10">
                    Cycling
                  </label>
                  <input id="traveling" className="" name="gender" type="checkbox" />
                  <label htmlFor="traveling" className="ps-2">
                    Traveling
                  </label>
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Select Corse</label>
                  <select id="corse" className={Style.checkLabel}>
                    <option value="PHP" className={Style.checkInput}>
                      PHP
                    </option>
                    <option value=" Full Stack" className={Style.checkInput}>
                      Full Stack
                    </option>
                    <option value="Fluter" className={Style.checkInput}>
                      Fluter
                    </option>
                    <option value="Front End" className={Style.checkInput}>
                      Front End
                    </option>
                  </select>
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Your Address</label>
                  <textarea id="address" className={Style.input} rows="3"></textarea>
                </div>
                <div className={Style.group}>
                  <input type="submit" className={Style.button} value="Register" />
                </div>
                <div className={Style.hr}></div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.container}>
        <div className={Style.loginWrapTable}>
          <div className={Style.loginHtml}>
            <DataTable />

            {/* <table className={Style.table}>
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
                <TableBody />
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </>
  );
}
