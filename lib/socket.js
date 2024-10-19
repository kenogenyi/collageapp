// pages/api/socket.js
import { Server } from 'socket.io';

export default function handler(req, res) {
  if (res.socket.server.io) {
    console.log('Socket.io server already running');
  } else {
    console.log('Setting up Socket.io server...');
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      console.log('User connected');

      socket.on('chatMessage', (message) => {
        io.emit('chatMessage', message); // Broadcast the message to all clients
      });

      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  }
  res.end();
}
