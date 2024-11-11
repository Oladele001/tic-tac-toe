let gameBoard = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const turnElement = document.getElementById("turn");
    const resetButton = document.getElementById("reset");

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            if (gameOver || gameBoard[index] !== "") {
                return;
            }
            gameBoard[index] = currentPlayer;
            cell.textContent = currentPlayer;
            checkWinner();
            if (!gameOver) {
                currentPlayer = (currentPlayer === "X") ? "O" : "X";
                turnElement.textContent = `Next Player: ${currentPlayer}`;
            }
        });
    });
resetButton.addEventListener("click", () => {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    cells.forEach((cell) => {
        cell.textContent = "";
    });
    turnElement.textContent = `Next Player: ${currentPlayer}`;
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {

const combination = winningCombinations[i];
if (
    gameBoard[combination[0]] !== "" &&
    gameBoard[combination[0]] === gameBoard[combination[1]] &&
    gameBoard[combination[0]] === gameBoard[combination[2]]
) {
    gameOver = true;
    if (gameBoard[combination[0]] === "X") {
        turnElement.textContent = `X wins! O is the next player`;
    } else {
        turnElement.textContent = `O wins! X is the next player`;
    }
    return;
}
}

if (!gameBoard.includes("")) {
gameOver = true;
turnElement.textContent = "It's a draw!";
}
}

turnElement.textContent = `Next Player: ${currentPlayer}`;
});
