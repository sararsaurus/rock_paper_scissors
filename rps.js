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
// console.log(getComputerChoice ());


// Single round; step 4 & 5

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock' || playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper' || playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){
        return "Tie!";
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats rock";
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats scissors";
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats paper";
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock";
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats scissors";
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats paper";
    }
}
//let playerSelection = 'ROCK';
 

// 5-round game; step 6

let playerSelection = 'PAper';
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

//playerSelection = playerSelection.toLowerCase();