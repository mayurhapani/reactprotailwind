// import React from 'react'
import "./PR2.css";
import { useEffect } from "react";
import { useState } from "react";

export default function PR2A() {
  let [Hour, setHour] = useState(0);
  let [Minute, setMinute] = useState(0);
  let [Second, setSecond] = useState(0);

  const SetTimer = () => {
    clearTimeouts();
    setStart(false);

    const SetedSeconds = document.getElementById("SetedSeconds").value;
    const SetedMinutes = document.getElementById("SetedMinutes").value;
    const SetedHours = document.getElementById("SetedHours").value;

    // console.log(SetedHours, SetedMinutes, SetedSeconds);

    setSecond((Second = SetedSeconds));
    setMinute((Minute = SetedMinutes));
    setHour((Hour = SetedHours));
  };

  let [Run, setRun] = useState(0);
  let [Start, setStart] = useState(false);
  let [Stop, setStop] = useState(true);
  let StartName = "Start";
  let TimeoutId;

  useEffect(() => {
    if (Start) {
      if (Hour == 0 && Minute == 0 && Second == 0) {
        alert("Time Is Up");
        setStart(false);
        setStop(true);
        clearTimeouts();
        ClearSelection();
      }
      TimeoutId = setTimeout(() => {
        setRun(Run + 1);
        if (Second > 0) {
          setSecond(Second - 1);
        } else {
          if (Minute > 0) {
            setMinute(Minute - 1);
            setSecond((Second = 59));
          } else {
            setMinute((Minute = 59));
            setSecond((Second = 59));
            if (Hour > 0) {
              setHour(Hour - 1);
            } else {
              setHour((Hour = 0));
            }
          }
        }
      }, 1000);
    }
    if (Stop) {
      setSecond(0);
      setMinute(0);
      setHour(0);
    }
  }, [Run]);

  function clearTimeouts() {
    clearTimeout(TimeoutId);
  }

  function StopAlert() {
    if (Hour != 0 || Minute != 0 || Second != 0) {
      alert("You Have Manually Stoped Timer");
    }
    ClearSelection();
  }

  function ClearSelection() {
    document.getElementById("SetedSeconds").value = 0;
    document.getElementById("SetedMinutes").value = 0;
    document.getElementById("SetedHours").value = 0;
  }

  return (
    <div className="pr2">
      <div className="container">
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="">
            <h1 className="text-center text-5xl">Countdown</h1>

            <div className="m-8 flex gap-2">
              <div className="counter">
                <span className="py-8 px-2 text-4xl text-gray-950 block">
                  <select name="" id="SetedHours" className="bg-color text-sky-50 ps-6">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
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
                <span className="py-8 px-2 text-4xl text-gray-950 block">
                  <select name="" id="SetedMinutes" className="bg-color text-sky-50 ps-6">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                  </select>
                </span>
                <p>Minutes</p>
              </div>
              <div className="counter">
                <span className="py-8 px-2 text-4xl text-gray-950 block">
                  <select name="" id="SetedSeconds" className="bg-color text-sky-50 ps-6">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                  </select>
                </span>
                <p>Seconds</p>
              </div>
            </div>

            <div className="flex">
              <button
                onClick={SetTimer}
                className="px-5 py-1 mx-auto border-4 rounded-lg border-sky-500 bg-sky-100 text-gray-950 inline-block"
              >
                Set Timer
              </button>
            </div>

            <div className="m-8 flex gap-2">
              <div className="counter">
                <span className="py-6 px-4 text-6xl block">{Hour}</span>
                <p>Hours</p>
              </div>
              <div className="counter">
                <span className="py-6 px-4 text-6xl block">{Minute}</span>
                <p>Minutes</p>
              </div>
              <div className="counter">
                <span className="py-6 px-4 text-6xl block">{Second}</span>
                <p>Seconds</p>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => {
                setStop(false);
                setStart(Start == false ? (Start = true) : (Start = false));
                if (Start) {
                  setRun(Run + 1);
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

                StopAlert();
              }}
              className="px-5 py-1 mt-5 mx-5 border-4 rounded-lg border-sky-500 bg-sky-100 text-gray-950"
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
