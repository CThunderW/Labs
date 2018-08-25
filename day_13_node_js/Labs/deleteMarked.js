const fs = require('fs');

const args = process.argv.slice(2);

const filename = args[0]
const outputFile = args[1];

let text = [];
let write = "";

fs.readFile(`./${filename}`, "utf8", (err, contents)=>{
if (err) throw err;
text = contents.split("\n");

let filtered = text.filter(str => str.slice(-3) !=="yes")
for(let val of filtered){
    write += val + "\n";
}
fs.writeFile(outputFile, write, err => { 
    if (err) throw err;
    console.log("file saved!");
});
});



// console.log(result);
// console.log(filename);
// console.log(outputFile);



