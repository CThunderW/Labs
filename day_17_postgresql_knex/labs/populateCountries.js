
const knex = require("knex");
const fs = require("fs");

fs.readFile('population.csv', 'utf8', (err, data) => {
    if (err) throw err;
    const lines = data.split('\r\n');

    const splitLines = [];
    const joinedLines = [];
    
    lines.shift();

    for (let line of lines){
        line = line.split(',');
        splitLines.push(line);
    }
    for (let line of splitLines) {
        if (line.length >4) {
            line = [line.slice(0, -3).join(','), line[line.length -3], line[line.length -2], line[line.length -1]];
        }
    joinedLines.push(line);
    }
    for (let line of joinedLines) {
        knex('countries')
        .insert({
            countryName: line[0],
            countryCode: line[1]
        })
    }
})