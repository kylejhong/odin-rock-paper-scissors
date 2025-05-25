console.log("Hello World");

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