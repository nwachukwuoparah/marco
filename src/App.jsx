import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sign_up from "./Authentication/Sign.up/Sign.up";
import Login from "./Authentication/Login/Login";
import Forgot_password from "./Authentication/Forgot.password/Forgot.password";
import Dashboard from "./Dashboard/Dashboard";
import Change_password from "./Authentication/Change.password/Change.password";
import Verify from "./Authentication/Verify";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign_up />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/forgot.password" element={<Forgot_password />} />
        <Route path="/change.password/:token" element={<Change_password />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
