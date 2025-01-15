Socket.IO fundamentals!
This is a simple chat application built using Socket.IO and Express. The app demonstrates real-time communication by allowing users to send and receive messages in real-time through websockets. This project is created to help you understand the basics of Socket.IO and how to implement a basic chat system.

Features
Real-time messaging using Socket.IO.
Simple, responsive front-end built with HTML and vanilla JavaScript.
Easy to set up and run locally.
Technologies Used
Backend: Node.js, Express, Socket.IO
Frontend: HTML, CSS, JavaScript
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/ishan8727/SimpleChatApp.git
Navigate to the project directory:

bash
Copy code
cd socket-io-chat
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
Open your browser and go to http://localhost:8888 to start chatting!

How it Works
Backend (Node.js and Socket.IO):

The server listens for new user connections and listens to emitted events (like chat messages).
When a user sends a message, the server broadcasts it to all connected users.
Frontend (HTML, CSS, and JavaScript):

The frontend displays the chat interface and handles user input.
Messages are sent to the server via socket.emit('chat message', message) and displayed in real-time when received from the server.
Code Overview
Frontend (HTML/JavaScript)
Socket.IO Client connects to the server and listens for incoming messages.
form.addEventListener('submit') listens for the message submission event, then sends the message to the server.
socket.on('server message') listens for the message broadcasted by the server and appends it to the list.
javascript
Copy code
const socket = io();

socket.on('server message', (message) => {
  console.log('Backend sent: ', message);
  var item = document.createElement('li');
  item.textContent = message;
  document.getElementById('messages').appendChild(item);
  window.scroll(0, document.body.scrollHeight);
});
Backend (Node.js + Socket.IO)
io.on('connection') listens for new users connecting to the server.
socket.on('chat message') listens for messages from the client and emits them to all connected users.
javascript
Copy code
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (message) => {
    console.log('user message: ', message);
    io.emit('server message', message);
  });
});
