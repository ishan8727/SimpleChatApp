const express = require('express');
const path = require('path');
const http = require('http');
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// middleware to server static files!
app.use(express.static(path.join(__dirname,'../client')));

io.on('connection', (socket)=>{
    console.log('a user connected');
    // when the user is created in fronend i.e { const socket = io() } -> this part user conneted is activated

    socket.on('chat message',(message)=>{
        // listen to 'chat message' from the froent end { the message emmited there! }
        console.log('user message: ',message);
        
        io.emit('server message',message);
        // this broadcasts the messsage to everyone, which we use(d) in frontend to log.
    });
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/index.html'));
});

const PORT = 8888;
server.listen(PORT, ()=>{
    console.log('Server listening on port 8888!');
});
