import React, { useEffect, useState } from "react";
import { db } from "../myFirebase";
import SendMessage from "./SendMessage";
import SignOut from "./SignOut";

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        padding: 20,
        width: "fit-content",
      }}
    >
      <SignOut />
      {messages.map(({ id, text, photoURL }) => (
        <div>
          <div key={id} style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{
                borderRadius: "90%",
                width: "50px",
                height: "50px",
                margin: 5,
              }}
              src={photoURL}
              alt={photoURL}
            />
            <p>{text}</p>
          </div>
        </div>
      ))}
      <SendMessage />
    </div>
  );
}

export default Chat;
