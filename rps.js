// Computer's random choice generator

function getComputerChoice () {
        return Math.floor(Math.random() * 3);
    };

let computerChoice = getComputerChoice();

if (computerChoice === 0) {
    computerChoice = "Rock";
} else if (computerChoice === 1) {
    computerChoice = "Paper";
} else {
    computerChoice = "Scissors"
};

console.log(computerChoice);