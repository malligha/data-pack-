import React from "react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CallPlans from "./pages/CallPlans";
import PaymentPage from "./pages/PaymentPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/callplans" element={<CallPlans />} />
        <Route path="/payment" element={<PaymentPage />} />
      


        
      </Routes>
    </Router>
  );
}

export default App;
