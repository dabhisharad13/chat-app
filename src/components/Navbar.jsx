import React from "react";
import '../scss/navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="nav-logo">Fire Chat</span>
      <div className="nav-user">
        <img src="" alt="" />
        <span>Sharad</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
