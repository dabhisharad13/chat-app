import React from "react";
import tempImg from "../assets/images/temp.jpeg"
import '../scss/message.scss';

const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img src={tempImg} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={tempImg} alt="" />
      </div>
    </div>
  );
};

export default Message;
