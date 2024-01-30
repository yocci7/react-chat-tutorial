import { Button } from '@mui/material'
import {auth} from "../firebase.js"
import React from 'react'
import MailIcon from '@mui/icons-material/Mail';

function SignOut() {
  return (
    <div className='message-header'>
      <Button
        style={{
          color: "white",
          fontSize: "15px"
        }} 
        onClick={() => auth.signOut()}>サインアウト</Button>
        <h3>{auth.currentUser.displayName}</h3>
        <MailIcon />
    </div>
  );
}

export default SignOut
