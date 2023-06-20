import React from "react";
import '../scss/login.scss'
const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="login-logo-title">Fire Chat</span>
        <span className="login-title">Register</span>
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{display:"none"}}type="file" id="avatar" />
          <button>Sign in</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
