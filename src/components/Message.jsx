import React, { useContext } from "react";
import tempImg from "../assets/images/temp.jpeg";
import { UserChatContext } from "../context/UserChat";
import { AuthContext } from "../context/AuthContext";

import "../scss/message.scss";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(UserChatContext);

  return (
    <div className={`message ${message.senderId === currentUser.uid && "owner"}`}>
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
