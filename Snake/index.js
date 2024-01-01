const gameBoard=document.querySelector("#gameBoard");
const context=gameBoard.getContext("2d");
const scoreText=document.querySelector("#scoreText");

const resetBtn=document.querySelector("#resetBtn");
const gameWidth=gameBoard.width;
const gameHeight=gameBoard.height;

const boardBackground ="white";
const snakeColor ="lightgreen";
const headColor ="Blue"
const snakeBorder="black"
const foodColor="red";
const unitSize=20;

let running=false;
let xVelocity=unitSize;
let yVelocity=0;

let foodX;
let foodY;

let score=0;
let initial_snake=[ //initial coordinates of snake body parts
    {x:unitSize*4 ,y:0},//head of snake snake[0]
    {x:unitSize*3,y:0},
    {x:unitSize*2,y:0},
    {x:unitSize ,y:0},
    {x:0 ,y:0},
]
let snake=initial_snake;

window.addEventListener("keydown",changeDirection);
resetBtn.addEventListener("click",resetGame);

gameStart();

function gameStart(){
    running=true;
    scoreText.textContent=score;
    createFood();
    drawFood();
    nextTick();

};
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        },75);
    }
    else{
        displayGameOver();
    }
}; 

function clearBoard(){
    context.fillStyle=boardBackground;
    context.fillRect(0,0,gameWidth,gameHeight)
 
};

function createFood() {
    function randomFood(min, max) {
        return Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
    }

    do {
        foodX = randomFood(unitSize, gameWidth - unitSize);
        foodY = randomFood(unitSize, gameHeight - unitSize);
    } while (foodX <= unitSize || foodX >= gameWidth - unitSize || foodY <= unitSize || foodY >= gameHeight - unitSize);
}

function drawFood() {
    context.font = score % 12 === 3 ? "45px Arial" : "30px Arial"; // Change font size based on score
    context.fillText("🍎", foodX, foodY);
}

function isFoodInTerritory() {
    const territory = 1; // define the territory range
    const foodSize = score % 12 === 3 ? 60 : 30; // Change food size based on score
    if (snake[0].x < foodX + foodSize + territory && 
        snake[0].x + unitSize > foodX - territory && 
        snake[0].y < foodY + foodSize + territory && 
        snake[0].y + unitSize > foodY - territory) {
        return true;
    } else {
        return false;
    }
}
function moveSnake() {
    const head = {x: snake[0].x + xVelocity, y: snake[0].y + yVelocity};//create new head 
    snake.unshift(head);

    if (isFoodInTerritory()) {
        score%12==3? score += 5:score += 1;
        scoreText.textContent = score;
        createFood();
    } else {
        snake.pop();
    }
}

function drawSnake() {
    context.strokeStyle = snakeBorder;
    snake.forEach((snakePart, index) => {
        if (index === 0) {
            context.fillStyle = headColor;
            context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
            context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
        } else {
            context.beginPath();
            context.arc(snakePart.x + (unitSize/ 2), snakePart.y + (unitSize / 2), (unitSize*1.18 / 2), 0, Math.PI * 2, true);
            context.fillStyle = snakeColor;
            context.fill();
            context.stroke();
        }
    });
};

function changeDirection(event){
    const keyPressed=event.keyCode;//down=40,up=38,left=37,right=39
    const LEFT=37;
    const UP=38; 
    const RIGHT=39;
    const DOWN=40;

    const goingUP=(yVelocity == -unitSize);//boolean variables
    const goingDOWN=(yVelocity == unitSize);
    const goingLEFT=(xVelocity == -unitSize);
    const goingRIGHT=(xVelocity ==unitSize);

    switch(true){
        case(keyPressed ==LEFT && !goingRIGHT)://cant go back into body parts
            xVelocity= -unitSize;
            yVelocity=0;
            break;
        case(keyPressed ==UP && !goingDOWN)://cant go back into body parts
            xVelocity=0;
            yVelocity=-unitSize;
            break;
        case(keyPressed == RIGHT && !goingLEFT)://cant go back into body parts
            xVelocity=unitSize;
            yVelocity=0;
            break;
        case(keyPressed ==DOWN && !goingUP)://cant go back into body parts
            xVelocity=0;
            yVelocity=unitSize;
            break;
        
    }
};
function checkGameOver(){
    switch(true){
        case(snake[0].x<0):
        running=false;
        break;
    case(snake[0].x>gameWidth):
        running=false;
        break;
    case(snake[0].y<0):
        running=false;
        break;
    case(snake[0].y>gameHeight):
        running=false;
        break;
    }

    for(let i=1;i<snake.length;i+=1){
        if(snake[i].x==snake[0].x && snake[i].y==snake[0].y){//if head matches with coordinates of any other body part
            running=false;
            displayGameOver()
        }
    }   
};
function displayGameOver(){
    context.font="50px MV Boli"
    context.fillStyle="black";
    context.textAlign="center";
    context.fillText("Game Over!!",gameWidth/2,gameHeight/2);
    running=false;

};
function resetGame(){
    score=0;
    xVelocity=unitSize;
    yVelocity=0;
    snake=[ //initial coordinates of snake body parts
    {x:unitSize*4 ,y:0},//head of snake snake[0]
    {x:unitSize*3,y:0},
    {x:unitSize*2,y:0},
    {x:unitSize ,y:0},
    {x:0 ,y:0},
];
};
