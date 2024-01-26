import React from "react";

export default function Box(props) {
  return (
    <div
      onClick={props.onClick}
      style={{
        height: "100px",
        width: "100px",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.value}
    </div>
  );
}
