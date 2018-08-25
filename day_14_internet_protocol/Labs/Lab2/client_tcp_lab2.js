const net = require('net');
const readline = require('readline');
const client = net.Socket();
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

interface.question('Please enter a string of comma-separated numbers:', string => {
    client.connect(5004, '127.0.0.1', () => {
        client.write(string);
        console.log(string);
    });    
});

client.on('data', data => {
    console.log(`${data}`);
    process.exit;
})