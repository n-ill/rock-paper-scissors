const moves = ["rock", "paper", "scissors"];

let playerScore = 0;
let cpuScore = 0;

function cpuMove() {
    return moves[Math.floor(Math.random() * 3)];
}

function playerMove() {
    return prompt("Enter your move:").toLowerCase();
}

function checkWinner(pMove, cMove) {
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

function game() {
    while (playerScore < 5 && cpuScore < 5) {
        let pMove = playerMove();
        let cMove = cpuMove();

        checkWinner(pMove, cMove);
    }

    if (playerScore === 5) {
        console.log("You won 5 rounds!");
    }

    if (cpuScore === 5) {
        console.log("Computer won 5 rounds!");
    }
}

game();
