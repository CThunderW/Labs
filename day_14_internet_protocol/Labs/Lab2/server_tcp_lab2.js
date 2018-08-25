const net = require('net');

const server = net.createServer ( (socket)  => {
    socket.on('data', data => {
        console.log(data.toString());
      
        socket.write(`The largest number of these is: ${Math.max(...data.toString().split(","))}`)
    });
});

server.listen(5004, '127.0.0.1')
console.log('>>> Server is running on localhost with port 5004');