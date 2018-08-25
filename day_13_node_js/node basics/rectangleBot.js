const readline = require("readline");
const createRectangle = require("./createRectangle");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askDimensions(){
rl.question("What's the width?\n", width => {
   rl.question("What's the height?\n", height =>{console.log(createRectangle(width, height));
    rl.close();
});
});
askDimensions();
}
askDimensions();