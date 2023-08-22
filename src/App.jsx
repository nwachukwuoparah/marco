import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sign_up from "./Authentication/sign.up";
import Login from "./Authentication/log.in";
import Forgot_password from "./Authentication/forgot.password";
import Dashboard from "./Dashboard/Dashboard";
import Reset_password from "./Authentication/reset.password";
import Verify from "./Authentication/verify.user";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign_up />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify/:token" element={<Verify />} />
        <Route path="/forgot.password" element={<Forgot_password />} />
        <Route path="/reset.Password/:token" element={<Reset_password />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
