import { Button, Input } from "@material-ui/core";
import React, { useState } from "react";
import { db, auth } from "../myFirebase.js";
import firebase from "firebase/compat/app";

function SendMessage() {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        border: "1px solid #dfdfdf",
        marginTop: "10px",
        padding: 10,
      }}
    >
      <form onSubmit={sendMessage}>
        <Input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="type somthing.."
        />
        <Button type="submit"> send</Button>
      </form>
    </div>
  );
}

export default SendMessage;
