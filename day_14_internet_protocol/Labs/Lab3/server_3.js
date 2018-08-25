const http = require('http');
const url = require('url');

console.log("HTTP Server up and running on port 5005");

const server = http.createServer( (request, response) => {
    const params  = url.parse(request.url, true).query;


    response.writeHead(200, {'Content-Type': 'text/html'});  
    response.write(`You got a ${grades(params.grade)}!`)
    response.write(
        `<!DOCTYPE html>
            <html>
                <head>
                    <title>${grades(params.grade)}!</title>
                </head>
                <body>
                    <h1> your grade was: ${grades(params.grade)}!</h1>
                </body>
            </html>`);
response.end();

});

const letterGrade = ['A', 'B', 'C', 'D', 'F']
let gradeIndex = 0;
let yourScore = letterGrade[gradeIndex];
function grades(grade){
    if (grade>90) {gradeIndex = 0
    } else if (grade>80){gradeIndex = 1
    } else if  (grade>70){gradeIndex = 2
    } else if (grade>60){gradeIndex = 3
    } else {gradeIndex = 4} 
    return letterGrade[gradeIndex];
console.log(`you got a ${yourScore}`);
}
server.listen(5005);