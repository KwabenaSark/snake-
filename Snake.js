var canvas = document.getElementById("snakeGame");
var ctx = canvas.getContext("2d");

//create the snake
var snake = [
{x: 150, y: 150},
{x: 140, y: 150},
{x: 130, y: 150},
{x: 120, y: 150},
{x: 110, y: 150}
];

//create the food
var food = {
x: getRandomInt(0, 29) * 10,
y: getRandomInt(0, 29) * 10
};

//create the score variable
var score = 0;

//control the snake
var dx = 10;
var dy = 0;

//game loop
function gameLoop() {
requestAnimationFrame(gameLoop);
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawFood();
moveSnake();
drawSnake();
}

//draw the food on the canvas
function drawFood() {
ctx.fillStyle = "red";
ctx.strokestyle = "darkred";
ctx.fillRect(food.x, food.y, 10, 10);
ctx.strokeRect(food.x, food.y, 10, 10);
}

//move the snake on the canvas
function moveSnake() {
//get the current position of the snake's head
var head = {x: snake[0].x + dx, y: snake[0].y + dy};

//add the new position of the snake's head to the beginning of the array
snake.unshift(head);

var didEatFood = snake[0].x === food.x && snake[0].y === food.y;
if (didEatFood) {
//increase score
score += 10;

Copy code
//generate new food
food = {
  x: getRandomInt(0, 29) * 10,
  y: getRandomInt(0, 29) * 10
};
} else {
//remove the last element of the snake array (the tail)
snake.pop();
}
}

//draw the snake on the canvas
function drawSnake() {
snake.forEach(function(segment) {
ctx.fillStyle = "lightgreen";
ctx.strokestyle = "darkgreen";
ctx.fillRect(segment.x, segment.y, 10, 10);
ctx.strokeRect(segment.x, segment.y, 10, 10);
});

//display score
ctx.fillStyle = "white";
ctx.font = "bold 15px sans-serif";
ctx.fillText("Score: " + score, 10, 20);
}

//generate a random number between min and max
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

//listen to keyboard events to move the snake
document.addEventListener("keydown", function(e) {
//prevent snake from going in opposite direction
if (e.keyCode === 37 && dx === 0) {
dx = -10;
dy
