import React from "react";
import More from "../assets/images/more.png"

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Sharad</span>
        <div className="chatIcons">
          <img src={More} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
