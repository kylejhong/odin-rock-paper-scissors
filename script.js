playGame();

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === null) {
        console.log("Null value entered by user. No winners.");
    } else if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both the human and computer put ${humanChoice}.`);
        return 0;
    } else {
        let winner = false;
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                winner = true;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                winner = true;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                winner = true;
            }
        }

        if (winner) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            return 1;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            return -1;
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}!`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        if (result === 1) {
            humanScore++;
        } else if (result === -1) {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        console.log(`You won! The final scoreboard is \nYou: ${humanScore} points, Computer: ${computerScore} points`);
    } else if (humanScore < computerScore) {
        console.log(`You lost! The final scoreboard is \nComputer: ${computerScore} points, You: ${humanScore} points`);
    } else {
        console.log("No winners! The game was a tie.");
    }
}