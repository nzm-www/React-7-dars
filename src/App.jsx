import { useState } from "react";
import { Router, Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Detels from "./pages/productDetels/Detels";

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/products/:id" element={<Detels />}></Route>
      </Routes>
    </>
  );
}

export default App;
