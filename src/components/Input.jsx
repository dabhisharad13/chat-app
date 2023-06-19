import React from "react";
import SendImage from "../assets/images/Send.png";
import Attach from "../assets/images/Link.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="" file />
        <label htmlFor="file">
          <img src={SendImage} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
