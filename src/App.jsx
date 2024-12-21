import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";
import UserDetails from "./components/UserDetails";
const App = () => {
  return (
    <div>
      <nav className="w-full absolute z-20 px-10 py-6 flex items-center justify-start gap-5">
        <Link
          className="font-semibold text-sm text-white hover:text-violet-400 transition"
          to="/"
        >
          Home
        </Link>
        <Link
          className="font-semibold text-sm text-white hover:text-violet-400 transition"
          to="/user"
        >
          User
        </Link>
        <Link
          className="font-semibold text-sm text-white hover:text-violet-400 transition"
          to="/about"
        >
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
