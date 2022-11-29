import React from "react";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import "./App.css";
import { auth } from "./myFirebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return <div style={{ margin: 10 }}>{user ? <Chat /> : <SignIn />}</div>;
}

export default App;
