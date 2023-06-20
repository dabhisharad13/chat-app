import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../js/firebase";
import { Link } from "react-router-dom";
import "../scss/login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = values.email[0];
    const password = values.password[0];

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setLoginError(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="login-logo-title">Fire Chat</span>
        <span className="login-title">Register</span>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button>Sign in</button>
        </form>
        {loginError && <span> Error</span>}
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
