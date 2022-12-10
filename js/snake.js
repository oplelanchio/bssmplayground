const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetbtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const snakeColor = "lightblue";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
    {x:unitSize*4, y:0},
    {x:unitSize*3, y:0},
    {x:unitSize*2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
resestBtn.addEventListener("click", resetGame);

gameStart();
createFood();
drawFood();
function gameStart(){};
function nextTick(){};
function clearBoard(){};
function creatFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random()*(max-min)+min)/unitSize) *unitSize;
        return randNum;
    }
    foodX=randomFood(0, gameWidth-unitSize);
    foodY=randomFood(0, gameWidth-unitSize);
    console.log(foodX);
};
function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};
function moveSnake(){};
function drawSnake(){};
function changeDirection(){};;
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};;
