import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Detail from "./components/Detail";
import Contact from "./components/Contact";

function AppNav() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/Contact" element={<Contact />} />{" "}
      </Routes>
    </div>
  );
}

export default AppNav;
