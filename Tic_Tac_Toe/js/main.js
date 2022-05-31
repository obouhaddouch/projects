//import Player.js
import Player from "./Player.js";

/**
 * To start:
 * Check index.html, make sure the board with fields are created with correct classnames
 * The board should be 3x3 fields
 * Add correct classes
 */

const players = [ ];
let currentPlayer = 0; // This is the index of the array of the currentplayer
//elementen selecteren
const fields = document.querySelectorAll('.board > .field');
const resetButton = document.querySelector(".reset-btn");
const playerOneLbl = document.querySelector('.player-lbl-1');
const playerTwoLbl = document.querySelector('.player-lbl-2');
const symbolLblOne = document.querySelector('.symbol-lbl-1');
const symbolLblTwo = document.querySelector('.symbol-lbl-2');
const WinnerLbl = document.querySelector(".WinnerLbl");
const scoreLblOne = document.querySelector(".score-lbl-1");
const scoreLblTwo = document.querySelector(".score-lbl-2");



//Maaken van twee spelers aan die zijn afgestemd op de klasse Speler
const player1 = new Player("Outmane", "X", 0);
const player2 = new Player("All", "O", 0);
console.log(player1.name);
//Voeg beide spelers toe aan de spelersarray
players.push(player1);
players.push(player2);

console.log(players);
// print name en symbol || en getPoints 
playerOneLbl.textContent = players[0].name;
symbolLblOne.textContent = players[0].symbol;
playerTwoLbl.textContent = players[1].name;
symbolLblTwo.textContent = players[1].symbol;
scoreLblOne.textContent = players[0].getPoints();
scoreLblTwo.textContent = players[1].getPoints();

/**
 * Assignment
 * Make a loop thru all the fields and add a click event. 
 * Connect the addSymbolToField function in the eventHandler
*/
//for ...
//voeg symbool toe aan veld en controleer Winnaar aan
for(let i = 0; i < fields.length; i++){
    fields[i].addEventListener('click', function(){
       // console.log(this.textContent);
       // this.textContent = player1.symbol;

        addSymbolToField(this);
        checkWinner();
    })
}
/**
 * Assignment 
 * Give body to the reset function (the function exists below)
 */
// addEventListener naar resetButton
resetButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetWinnerLbl);
resetButton.addEventListener("click", function(){
    players[0].points = 0;
    scoreLblOne.textContent = players[0].getPoints();
    players[1].points = 0;
    scoreLblTwo.textContent = players[1].getPoints(); 
})
//voeg symbool toe aan veld function
function addSymbolToField(field) {
    const fieldContent = field.textContent;

    if (fieldContent === 'X' || fieldContent === 'O') {
        alert('This field can not be used');
    }    
    /**
     * Assignment
     * Add the current player symbol to the field textContent
     * What more needs to be done here? Make a short todolist
     */
    //print symbol in field
    field.textContent = players[currentPlayer].symbol;
    currentPlayer++;
   
    if(currentPlayer > 1){
        currentPlayer = 0;
    }
}
//winning Conditions
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    /**
     * Assignment
     * Add an algorithm to check if someone has three in a row
     * Try to use Internet - if not found the teacher will give you one
     * Also make sure you check for a draw (gelijkspel)
     * Again what more needs to be done, make a short todolist
     */

     for (let i = 0; i < winningConditions.length; i++) {
        const winline = winningConditions[i];
        let winX = true;
        let winO = true;

        for (let j = 0; j < winline.length; j++) {
            const fieldIndex = winline[j];
            const field = fields[fieldIndex].textContent.toLowerCase();

            if (field === "x") {
                winO = false;
            }
            else if (field === "o") {
                winX = false;
            }
            else {
                winO = winX = false;
            }
        }
        if (winX) {
          //  alert("X IS winner")
            addPointsPlayerOne();
            WinnerLbl.textContent = "";
            const p = document.createElement("p");
            
            p.textContent = `${players[0].name} ${players[0].symbol} win`;
            WinnerLbl.append(p);
            setTimeout(resetGame, 2000);
           
            scoreLblOne.textContent = players[0].getPoints();
            status();
        }
        else if (winO) {
           // alert("O Is winner");
            addPointsPlayerTwo();
            WinnerLbl.textContent += "";
            const p = document.createElement("p");
            
            p.textContent = `${players[1].name} ${players[1].symbol} win`;
            WinnerLbl.append(p);
            setTimeout(resetGame, 2000);
            scoreLblTwo.textContent = players[1].getPoints();
            status();
        }
        else if ((fields[0].textContent == 'X' || fields[0].textContent == 'O') && (fields[1].textContent == 'X'
            || fields[1].textContent == 'O') && (fields[2].textContent == 'X' || fields[2].textContent == 'O') &&
            (fields[3].textContent == 'X' || fields[3].textContent == 'O') && (fields[4].textContent == 'X' ||
                fields[4].textContent == 'O') && (fields[5].textContent == 'X' || fields[5].textContent == 'O') &&
            (fields[6].textContent == 'X' || fields[6].textContent == 'O') && (fields[7].textContent == 'X' ||
                fields[7].textContent == 'O') && (fields[8].textContent == 'X' || fields[8].textContent == 'O')) {
            WinnerLbl.textContent = "";
            const p = document.createElement("p");
            p.textContent = "Draw";
            WinnerLbl.append(p);
            setTimeout(resetGame, 2000);
           // status();
        }
    }
}
// resetGame function
function resetGame() {
    /**
     * Assignment
     * Make sure this works (all fields empty, reset data if needed)
     */
    for(let i = 0; i < fields.length; i++){
        fields[i].textContent = "";
    }
    // scoreLblOne.textContent = "";
    // scoreLblTwo.textContent = "";
}
//resetWinnerLbl function
function resetWinnerLbl(){
  //  WinnerLbl.textContent = "";
    console.log('cl')
    setTimeout(function(){
        WinnerLbl.textContent = "";
        //WinnerLbl.classList.add("display-none");
    }, 5000);
}
//addPointsPlayerOne function
function addPointsPlayerOne() {
    console.log(" score of player 1");
    players[0].addPoints();
}

    function addPointsPlayerTwo() {
    console.log(" score of player 2");
    players[1].addPoints();
}

function status(){
    setTimeout(function(){
        WinnerLbl.textContent = "";
    }, 2000 )
}
