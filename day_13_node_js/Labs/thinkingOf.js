const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 1;
let min = 1;
let max = 10;

let winner = Math.floor(Math.random()*10+1);
// console.log(winner);

function pickNumber(){
    rl.question(`Guess a number between ${min} and ${max}\n`, guess => {
       if (count === 1 && count === winner){console.log(`WOW! IT WAS ${winner}! WHAT A GUESS!`);
       rl.close();
    }
        else if (+guess === winner) {
            console.log(`The number was ${winner}, and it only took you ${count} tries...`)
            rl.close();
        } else {
            console.log("WRONG! GUESS AGAIN!");
            count++;
            pickNumber();
        } 
        })
    } 
pickNumber()
