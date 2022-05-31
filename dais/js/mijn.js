import Player from './Player.js';
import Dice from './Dice.js';

const inputPlayerOne = document.querySelector(".input-player-one");
const inputPlayerTwo = document.querySelector(".input-player-two");
const startBtn = document.querySelector(".start-btn");
const playerOneName = document.querySelector(".player-one-name");
const playerTwoName = document.querySelector(".player-two-name");
const playerOneScore = document.querySelector(".player-one-score");
const playerTwoScore = document.querySelector(".player-two-score");

const players = [];

const addPlayer = function () {

    if (inputPlayerOne.value != "" && inputPlayerTwo.value != "") {
        const player_1 = new Player(inputPlayerOne.value, );
        const player_2 = new Player(inputPlayerTwo.value, );

        if (players.length <= 1) {
            players.push(player_1);
            players.push(player_2);
        }

        playerOneName.textContent = players[0].getName();
        playerTwoName.textContent = players[1].getName();
        playerOneScore.textContent = players[0].getScore();
        playerTwoScore.textContent = players[1].getScore();

    }
    addDefoaltBrder();

}

const addDefoaltBrder = function () {

    if (inputPlayerOne.value !== "") {
        inputPlayerOne.classList.remove("er-border");
        inputPlayerOne.classList.add("df-border");
    }

    if (inputPlayerTwo.value !== "") {
        inputPlayerTwo.classList.remove("er-border");
        inputPlayerTwo.classList.add("df-border");
    }
}

const addErrorBorder = function () {

    if (inputPlayerOne.value === "") {
        inputPlayerOne.classList.remove("df-border");
        inputPlayerOne.classList.add("er-border");
    }

    if (inputPlayerTwo.value === "") {
        inputPlayerTwo.classList.remove("df-border");
        inputPlayerTwo.classList.add("er-border");
    }
}

startBtn.addEventListener('click', addErrorBorder);
startBtn.addEventListener('click', addPlayer);


//===============================================================================


const img = document.querySelector(".img");
const playBtn = document.querySelectorAll(".play-btn");

const guesess = [];

for (let i = 1; i < 7; i++) {
    const guess = new Dice( i , `./img/${i}.png`);
    guesess.push(guess);
}

console.log(guesess);
let randomPoints = 0;
const playFun = function () {
    const randomGuess = guesess[Math.floor(Math.random() * guesess.length)];
    console.log(randomGuess);
    const randomImg = randomGuess.getImg();
    console.log(randomImg);
    img.src = randomImg;
    randomPoints = randomGuess.getPoints();
}

playBtn[1].disabled = true;
for (let i = 0; i < playBtn.length; i++) {

    playBtn[i].addEventListener('click', function () {
        playFun();
        console.log(randomPoints);
        
        playBtn[i].disabled = true;

        if ( i === 0){
            playBtn[0].disabled = true;
            playBtn[1].disabled = false;
            players[0].score = players[0].score + guesess[randomPoints - 1].points;   
            playerOneScore.textContent = players[0].getScore();
            
        } 
        else if ( i === 1){
            

            playBtn[1].disabled = true;
            playBtn[0].disabled = false;

            players[1].score = players[1].score + guesess[randomPoints - 1].points;   
              
            playerTwoScore.textContent = players[1].getScore();
        }
    });

}





































