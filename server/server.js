// server side coding
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const publicPath = path.join(__dirname, '../public');
const io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {  // this event is only for connection
    console.log("New User Connected");

    socket.emit('newMessage', {
        from: 'Server',
        text: 'Hello I am server',
        createAt: 123
    });

    socket.on('createMessage', (message) => {
        console.log("Create Msg", message);
    });
    socket.on('disconnect', () =>{
        console.log("User was disconnected");
    });
});
app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});