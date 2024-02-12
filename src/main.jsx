import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainHeader from "./component/MainHeader.jsx";
import PR1 from "./PR1/PR1.jsx";
import PR2A from "./PR2/PR2A.jsx";
import PR3 from "./PR3/PR3.jsx";
import PR4 from "./PR4/PR4.jsx";
import PR5 from "./PR5/PR5.jsx";
import PR6 from "./PR6/PR6a.jsx";

import PR2 from "./PR2/PR2.jsx";
import TICTOKTEK from "./TICTOKTEK/TICTOKTEK.jsx";
import CounterMainPage from "./ContextApi/CounterMainPage.jsx";
import { CounterProvider } from "./ContextApi/context/Counter.jsx";
import Counter2MainPage from "./ContextAPI2/Counter2MainPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<PR1 />} />
        <Route path="/pr2" element={<PR2A />} />
        <Route path="/pr3" element={<PR3 />} />
        <Route path="/pr4" element={<PR4 />} />
        <Route path="/pr5" element={<PR5 />} />
        <Route path="/pr6" element={<PR6 />} />
        <Route path="/tictoktek" element={<TICTOKTEK />} />
      </Routes>
    </BrowserRouter>

    {/* <PR1 /> */}
    {/* <PR2A /> */}
    {/* <PR3 /> */}
    {/* <PR4 /> */}
    {/* <PR5 /> */}
    {/* <PR6 /> */}

    {/* <PR2 /> */}
    {/* <TICTOKTEK /> */}
    {/* <CounterProvider>
      <CounterMainPage />
    </CounterProvider> */}

    {/* <Counter2MainPage /> */}
  </React.StrictMode>
);

// if you don't find projects then
// uncomment only belowe components

// PR1 is project  1
// PR2A is project 2

// PR2 is extra work
// tictoktek is extra work
