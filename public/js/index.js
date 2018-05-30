// client response side coding
const socket = io();
socket.on('connect', function() {
    console.log("Connected To Server");

    socket.emit('createMessage', { // first argument: event name , second argument: data you want to send
        to: 'Parth@pmk.com',
        text: 'Hey this is parth'
    });
});

socket.on('disconnect', function() {
    console.log("Disconnected from Server");
});
socket.on('newMessage', function (message) {
    console.log("New Message", message);
});