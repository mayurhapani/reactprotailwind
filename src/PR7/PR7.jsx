import React from "react";
import Header from "./component/Header.jsx";
import Add from "./pages/Add.jsx";
import Home from "./pages/Home.jsx";
import Edit from "./pages/Edit.jsx";

import { Route, Routes } from "react-router-dom";

export default function PR7() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:index" element={<Edit />} />
      </Routes>
    </>
  );
}
