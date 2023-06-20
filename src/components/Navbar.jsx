import React, { useContext } from "react";
import "../scss/navbar.scss";
import { signOut } from "firebase/auth";
import { auth } from "../js/firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="nav-logo">Fire Chat</span>
      <div className="nav-user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
