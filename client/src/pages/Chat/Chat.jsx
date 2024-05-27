/* eslint-disable react-hooks/exhaustive-deps */
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Clip from "../../assets/icons/clip.svg?react";
import Send from "../../assets/icons/send.svg?react";
import Message from "../../components/Message/Message";
import { useAuth } from "../../hooks/use-auth";
import { firestore } from "../../main";
import cn from "./Chat.module.css";

function Chat() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const { isAuth, user } = useAuth();

  // useEffect(() => {
  //   isAuth ? null : navigate("/sign-in");
  //   const q = query(collection(firestore, "messages"), orderBy("timestamp"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let msgs = [];
  //     querySnapshot.forEach((doc) => {
  //       msgs.push({ ...doc.data(), id: doc.id });
  //     });
  //     setMessages(msgs);
  //   });
  //   return () => unsubscribe();
  // }, [navigate]);

  const sendMessage = async () => {
    await addDoc(collection(firestore, "messages"), {
      text: value,
      email: user.email,
      timestamp: serverTimestamp(),
    });
    setValue("");
  };

  return (
    <div className={cn.chat}>
      <div className="container">
        <div className={cn.inner}>
          <div id="messages" className={cn.messages}>
            {messages ? (
              messages.map((message) => (
                <Message message={message} key={message.id} />
              ))
            ) : (
              <p className={cn.emptyChatMessage}>
                Be the first to write a message
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={cn.inputBlock}>
        <Clip className={cn.clip} />
        <input
          className={cn.input}
          type="text"
          placeholder="Type a message"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Send
          className={cn.send}
          onClick={() => {
            sendMessage();
            let chat = document.getElementById("messages");
            chat.scrollTop = chat.scrollHeight;
          }}
        />
      </div>
    </div>
  );
}

export default Chat;
