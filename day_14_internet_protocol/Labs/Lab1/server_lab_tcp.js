const net = require('net');

const server = net.createServer ( (socket) => {
    socket.on('data', data => {
        socket.write(data.toString().split("").reverse().join(""));
        // console.log(toReverse);
        console.log(`${data}`);
    });
});

server.listen(5001, '127.0.0.1');
console.log('>>> Server is running on localhost with port 5001');