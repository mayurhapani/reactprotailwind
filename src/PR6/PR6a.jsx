import React, { useEffect, useState } from "react";
import Style from "./pr6.module.css";
import { data } from "autoprefixer";
// import TableRow from "./TableRow";

export default function PR6a() {
  let [display, setDisplay] = useState(
    JSON.parse(localStorage.getItem("display")) ||
      [
        // {
        //   uName: "mayur",
        //   uEmail: "",
        //   uPass: "",
        //   uGender: "male",
        //   hobbies: {
        //     uReadding: "",
        //     uCycling: "",
        //     uTraveling: "",
        //   },
        //   uCorse: "",
        //   uAddress: "",
        // },
        // {
        //   uName: "niru",
        //   uEmail: "",
        //   uPass: "",
        //   uGender: "female",
        //   hobbies: {
        //     uReadding: "",
        //     uCycling: "",
        //     uTraveling: "",
        //   },
        //   uCorse: "",
        //   uAddress: "",
        // },
      ]
  );

  let [input, setInput] = useState();
  let [edit, setEdit] = useState(false);
  let [id, setId] = useState(false);

  useEffect(() => {
    localStorage.setItem("display", JSON.stringify(display));
  }, [display]);

  const submited = (e) => {
    e.preventDefault();

    if (edit) {
      console.log(input);

      const temp = [...display];
      temp[id] = input;
      setDisplay(temp);

      setEdit(false);
    } else {
      let uName = e.target.user.value;
      let uEmail = e.target.email.value;
      let uPass = e.target.pass.value;

      let uGenderMale = e.target.male.checked;

      let uReadding = e.target.readding.checked;
      let uCycling = e.target.cycling.checked;
      let uTraveling = e.target.traveling.checked;

      let uCorse = e.target.corse.value;
      let uAddress = e.target.address.value;

      let Data = {
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
      };

      // console.log(display);
      let allData = [...display, Data];

      // console.log(allData);
      setDisplay(allData);
      alert("Registration Successfull");
    }
    setInput({});
  };

  const handleDelete = (index) => {
    // console.log("delete", index);
    // console.log(display);

    const temp = [...display];
    temp.splice(index, 1);
    setDisplay(temp);
  };

  const handleEdit = (index) => {
    // console.log("edit", index);
    console.log(input);

    setInput(display[index]);
    setEdit(true);
    setId(index);
  };

  const handelChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className={`${Style.container} pt-16`}>
        <div className={Style.loginWrap}>
          <div className={Style.loginHtml}>
            <h2 className={Style.tab}>Sign In</h2>

            <div className={Style.loginForm}>
              <form onSubmit={submited} className={Style.signInHtm}>
                <div className={Style.group}>
                  <label className={Style.label}>Your Name</label>
                  <input id="user" type="text" className={Style.input} value={input ? input.uName : ""} onChange={handelChange} />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Email Id</label>
                  <input id="email" type="email" className={Style.input} value={input ? input.uEmail : ""} />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Choose Password</label>
                  <input id="pass" type="password" className={Style.input} value={input ? input.uPass : ""} />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Gender</label>
                  <input
                    id="male"
                    name="gender"
                    type="radio"
                    checked={input ? (input.uGender === "male" ? true : false) : false}
                    onChange={handelChange}
                  />
                  <label htmlFor="male" className="ps-2 pe-20">
                    Male
                  </label>
                  <input
                    id="female"
                    name="gender"
                    type="radio"
                    checked={input ? (input.uGender === "female" ? true : false) : false}
                    onChange={handelChange}
                  />
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
                  <input type="submit" className={Style.button} value={edit ? "Edit" : "Register"} />
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
                  <th>Tool</th>
                </tr>
              </thead>
              <tbody>
                {display &&
                  display.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.uName}</td>
                        <td>{user.uEmail}</td>
                        <td>{user.uPass}</td>
                        <td>{user.uGender}</td>
                        <td>{user.hobbies.uReadding}</td>
                        <td>{user.uCorse}</td>
                        <td>{user.uAddress}</td>
                        <td>
                          <button
                            onClick={() => {
                              handleDelete(index);
                            }}
                            className={Style.smButton}
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => {
                              handleEdit(index);
                            }}
                            className={Style.smButton}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
