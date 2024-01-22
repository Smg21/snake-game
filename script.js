//Define HTML elements that we need 
const board = document.getElementById('game-board');

//define game variables
let snake = [{x: 10, y: 10}]; //This is where the snake starts

//draw game map, snake, food
function draw(){
    board.innerHTML = '';
    drawSnake();
}

//draw snake, define how snake looks
function drawSnake(){
snake.forEach((segment) => {
    const snakeElement = createGameElement('div', 'snake');
}) //This is responsible for giving it snake elements 
}

//Create a snake or food cube/div
function createGameElement(tag, className) {
    const element = document.createElement(tag); //creating a new element using the same way to target the html but instead its creating a new html element within javascript
    element.className = className; 
}