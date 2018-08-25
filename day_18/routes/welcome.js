const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.render("./notes/home");
});

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;

router.post("/sign_in", (request, response) => {
  const username = request.body.username;
  response.cookie("username", username, { maxAge: COOKIE_MAX_AGE });
  response.redirect("/");
});

router.post("/sign_out", (request, response /*, next */) => {
  response.clearCookie("username");
  response.redirect("/");
});

module.exports = router;