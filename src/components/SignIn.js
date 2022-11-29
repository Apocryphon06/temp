import firebase from "firebase/compat/app";
import React from "react";
import { Button } from "@material-ui/core";

import { auth } from "../myFirebase.js";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div>
      <Button onClick={signInWithGoogle}>Sign in to chat</Button>
    </div>
  );
}

export default SignIn;
