const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");

app.engine("mustache", mustacheExpress());

app.set("views", "./views");

app.set("view engine", "mustache");

app.use(express.urlencoded());

global.trips = [];

app.get("/book", (req, res) => {
  res.render("book");
});

app.post("/book", (req, res) => {
  let title = req.body.title;
  res.send;

  let trip = { title: title };
  trips.push(trip);

  res.render("book", { title: title });

  console.log(title);
});

app.listen(3000, () => {
  console.log("server is running");
});
