import { Button } from "@material-ui/core";
import React from "react";
import { auth } from "../myFirebase.js";

function SignOut() {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>Sign out</Button>
    </div>
  );
}

export default SignOut;
