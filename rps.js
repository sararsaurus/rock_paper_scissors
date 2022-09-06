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
        return 'rock';
    } else if (result === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
console.log(getComputerChoice ());


// Single round; step 4

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'scissors'){
        return "Tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats rock";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats paper";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats scissors";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats paper";
    }


}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
