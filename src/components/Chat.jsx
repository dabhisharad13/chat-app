import React from "react";
import More from "../assets/images/more.png";
import Messages from "./Messages";
import Input from "./Input";
import '../scss/chat.scss';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Sharad</span>
        <div className="chatIcons">
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
