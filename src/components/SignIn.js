import { Button } from '@mui/material';
import React from 'react'
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";
import MailIcon from '@mui/icons-material/Mail';


function SignIn() {
  function signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
  }

  return (
    <div className='message-header'>
    <Button
      style={{
        color: "white",
        fontSize: "15px"
      }}
      onClick={signInWithGoogle}>
        Googleでログインする
    </Button>
    <MailIcon />
    </div>
  );
}

export default SignIn
