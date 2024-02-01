import React from "react";

export default function Star(props) {
  const uRating = props.rating;
  const uValue = props.value;

  if (uRating >= uValue) {
    // console.log(uRating, uValue);
    return (
      <>
        <label htmlFor={uValue}></label>
        <input type="radio" name="rating" id={uValue} checked />
      </>
    );
  } else {
    // console.log(uRating, uValue);
    return (
      <>
        <label></label>
        <input type="radio" name="rating" />
      </>
    );
  }
}
