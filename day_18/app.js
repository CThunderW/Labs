const path = require("path");
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride((req, res) => {
  if (typeof req.body === "object" && req.body._method) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
})
);

app.use(cookieParser());


app.use((request, response, next) => {
  console.log(" 🍪 Cookies:", request.cookies);
  // Read cookies from the request with `request.cookies`
  // Cookies are represented as object where each key
  // is a cookie name and its value is the cookie's value.
  // You must install & setup "cookie-parser" to
  // read cookies.
  const username = request.cookies.username;

  // Set properties on `response.locals` object to
  // create variables that are global to all of your
  // EJS templates. In code below, we set a property
  // "username" that becomes a variable "username"
  // in all our templates.
  response.locals.username = "";

  if (username) {
    response.locals.username = username;
    console.log(`🌶 Signed in as ${username}`);
  }

  // The third argument, "next", is a function that
  // when called tells Express that this middleware has completed
  // its job and its time to move to the next middleware in line.
  next();
});

// -----------
// R O U T E S
// -----------

const welcomeRouter = require("./routes/welcome");
const notesRouter = require("./routes/notes");

app.use("/", welcomeRouter);
// // You can split routes into their modules with
// // express.Router() instance. When doing so, require the module
// // and connect to the app with app.use(<path-prefix>, <router-instance>).
// // The app.use(...) will route all routes inside of postsRouter
// // prefix all of their URLs with /posts.
app.use("/notes", notesRouter);


const PORT = 4747;
const HOST = "localhost"; // 127.0.0.1
app.listen(PORT, HOST, () => {
  console.log(` 🎧  Server listening on http://${HOST}:${PORT}`);
});