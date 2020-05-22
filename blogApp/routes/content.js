let express = require("express");
let router = express.Router();

router.post("/content", (req, res) => {
  //SENT TO CONTENT
  let title = req.body.title; // the information I want back
  let description = req.body.description;
  let genre = req.body.genre;

  console.log(title);
  console.log(description);
  console.log(genre);

  let taskPush = { title: title, description: description, genre: genre }; // created a task information in the array.
  tasks.push(taskPush); //pushed into array.
  res.redirect("/content"); // redirected the information.
});

router.post("/delete-movie", (req, res) => {
  let movieTwoDelete = req.body.deleteMovie;
  console.log(movieTwoDelete);
  let newMovies = tasks.filter((movie) => {
    return movie.title != movieTwoDelete;
  });

  tasks = newMovies;

  res.redirect("/content"); // redirect the same page
});

//new code created on the fly.
router.post("/genreMovie", (req, res) => {
  let filterGenre = req.body.genreMovie;
  console.log(movieTwoDelete);
  let newMovies = tasks.filter((movie) => {
    return movie.genre != filterGenre;
  });

  tasks = newMovies;

  res.redirect("/content"); // redirect the same page
});

module.exports = router;
