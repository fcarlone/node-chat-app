const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message.js');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

// middleware configuration
app.use(express.static(publicPath))

// register an event listener
io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit - message to a user who joined from Admin
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));;

  // socket.broadcast.emit - send to all users expect the one who joined - from Admin
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
