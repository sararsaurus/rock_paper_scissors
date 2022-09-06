/* Computer's random choice generator; step 3; attempt 1
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
*/

// Computer's random choice generator; step 3; attempt 2

function getComputerChoice () {
    let result;
    result = Math.floor(Math.random() * 3)
    if (result === 0) {
        return "Rock";
    } else if (result === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice ());


/* Single round; step 4

function playRound (playerSelection, computerSelection) {

}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection);)


if (playerSelection === 'rock' && computerSelection === 'rock')
*/