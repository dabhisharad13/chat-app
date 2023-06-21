import React, { useContext } from "react";
import More from "../assets/images/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { UserChatContext } from "../context/UserChat";

import "../scss/chat.scss";

const Chat = () => {
  const { data } = useContext(UserChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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
