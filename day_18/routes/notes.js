const express = require("express");
const router = express.Router();
const knex = require("../db/client");

// notes#new -> GET /notes/new


router.get("/newNote", (req, res) => {
  res.render("notes/newNote")
});

router.get("/allnotes", (req, res) => {
  res.render("notes/allNotes")
});

module.exports = router;