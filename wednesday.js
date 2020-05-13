const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");

//part of the router

app.engine("mustache", mustacheExpress());

app.set("views", "./views");

app.set("view engine", "mustache");

app.use(express.urlencoded());

app.use(require("./routes/movies"));
app.use(require("./routes/content"));

// localhost:3000/css/style.css
app.use("/css", express.static("css")); //any file inside the css folder can be accessed at //localhost:3000/style.css.

//localhost:3000/client.js
app.use(express.static("public"));

global.tasks = [];

app.get("/", (req, res) => {
  res.render("index");
});

// created search bar to review material.
app.get("/movies", (req, res) => {
  res.render("movies");
});

//CREATED AN GET TO SEND MOVIES.
app.get("/content", (req, res) => {
  res.render("content", { listOfMovies: tasks });
});

// created the post in order to receive from the client side.
/*
app.post("/content", (req, res) => { //SENT TO CONTENT
  let title = req.body.title; // the information I want back
  let description = req.body.description; 
  let genre = req.body.genre;

  console.log(title);
  console.log(description);
  console.log(genre);

  let task = { title: title, description: description, genre: genre }; // created a task information in the array.
  tasks.push(task); //pushed into array.
  res.redirect("/content"); // redirected the information.
});
*/
/*
app.post("/delete-movie", (req, res) => {
  let movieTwoDelete = req.body.deleteMovie;
  console.log(movieTwoDelete);
  let newMovies = tasks.filter((movie) => {
    return movie.title != movieTwoDelete;
  });

  tasks = newMovies;

  res.redirect("/content"); // redirect the same page
}); 
*/

app.listen(3000, () => {
  console.log("server is running");
});
