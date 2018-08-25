const net = require('net');
const client = net.Socket();
const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});  

interface.question(`Please enter a string:`, string => {
    client.connect(5001, '127.0.0.1', () =>{
        // console.log(string);
        client.write(string);
    })
});

client.on('data', data => {
    console.log(`got this back from server: ${data}`);
    process.exit();
});