import React, { useContext, useState } from "react";
import { UserChatContext } from "../context/UserChat";
import { AuthContext } from "../context/AuthContext";
import {
  Timestamp,
  arrayUnion,
  updateDoc,
  serverTimestamp,
} from "@firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../js/firebase";
import { v4 as uuid } from "uuid";
import "../scss/input.scss";

const Input = () => {
  const [text, setText] = useState();
  const [textError, setTextError] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(UserChatContext);

  const handleSend = async () => {
    try {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });

      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
    } catch (err) {
      setTextError(true);
    }
    setText("");
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
