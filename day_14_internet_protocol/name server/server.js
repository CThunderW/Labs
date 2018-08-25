const net = require('net');

const capitalize = function(string) {
    return string[0].toUpperCase() + string.slice(1);
}

const server = net.createServer ( (socket) => {
    socket.on('data', (data) => {
        socket.write(`Hello ${capitalize(data.toString())}`);
    });
});

server.listen(5002, '127.0.0.1');
console.log('>>> Server is running on localhost with port 5002');