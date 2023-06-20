import React from "react";
import "../scss/navbar.scss";
import { signOut } from "firebase/auth";
import { auth } from "../js/firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="nav-logo">Fire Chat</span>
      <div className="nav-user">
        <img src="" alt="" />
        <span>Sharad</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
