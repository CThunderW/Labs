const path = require("path");
const express = require("express");
const logger = require("morgan");
const cookieParser =  require("cookie-parser");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use((request, response, next) => {
    console.log("🍪 Cookies:", request.cookies);
    const username = request.cookies.username;
    const language = request.cookies.language;
    response.locals.username = "";
    if (username) {
        response.locals.username = username;
        response.locals.language =
        console.log(`Signed in as ${username}`);
    }
    next();
});

app.set("view engine", "ejs");

app.get("/",  (request, response) => {
    let welcomeText = "Hello, Bonjour, Ni Hao, Hola";
    
    let username = request.cookies.username;
    let lang = request.cookies.language;

    if (lang==="Chinese") { welcomeText = "Ni Hao"} 
    else if (lang==="English") { welcomeText = "Hello"}
    else if (lang==="German") { welcomeText = "Hallo"}
    else if (lang==="French") { welcomeText = "Bonjour"}
    else if (lang==="Spanish") { welcomeText = "Hola"}
    else { welcomeText = "Hello, Bonjour, Ni Hao, Hola"};
    response.render("home", {welcomeText, lang});
});

app.get("/languageSelection", (request, response) => {
    response.render("languageSelection");
})

app.post("/languageSelection", (request, response) => {
    const username = request.body.username;
    const language = request.body.language;
    response.cookie('username', username, {maxAge: 604800000});
    response.cookie('language', language, {maxAge: 604800000});
    response.redirect('/');
});

const PORT = 4546;
const HOST = "localhost"; // 127.0.0.1
app.listen(PORT, HOST, () => {
  console.log(`» Server listening on http://${HOST}:${PORT}`);
});
