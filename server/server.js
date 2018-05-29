const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const publicPath = path.join(__dirname, '../public');
const io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log("New User Connected");
    socket.on('disconnect', () =>{
        console.log("User was disconnected");
    });
});
app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Started on port ${port}`);
});