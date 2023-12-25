import * as TTT from "./TTT.js";

const cells=document.querySelectorAll(".cell");
const statusText=document.querySelector("#statusText");
const restartBtn=document.querySelector("#restartBtn");
const xScore=document.querySelector("#xScore");
const oScore=document.querySelector("#oScore");

restartBtn.addEventListener("click",restartGame);

let mapping = {
    0: 8 ,
    1: 1,
    2: 6,
    3: 3,
    4: 5,
    5: 7,
    6: 4,
    7: 9,
    8: 2
  };
  
let options=["","","","","","","","",""];
let currentPlayer="X";
let previous_player;

let X_score=0;
let O_score=0;
let running=false;
let X_player=new TTT.TTT_array();
let O_player=new TTT.TTT_array();

initializeGame();

function initializeGame(){
    cells.forEach(cell=>cell.addEventListener("click",cellClicked))
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent=`${currentPlayer}'s turn`
    running=true;
}

function cellClicked(){
    const cellIndex=this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return;
    }
    console.log(X_player);
    console.log(O_player);
    updateCell(this,cellIndex);
    previous_player=currentPlayer;
    changePlayer();
    currentPlayer=="X"? X_player.add_value(mapping[cellIndex]) : O_player.add_value(mapping[cellIndex]);
    checkWinner(previous_player); 
}
function updateCell(cell,index){
    options[index]=currentPlayer;
    cell.textContent=currentPlayer;
}
function changePlayer(){
    currentPlayer=(currentPlayer=="X")? "O" :"X";
    statusText.textContent=`${currentPlayer}'s turn`
}
function checkWinner(previous_player){
    let players = {
        "X_player": X_player,
        "O_player": O_player
    };
    let player = players[currentPlayer + "_player"];
    console.log(player.get_value())
    let wincondition=player.get_sum()
    if(wincondition==true){
        statusText.textContent = `${previous_player} wins`;
        if(previous_player=="X"){
            X_score+=1;
        }
        else{
            O_score+=1;
        }
        restartGame();
        xScore.innerHTML=`player X score:${X_score}`;
        oScore.innerHTML=`player O score:${O_score}`; 
    }
    else if(!options.includes("")){
        statusText.textContent=`Draw!!`   
    }
    }

function restartGame(){
    X_player.clear();
    O_player.clear();
    options=["","","","","","","","",""];
    cells.forEach(cell=>cell.textContent="");
    running=true;
}



