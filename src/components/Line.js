import React, { useEffect, useState } from 'react';
import SignOut from './SignOut.js';
import { auth, db } from "../firebase.js";
import { useAuthState } from 'react-firebase-hooks/auth';
import SendMessage from './SendMessage.js';

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }, []);

  return (
    <div>
      <SignOut />
      <div className='msgs'>
        {messages.map(({ id, text, photoURL, uid }) => (
          <div key={id}>
            <div className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"} `}
          >
          <img src={photoURL} alt=''/>
            <p>{text}</p>
          </div>
      </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}

export default Line;
