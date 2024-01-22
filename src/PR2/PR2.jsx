// import React from 'react'
import "./PR2.css";
import { useEffect } from "react";
import { useState } from "react";

export default function PR2() {
  const [Hour, setHour] = useState(0);

  const [Minute10, setMinute10] = useState(0);
  const [Minute, setMinute] = useState(0);

  const [Second10, setSecond10] = useState(0);
  let [Second, setSecond] = useState(0);

  // let [UserSecond, setUserSecond] = useState(0);

  let [Start, setStart] = useState(false);
  let [Stop, setStop] = useState(true);
  let StartName = "Start";

  let TimeoutId;

  useEffect(() => {
    if (Start) {
      TimeoutId = setTimeout(() => {
        if (Second < 9) {
          setSecond(Second + 1);
        } else {
          setSecond(0);
          if (Second10 < 5) {
            setSecond10(Second10 + 1);
          } else {
            setSecond10(0);
            if (Minute < 9) {
              setMinute(Minute + 1);
            } else {
              setMinute(0);
              if (Minute10 < 5) {
                setMinute10(Minute10 + 1);
              } else {
                setMinute10(0);
                if (Hour < 11) {
                  setHour(Hour + 1);
                } else {
                  setHour(0);
                }
              }
            }
          }
        }
      }, 1000);
    }
    if (Stop) {
      setSecond(0);
      setSecond10(0);
      setMinute(0);
      setMinute10(0);
      setHour(0);
    }
  }, [Second]);

  function clearTimeouts() {
    clearTimeout(TimeoutId);
  }

  return (
    <div className="pr2">
      <div className="container">
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="">
            <h1 className="text-center text-5xl">Countdown</h1>
            <div className="m-8 flex gap-2">
              <div className="counter">
                <span className="py-12 px-2 text-4xl text-gray-950 block">
                  <select name="" id="" className="bg-color text-sky-50 ps-6">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                  </select>
                </span>
                <p>Hours</p>
              </div>
              <div className="counter">
                <span className="py-12 px-2 text-4xl text-gray-950 block">
                  <select name="" id="" className="bg-color text-sky-50">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <select name="" id="" className="bg-color text-sky-50">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                </span>
                <p>Minutes</p>
              </div>
              <div className="counter me-10">
                <span className="py-12 px-2 text-4xl text-gray-950 block">
                  <select name="" id="" className="bg-color text-sky-50">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <select
                    onChange={() => {
                      // setUserSecond = value;
                    }}
                    name=""
                    id=""
                    className="bg-color text-sky-50"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                </span>
                <p>Seconds</p>
              </div>

              <div className="counter">
                <span className="py-8 px-4 text-7xl block">0{Hour}</span>
                <p>Hours</p>
              </div>
              <div className="counter">
                <span className="py-8 px-4 text-7xl block">
                  {Minute10}
                  {Minute}
                </span>
                <p>Minutes</p>
              </div>
              <div className="counter">
                <span className="py-8 px-4 text-7xl block">
                  {Second10}
                  {Second}
                </span>
                <p>Seconds</p>
              </div>
            </div>
          </div>

          {/* <div className="flex">
          <h1 className="text-7xl font-black">{Hour}</h1>
          <h1 className="text-7xl font-black px-8"> : </h1>
          <h1 className="text-7xl font-black">
            {Minute10}
            {Minute}
          </h1>
          <h1 className="text-7xl font-black px-8"> : </h1>
          <h1 className="text-7xl font-black">
            {Second10}
            {Second}
          </h1>
        </div> */}

          <div>
            <button
              onClick={() => {
                setStart(Start == false ? (Start = true) : (Start = false));
                setStop(false);
                if (Start) {
                  if (Second < 9) {
                    setSecond(Second + 1);
                  } else {
                    setSecond(0);
                    if (Second10 < 5) {
                      setSecond10(Second10 + 1);
                    } else {
                      Second10(0);
                      setMinute(Minute + 1);
                    }
                  }
                } else {
                  clearTimeouts();
                }
              }}
              className="px-5 py-1 mt-5 mx-5 border-4 rounded-lg border-sky-500 bg-sky-100 text-gray-950"
            >
              {Start == true ? (StartName = "Pause") : StartName}
            </button>
            <button
              onClick={() => {
                setStart(false);
                setStop(true);
                setSecond(0);
              }}
              className="px-5 py-1 mt-5 mx-5 border-4 rounded-lg border-sky-500 bg-sky-100 text-gray-950"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
