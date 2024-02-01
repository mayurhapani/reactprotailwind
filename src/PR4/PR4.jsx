import React, { useEffect, useState } from "react";
import "./pr4.css";
import { data } from "autoprefixer";
import Star from "./Star";
// import UserCard from "./UserCard";

export default function PR4() {
  const [display, setDisplay] = useState({
    uName: "",
    uEmail: "",
    rating: "",
    uComment: "",
  });

  const [rating, setRating] = useState(0);
  // console.log(rating);

  const handleRatingChange = (event) => {
    // console.log(event.target.value);
    setRating(event.target.value);
  };

  let allComments = JSON.parse(localStorage.getItem("allComments")) || [
    {
      uName: "Mayur",
      uEmail: "mayur@gmail.com",
      rating: "5",
      uComment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      uName: "Divyang",
      uEmail: "divyang@gmail.com",
      rating: "5",
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

    function padZero(num) {
      return num < 10 ? `0${num}` : num;
    }
    let currentDate = new Date();

    const newDay = padZero(currentDate.getDate());
    const month = padZero(currentDate.getMonth() + 1); // Month is zero-based
    const year = currentDate.getFullYear();
    const hours = padZero(currentDate.getHours());
    const minutes = padZero(currentDate.getMinutes());
    const seconds = padZero(currentDate.getSeconds());

    let uDate={newDay + "/" + month + "/"+year + hours + ":" + minutes + ":" + seconds}

    let Data = {
      uName,
      uEmail,
      rating,
      uComment,
      uDate,
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
                <span className="details">Rate Us</span>
                <div className="rating" id="uStar">
                  <input type="radio" id="star5" name="rating" value="5" onChange={handleRatingChange} />
                  <label htmlFor="star5"></label>
                  <input type="radio" id="star4" name="rating" value="4" onChange={handleRatingChange} />
                  <label htmlFor="star4"></label>
                  <input type="radio" id="star3" name="rating" value="3" onChange={handleRatingChange} />
                  <label htmlFor="star3"></label>
                  <input type="radio" id="star2" name="rating" value="2" onChange={handleRatingChange} />
                  <label htmlFor="star2"></label>
                  <input type="radio" id="star1" name="rating" value="1" onChange={handleRatingChange} />
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

      <div className="container">
        <div className="InputBox">
          <div className="title">All User Reviews</div>
          {allComments.map((user, index) => (
            <>
              <div className="card">
                <div className="flex justify-between">
                  <h3 className="userName">{user.uName}</h3>
                  <span className="userEmail">{user.uEmail}</span>
                </div>

                <div className="cardRating">
                  <form>
                    <Star key={index} rating={user.rating} value={1} />
                    <Star key={index} rating={user.rating} value={2} />
                    <Star key={index} rating={user.rating} value={3} />
                    <Star key={index} rating={user.rating} value={4} />
                    <Star key={index} rating={user.rating} value={5} />
                  </form>
                </div>
                <p className="userComment">{user.uComment}</p>

                <div className="uDate">{user.uDate}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );

  return outputall;
}
