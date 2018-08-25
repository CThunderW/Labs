const express = require("express");
const logger = require("morgan");
const app = express();

app.set("view engine", "ejs");
app.use(logger("dev"));

app.get("/", (request, response) => {
    response.render("home")
});

app.get("/car_status", (request, response) => {
    const carYear  = request.query.carYear;
    let carDescription = "";
    if (carYear > 2019) {
         carDescription = "FUTURISTIC";
    } else if (carYear> 2017) {
         carDescription = "NEW";
    } else if (carYear > 2000) {
         carDescription = "MODERN-ISH";
    } else {
         carDescription =  "ANCIENT";
        }
    response.render("car_status", {carDescription: carDescription, carYear:  carYear});
});

app.get("/random_person", (request, response) => {
    const namesList = request.query.namesList;
    let namesArr = [];
    let chosen  = "";
    if  (namesList) {
        namesArr = namesList.split(", ");
        chosen = namesArr[Math.floor(Math.random() * namesArr.length)];}  
    response.render("random_person", {namesArr: namesArr, chosen: chosen});
});

app.get("/fizzbuzz", (request, response) => {
    const num1 = request.query.num1;
    const num2 = request.query.num2;
    let fizzBuzzResult = [];
        for(let i = 1; i< 101; i++){
            if (i%num1===0 && i%num2===0){
                fizzBuzzResult.push("FiZzBuZz");
            } else if (i%num1 === 0) {
                fizzBuzzResult.push("FiZz");
            } else if (i%num2 === 0) {
                fizzBuzzResult.push("bUzZ");
            } else {
                fizzBuzzResult.push(`${i}`);
            }
        }
        
    
    response.render("fizzbuzz", {num1: num1, num2: num2, fizzBuzzResult: fizzBuzzResult})
});


const PORT = 4646;
const HOST = "localhost"; // 127.0.0.1
app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});