import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sign_up from "./Authentication/Sign.up/Sign.up";
import Login from "./Authentication/Login/Login";
import Forgot_password from "./Authentication/Forgot.password/Forgot.password";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign_up />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot.password" element={<Forgot_password />} />
      </Routes>
    </Router>
  );
}

export default App;
