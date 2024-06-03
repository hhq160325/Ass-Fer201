import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Detail from "./components/Detail";

function AppNav() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="./components/Contact" element={<contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default AppNav;
