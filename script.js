let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice());
console.log(getHumanChoice());

function getComputerChoice() {
    let number = parseInt(Math.random() * 3);
    
    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Please enter either \"rock, paper, or scissors.\"")
    userInput = userInput.trim();
    userInput = userInput.toLowerCase();
    if (userInput === "rock") {
        return "rock";
    } else if (userInput === "paper") {
        return "paper";
    } else if (userInput === "scissors") {
        return "scissors";
    } else {
        return null;
    }
}