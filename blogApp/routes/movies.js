const express = require("express");
const router = express.Router();

router.get("/movies", (req, res) => {
  res.render("movies");
});

module.exports = router;
