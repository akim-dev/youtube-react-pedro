import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Coba.css";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { Post } from "./pages/create-post/Post";
import { Navbar } from "./components/Navbar";

function Medsos() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Medsos;
