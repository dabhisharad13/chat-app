import React, { useState } from "react";
import AddDisplay from "../assets/images/addDisplay.png";
import "../scss/register.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../js/firebase";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [signUpError, setSignUpError] = useState(false);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userName = values.name;
    const email = values.email[0];
    const password = values.password[0];
    const avatar = values.avatar;
    console.log("EMAIL", email);

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(() => {
        console.log(res);
      });
    } catch (err) {
      setSignUpError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="register-logo-title">Fire Chat</span>
        <span className="register-title">Register</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
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
          <input
            style={{ display: "none" }}
            type="file"
            name="avatar"
            id="avatar"
            onChange={handleChange}
          />
          <label htmlFor="avatar">
            <img src={AddDisplay} alt="Upload"></img>
            <span>Add an avatar</span>
          </label>
          <button>Sign up!</button>
        </form>
        {signUpError && <span> Error</span>}
        <p>Already registered? Login</p>
      </div>
    </div>
  );
};

export default Register;
