const fs = require("fs");

const text = "Come on you gunners!";

fs.writeFile("COYG.txt", text, err => {
    
    //in javascript, when a program crashes with a visible error, 
    //we say that an error was thrown.  

    //You can cause code to crash by using the keyword 'throw' with any value.
    //This will halt the program and show an error message.
    
    if (err) throw err;
    console.log("file saved!");
});