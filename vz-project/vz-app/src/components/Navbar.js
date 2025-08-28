import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo1.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      {/* Left side: logo + main links */}
      <div className="nav-left">
        <img src={logo} alt="Verizon" className="logo" />
        <Link to="/">Data Plans</Link>
        <Link to="/callplans">Call Plans</Link>
      </div>

      {/* Right side: auth links */}
      <div className="nav-right">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Navbar;
