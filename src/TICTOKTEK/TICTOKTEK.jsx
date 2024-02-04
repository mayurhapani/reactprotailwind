import React, { useState } from "react";
import "./tic.css";
import Box from "./Box";

export default function TICTOKTEK() {
  let [turn, setTurn] = useState(Array(9).fill(null));
  let [isXturn, setIsXturn] = useState(true);
  // console.log(turn);
  const handleClick = (index) => {
    if (turn[index] !== null) {
      return;
    }
    let copyTurn = [...turn];
    copyTurn[index] = isXturn ? "X" : "0";
    setTurn(copyTurn);
    setIsXturn(!isXturn);
  };

  const checkWinner = () => {
    // console.log("hii");
    const winnerState = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let winState of winnerState) {
      const [a, b, c] = winState;
      if (turn[a] !== null && turn[a] === turn[b] && turn[a] === turn[c]) {
        return turn[a];
      }
    }
    return false;
  };

  let isWinner = checkWinner();

  return (
    <div className="h-screen flex flex-col justify-center items-center text-5xl">
      {isWinner ? (
        <>
          {isWinner} Is winner
          <button
            className="button1"
            onClick={() => {
              setTurn(Array(9).fill(null));
            }}
          >
            Reset
          </button>
        </>
      ) : (
        <>
          <h1>Move Of {isXturn ? "X" : "0"}</h1>
          <div className="row">
            <Box
              onClick={() => {
                handleClick(0);
              }}
              value={turn[0]}
            />
            <Box
              onClick={() => {
                handleClick(1);
              }}
              value={turn[1]}
            />
            <Box
              onClick={() => {
                handleClick(2);
              }}
              value={turn[2]}
            />
          </div>
          <div className="row">
            <Box
              onClick={() => {
                handleClick(3);
              }}
              value={turn[3]}
            />
            <Box
              onClick={() => {
                handleClick(4);
              }}
              value={turn[4]}
            />
            <Box
              onClick={() => {
                handleClick(5);
              }}
              value={turn[5]}
            />
          </div>
          <div className="row">
            <Box
              onClick={() => {
                handleClick(6);
              }}
              value={turn[6]}
            />
            <Box
              onClick={() => {
                handleClick(7);
              }}
              value={turn[7]}
            />
            <Box
              onClick={() => {
                handleClick(8);
              }}
              value={turn[8]}
            />
          </div>
        </>
      )}
    </div>
  );
}
