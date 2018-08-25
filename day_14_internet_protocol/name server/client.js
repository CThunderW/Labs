const net = require('net');
const client = net.Socket();
const readline = require('readline')

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface.question('What is your name?', data => {
    client.connect('5001', '127.0.0.1', () => {
        client.write(data);
    })
});



client.on('data', (data) => {
    console.log(`data received from server: ${data}`);
    process.exit();
})


client.connect(5002, '127.0.0.1', () => {
    client.write(`My name is ${data}`);
});


