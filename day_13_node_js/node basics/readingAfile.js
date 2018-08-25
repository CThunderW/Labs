const fs = require("fs");

//utf8 = Unicode Transformation Format
//supports a total of 1,112,064 characters

fs.readFile("./countries.js", "utf8", (err, data) => {
    //in javascript, when a program crashes with a visible error, 
    //we say that an error was thrown.  

    //You can cause code to crash by using the keyword 'throw' with any value.
    //This will halt the program and show an error message.
    
    if (err) throw err;
    console.log(data);
});
