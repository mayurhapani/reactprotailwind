import React, { useEffect, useState } from "react";
import "./pr4.css";

export default function PR4() {
  let [display, setDisplay] = useState({
    uName: "",
    uEmail: "",
    uPass: "",
    uGender: "",
    hobbies: {
      uReadding: "",
      uCycling: "",
      uTraveling: "",
    },
    uCorse: "",
    uAddress: "",
  });

  const submited = (e) => {
    e.preventDefault();

    let uName = e.target.uName.value;
    let uEmail = e.target.uEmail.value;
    let uStar = e.target.uStar.value;
    let uComment = e.target.uComment.value;

    let Data = {
      uName,
      uEmail,
      uStar,
      uComment,
    };

    console.log(Data);
    // setDisplay(Data);
    // alert("Registration Successfull");
  };

  const outputall = (
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
              <span className="details">Rate Us</span>
              <div className="rating" id="uStar">
                <input type="radio" id="star5" name="rating" value="5" />
                <label htmlFor="star5"></label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label htmlFor="star4"></label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label htmlFor="star3"></label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label htmlFor="star2"></label>
                <input type="radio" id="star1" name="rating" value="1" />
                <label htmlFor="star1"></label>
              </div>
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
  );

  return outputall;
}
