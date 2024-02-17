import Style from "../styles/Style.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const nevigetor = useNavigate();
  const [display, setDisplay] = useState(JSON.parse(localStorage.getItem("display")) || []);
  const [input, setInput] = useState(display);
  const [searchInput, setSearchInput] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  useEffect(() => {
    localStorage.setItem("display", JSON.stringify(display));
  }, [display]);

  // console.log(input);

  const handleDelete = (index) => {
    const temp = [...display];
    temp.splice(index, 1);
    setDisplay(temp);
  };

  const handleEdit = (index) => {
    // nevigetor(`/pr7/edit`);
    nevigetor(`/pr8/edit/${index}`);
  };

  const handelAdd = () => {
    nevigetor("/pr8/add");
  };

  // const handleSearch = (e) => {
  //   setSelectedGender(e.target.value);

  //   const filteredUsers = display.filter(
  //     (user) =>
  //       user.user.toLowerCase().includes(e.target.value.toLowerCase()) ||
  //       (user.email.toLowerCase().includes(e.target.value.toLowerCase()) && (selectedGender === "" || user.gender === selectedGender))
  //   );
  //   setInput(filteredUsers);
  // };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleGenderSelect = (e) => {
    setSelectedGender(e.target.value);
  };

  const filteredUsers = display.filter(
    (user) => user.user.toLowerCase().includes(searchInput.toLowerCase()) && (selectedGender === "" || user.gender === selectedGender)
  );

  return (
    <>
      <div className={Style.container}>
        <div className={Style.loginWrapTable}>
          <div className={Style.loginHtml}>
            <h1 className="text-4xl text-white text-center my-5">User Data</h1>
            <div className="flex justify-between mb-10">
              <div className="">
                <input onChange={handleSearch} type="text" placeholder="Search from here...." />
                <select onChange={handleGenderSelect} className="mx-5" id="uGender">
                  <option value="" selected disabled>
                    Gender
                  </option>
                  <option value="">All</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>
              <button onClick={handelAdd} className="text-white border px-8 py-3 rounded-md bg-black">
                Add
              </button>
            </div>

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
                {filteredUsers?.map((user, index) => (
                  <tr key={index}>
                    <td>{user.user}</td>
                    <td>{user.email}</td>
                    <td>{user.pass}</td>
                    <td>{user.gender}</td>
                    <td>
                      {user.hobbies.map((hobby) => {
                        return hobby + ", \n";
                      })}
                    </td>
                    <td>{user.corse}</td>
                    <td>{user.address}</td>
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
