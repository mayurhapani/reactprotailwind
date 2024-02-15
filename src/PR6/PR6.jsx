import React, { useEffect, useState } from "react";
import Style from "./pr6.module.css";
import { useParams } from "react-router-dom";

export default function PR6() {
  const [display, setDisplay] = useState(JSON.parse(localStorage.getItem("display")) || []);
  const [input, setInput] = useState({});
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(false);

  const prams = useParams();

  useEffect(() => {
    localStorage.setItem("display", JSON.stringify(display));
  }, [display]);

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setInput((prevInput) => ({
  //     ...prevInput,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      const temp = [...display];
      temp[id] = input;

      console.log(input);

      setDisplay(temp);
      setEdit(false);
    } else {
      const {
        user: { value: uName },
        email: { value: uEmail },
        pass: { value: uPass },
        male: { checked: uGenderMale },
        readding: { checked: uReadding },
        cycling: { checked: uCycling },
        traveling: { checked: uTraveling },
        corse: { value: uCorse },
        address: { value: uAddress },
      } = e.target;

      const Data = {
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

      setDisplay([...display, Data]);
      alert("Registration Successful");
    }
    setInput({
      user: { value: uName },
      email: { value: uEmail },
      pass: { value: uPass },
      male: { checked: uGenderMale },
      readding: { checked: uReadding },
      cycling: { checked: uCycling },
      traveling: { checked: uTraveling },
      corse: { value: uCorse },
      address: { value: uAddress },
    });
  };

  const handleDelete = (index) => {
    const temp = [...display];
    temp.splice(index, 1);
    setDisplay(temp);
  };

  const handleEdit = (index) => {
    // console.log(display[index]);

    setInput(display[index]);
    setEdit(true);
    setId(index);
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className={Style.container}>
        <div className={Style.loginWrap}>
          <div className={Style.loginHtml}>
            <h2 className={Style.tab}>Sign In</h2>

            <div className={Style.loginForm}>
              <form onSubmit={handleSubmit} className={Style.signInHtm}>
                <div className={Style.group}>
                  <label className={Style.label}>Your Name</label>
                  <input
                    id="user"
                    type="text"
                    className={Style.input}
                    value={input ? input.uName : ""}
                    onChange={handleChange}
                    name="uName"
                  />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Email Id</label>
                  <input
                    id="email"
                    type="email"
                    className={Style.input}
                    value={input ? input.uEmail : ""}
                    onChange={handleChange}
                    name="uEmail"
                  />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Choose Password</label>
                  <input
                    id="pass"
                    type="password"
                    className={Style.input}
                    value={input ? input.uPass : ""}
                    onChange={handleChange}
                    name="uPass"
                  />
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Gender</label>
                  <input
                    id="male"
                    name="gender"
                    type="radio"
                    value={"male"}
                    checked={input.gender === "male" ? true : false}
                    onChange={handleChange}
                  />
                  <label htmlFor="male" className="ps-2 pe-20">
                    Male
                  </label>
                  <input
                    id="female"
                    name="gender"
                    type="radio"
                    value={"female"}
                    checked={input.gender === "female" ? true : false}
                    // checked={input ? input.uGender === "female" : false}
                    onChange={handleChange}
                  />
                  <label htmlFor="female" className="ps-2">
                    Female
                  </label>
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Hobbies</label>
                  <input id="readding" name="readding" type="checkbox" onChange={handleChange} />
                  <label htmlFor="readding" className="ps-2 pe-10">
                    Reading
                  </label>
                  <input id="cycling" name="cycling" type="checkbox" onChange={handleChange} />
                  <label htmlFor="cycling" className="ps-2 pe-10">
                    Cycling
                  </label>
                  <input id="traveling" name="traveling" type="checkbox" onChange={handleChange} />
                  <label htmlFor="traveling" className="ps-2">
                    Traveling
                  </label>
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Select Course</label>
                  <select id="corse" className={Style.checkLabel} onChange={handleChange} name="uCorse">
                    <option value="PHP" className={Style.checkInput}>
                      PHP
                    </option>
                    <option value="Full Stack" className={Style.checkInput}>
                      Full Stack
                    </option>
                    <option value="Flutter" className={Style.checkInput}>
                      Flutter
                    </option>
                    <option value="Front End" className={Style.checkInput}>
                      Front End
                    </option>
                  </select>
                </div>
                <div className={Style.group}>
                  <label className={Style.label}>Your Address</label>
                  <textarea id="address" className={Style.input} rows="3" onChange={handleChange} name="uAddress"></textarea>
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
                  <th>Course</th>
                  <th>Address</th>
                  <th>Tool</th>
                </tr>
              </thead>
              <tbody>
                {display.map((user, index) => (
                  <tr key={index}>
                    <td>{user.uName}</td>
                    <td>{user.uEmail}</td>
                    <td>{user.uPass}</td>
                    <td>{user.uGender}</td>
                    <td>
                      {user.hobbies.uReadding ? "Reading " : ""}
                      {user.hobbies.uCycling ? "Cycling " : ""}
                      {user.hobbies.uTraveling ? "Traveling " : ""}
                    </td>
                    <td>{user.uCorse}</td>
                    <td>{user.uAddress}</td>
                    <td>
                      <button onClick={() => handleDelete(index)} className={Style.smButton}>
                        Delete
                      </button>
                      <button onClick={() => handleEdit(index)} className={Style.smButton}>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
