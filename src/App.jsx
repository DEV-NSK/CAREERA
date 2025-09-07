

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "/src/NAVBAR/navbar.jsx";
import Home from "/src/HOME/home.jsx";
import About from "/src/ABOUT/about.jsx";
import Login from "/src/LOGIN/login.jsx";
import Roadmaps from "/src/ROADMAP/roadmap.jsx";
import Roadmaprole from "/src/ROADMAP/role.jsx"
import Signup from "./LOGIN/signup";
import Dashboard from "./DASHBOARD/Dashboard";
import Profile from "./PROFILE/profile";

const App = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/roadmaps/roles/:id" element={<Roadmaprole/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
};

export default App;