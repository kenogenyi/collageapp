// pages/index.js
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

let socket;

export default function Home() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // Connect to Socket.io server
    socket = io();

    // Listen for chat messages from server
    socket.on('chatMessage', (msg) => {
      setChat((prevChat) => [...prevChat, msg]);
    });

    return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    socket.emit('chatMessage', message);
    setMessage('');
  };

  return (
    <div>
      <h1>Student Connect Chat</h1>
      <div>
        {chat.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
