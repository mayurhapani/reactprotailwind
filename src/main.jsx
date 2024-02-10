import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./PR1/Header.jsx";
import PR1 from "./PR1/PR1.jsx";
import "./index.css";
import PR2 from "./PR2/PR2.jsx";
import PR2A from "./PR2/PR2A.jsx";
import TICTOKTEK from "./TICTOKTEK/TICTOKTEK.jsx";
import PR3 from "./PR3/PR3.jsx";
import PR4 from "./PR4/PR4.jsx";
import CounterMainPage from "./ContextApi/CounterMainPage.jsx";
import { CounterProvider } from "./ContextApi/context/Counter.jsx";
import Counter2MainPage from "./ContextAPI2/Counter2MainPage.jsx";
import PR5 from "./PR5/PR5.jsx";

import { BrowserRouter } from "react-router-dom";
import PR6 from "./PR6/PR6.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Header /> */}
    {/* <BrowserRouter> */}
    {/* <PR1 /> */}
    {/* <PR2A /> */}
    {/* <PR3 /> */}
    {/* <PR4 /> */}
    {/* <PR5 /> */}
    <PR6 />

    {/* <PR2 /> */}
    {/* <TICTOKTEK /> */}
    {/* <CounterProvider>
      <CounterMainPage />
    </CounterProvider> */}

    {/* <Counter2MainPage /> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// if you don't find projects then
// uncomment only belowe components

// PR1 is project  1
// PR2A is project 2

// PR2 is extra work
// tictoktek is extra work
