const moves = ["rock", "paper", "scissors"];

let playerScore = 0;
let cpuScore = 0;

function playerMove() {
    return prompt("Enter your move:").toLowerCase();
}

function playRound(pMove) {
    let cMove = moves[Math.floor(Math.random() * 3)];

    if (pMove === "rock" && cMove === "scissors") {
        console.log("You win!");
        playerScore++;
    }
    else if (pMove === "paper" && cMove === "rock") {
        console.log("You win!");
        playerScore++;
    }
    else if (pMove === "scissors" && cMove === "paper") {
        console.log("You win!");
        playerScore++;
    }
    else if (pMove === "rock" && cMove === "paper") {
        console.log("You lose!");
        cpuScore++;
    }
    else if (pMove === "paper" && cMove === "scissors") {
        console.log("You lose!");
        cpuScore++;
    }
    else if (pMove === "scissors" && cMove === "rock") {
        console.log("You lose!");
        cpuScore++;
    }
}

function rockMove() {
    let cMove = moves[Math.floor(Math.random() * 3)];
    const roundResult = document.querySelector('.round-result');

    if (cMove === "scissors") {
        // console.log("Round won!");
        roundResult.textContent = 'Round won!';
        playerScore++;
    }
    else if (cMove === "paper") {
        // console.log("Round lost!");
        roundResult.textContent = 'Round lost!';
        cpuScore++;
    }
    else if (cMove === "rock") {
        // console.log("Round tied!");
        roundResult.textContent = 'Round tied!';
    }

    updateScore();
}

function paperMove () {
    let cMove = moves[Math.floor(Math.random() * 3)];
    const roundResult = document.querySelector('.round-result');

    if (cMove === "rock") {
        // console.log("Round won!");
        roundResult.textContent = 'Round won!';
        playerScore++;
    }
    else if (cMove === "scissors") {
        // console.log("Round lost!");
        roundResult.textContent = 'Round lost!';
        cpuScore++;
    }
    else if (cMove == 'paper') {
        // console.log("Round tied!")
        roundResult.textContent = 'Round tied!';
    }

    updateScore();
}

function scissorsMove () {
    let cMove = moves[Math.floor(Math.random() * 3)];
    const roundResult = document.querySelector('.round-result');

    if (cMove === "paper") {
        // console.log("Round won!");
        roundResult.textContent = 'Round won!';
        playerScore++;
    }
    else if (cMove === "rock") {
        // console.log("Round lost!");
        roundResult.textContent = 'Round lost!';
        cpuScore++;
    }
    else if (cMove == 'scissors') {
        // console.log("Round tied!");
        roundResult.textContent = 'Round tied!';
    }

    updateScore();
}

function game() {
    while (playerScore < 5 && cpuScore < 5) {
        let pMove = playerMove();

        playRound(pMove);
    }

    if (playerScore === 5) {
        console.log("You won 5 rounds!");
    }

    if (cpuScore === 5) {
        console.log("Computer won 5 rounds!");
    }
}

function updateScore() {
    const pScore = document.querySelector('.player-score');
    const cScore = document.querySelector('.cpu-score');

    pScore.textContent = playerScore;
    cScore.textContent = cpuScore;

    checkWinner();
}

function checkWinner () {
    const winnerMsg = document.querySelector(".winner-msg");

    if (playerScore === 5) {
        winnerMsg.textContent = 'You win!';
        disableButtons();
    }
    
    if (cpuScore === 5) {
        winnerMsg.textContent = 'You lose!';
        disableButtons();
    }
}

function disableButtons () {
    const rockBtn = document.querySelector(".btn-rock");
    const paperBtn = document.querySelector(".btn-paper");
    const scissorsBtn = document.querySelector(".btn-scissors");

    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

const rockBtn = document.querySelector(".btn-rock");
const paperBtn = document.querySelector(".btn-paper");
const scissorsBtn = document.querySelector(".btn-scissors");

rockBtn.addEventListener('click', rockMove);
paperBtn.addEventListener('click', paperMove);
scissorsBtn.addEventListener('click', scissorsMove);
