const express = require("express");
const { snakeJson, randomSnake } = require("./assets/functions.js");
const config = require("./config.json");
const path = require("path");

const app = express();

app.use(express.static("assets/snakes"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/random_snake.json", (req, res) => {
  res.status(200).json({
    url: `${config.domain}/assets/snakes/${snakeJson()}`
  });
});

app.get("/random_snake", (req, res) => {
  res.status(200).sendFile(path.join(__dirname + "/assets/snakes/" + randomSnake()));
});


app.listen(config.port, () => console.log(`snake-api listening on ${config.domain}:${config.port}`));