import React from "react";
import AddDisplay from "../assets/images/addDisplay.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="register-logo-title">Fire Chat</span>
        <span className="register-title">Register</span>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{display:"none"}}type="file" id="avatar" />
          <label htmlFor="avatar">
            <img src={AddDisplay} alt="Upload"></img>
            <span>Add an avatar</span>
          </label>
          <button>Sign up!</button>
        </form>
        <p>Already registered? Login</p>
      </div>
    </div>
  );
};

export default Register;
