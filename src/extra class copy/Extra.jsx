import React, { useEffect, useState } from "react";
import "./pr4.css";

export default function PR4() {
  const [display, setDisplay] = useState({
    uName: "",
    uEmail: "",
    uComment: "",
  });

  let allComments = JSON.parse(localStorage.getItem("allComments")) || [
    {
      uName: "Mayur",
      uEmail: "mayur@gmail.com",
      uComment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      uName: "Divyang",
      uEmail: "divyang@gmail.com",
      uComment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ];
  // let allComments = [];

  const submited = (e) => {
    e.preventDefault();

    let uName = e.target.uName.value;
    let uEmail = e.target.uEmail.value;
    let uComment = e.target.uComment.value;

    let Data = {
      uName,
      uEmail,
      uComment,
    };

    // console.log(Data);

    allComments.push(Data);
    // console.log(allComments);

    setDisplay(allComments);
    localStorage.setItem("allComments", JSON.stringify(allComments));

    alert("Thank You For Your Valuable Comment");

    e.target.uName.value = "";
    e.target.uEmail.value = "";
    e.target.uComment.value = "";
  };

  // console.log(allComments);

  const outputall = (
    <>
      <div className="container">
        <div className="InputBox">
          <div className="title">Your Review</div>

          <form onSubmit={submited}>
            <div className="user__details">
              <div className="input__box">
                <span className="details">Full Name</span>
                <input id="uName" className="input" type="text" placeholder="E.g: John Smith" required />
              </div>
              <div className="input__box">
                <span className="details">Email</span>
                <input id="uEmail" className="input" type="email" placeholder="johnsmith@hotmail.com" required />
              </div>

              <div className="input__box2">
                <span className="details">Comment</span>
                <textarea id="uComment" className="input input2" placeholder="Enter Your comment" rows="6" required></textarea>
              </div>
            </div>

            <div className="button">
              <input type="submit" value="Comment" />
            </div>
          </form>
        </div>
      </div>

      <div className="container">
        <div className="InputBox">
          <div className="title">All User Reviews</div>
          {allComments.map((user) => (
            <>
              <div className="card">
                <div className="flex justify-between">
                  <h3 className="userName">{user.uName}</h3>
                  <span className="userEmail">{user.uEmail}</span>
                </div>

                <p className="userComment">{user.uComment}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );

  return outputall;
}
