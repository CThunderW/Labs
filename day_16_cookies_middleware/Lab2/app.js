const path = require("path");
const express = require("express")
const app = express();
const logger = require("morgan");
const cookieParser = require("cookie-parser")

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true}));



app.use(cookieParser());

app.use((request, response, next) => {
console.log("🍪 Cookies", request.cookies);
const username = request.cookies.username;
const description = request.cookies.description;
const bodyText = request.cookies.bodyText;
    if (username) {
        response.locals.username = username;
        response.locals.description = description;
        response.locals.bodyText = bodyText;
        console.log(`signed in as ${username}`);
    }

next();
})

app.set("view engine", "ejs");

app.get("/", (request, response) => {
    let username = "";
    response.render("home")
});

app.get("/add", (request, response) => {
    let username = response.locals.username;
    response.render("add")
});

app.post("/add", (request, response) => {
    const username = request.body.username;
    const description = request.body.description;
    const bodyText = request.body.bodyText;
    response.cookie('username', username, {maxAge: 604800000});
    response.cookie('description', description, {maxAge: 604800000});
    response.cookie('bodyText', bodyText, {maxAge: 604800000});
    response.redirect('/');
} )

app.get("/list", (request, response) => {
response.render("list")
});



const PORT = 4469;
const HOST = "127.0.0.1";
app.listen(PORT, HOST, () =>{
console.log(`SERVER RUNNING ON PORT ${PORT}`)
});
