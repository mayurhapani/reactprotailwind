import React, { useState } from "react";
import "./tic.css";

export default function TICTOKTEK() {
  let [turn, setTurn] = useState(Array(9).fill(null));
  console.log(turn);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-5xl">
      <div className="row">
        <div
          onClick={() => {
            setTurn((turn[0] = "X"));
            console.log(turn);
          }}
          className="box"
          value="0"
        >
          {turn}
        </div>
        <div className="box" value="1">
          {turn}
        </div>
        <div className="box" value="2">
          {turn}
        </div>
      </div>
      <div className="row">
        <div className="box" value="3">
          {turn}
        </div>
        <div className="box" value="4">
          {turn}
        </div>
        <div className="box" value="5">
          {turn}
        </div>
      </div>
      <div className="row">
        <div className="box" value="6">
          {turn}
        </div>
        <div className="box" value="7">
          {turn}
        </div>
        <div className="box" value="8">
          {turn}
        </div>
      </div>
    </div>
  );
}
