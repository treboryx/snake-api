var { readdirSync } = require("fs");
const path = require("path");

const snakes = readdirSync(
  path.join(__dirname, "snakes")
);

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const snakeJson = () => {
  return snakes.random();
};

const randomSnake = () => {
  return snakes.random();
};

module.exports = { snakeJson, randomSnake };
