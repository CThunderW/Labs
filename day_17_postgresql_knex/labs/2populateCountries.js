const knex = require("./db/client.js");
const fs = require("fs");

fs.readFile('./population.csv', "utf8", (err, data) => {
   if (err) throw err;
   const rows = data.split('\r\n');
   const firstSplit = [];
   const joined = [];
   
   rows.shift();
   for (let line of rows) {
       line = line.split(',');
       firstSplit.push(line);
   }
   for (let line of firstSplit) {
       if (line.length > 4) {
           line = [line.slice(0, -3).join(','), line[line.length - 3], line[line.length - 2], line[line.length-1]];
       }
       joined.push(line);
   }
   for (let line of joined) {
       knex('countries')
           .insert({
               name: line[0],
               code: line[1]
           })
   }
})