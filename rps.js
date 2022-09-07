

// Computer's random choice generator

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

// Single round


/* function playRound (playerSelection, computerSelection) {
    
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
} */

//consolidating results and adding a scoreboard

let playerSelection = prompt("Rock, paper, or scissors?");
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let roundNumber = 5;

function playRound (playerSelection, computerSelection) {

// Tie
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock' || 
        playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper' || 
        playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors'){
       
            playerScore += 0;
            computerScore +=0;
            roundNumber -= 1;
            return `Tie!`;
       


// Player wins

        } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors' ||
            playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' || 
            playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
            
            playerScore += 1;
            roundNumber -= 1;
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        

// Computer wins

        } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper' || 
            playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors' || 
            playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
         
            computerScore += 1;
            roundNumber -= 1;
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }

    }
    
    console.log(playRound(playerSelection, computerSelection));
    console.log(`human: ${playerScore}`);
    console.log(`machine: ${computerScore}`);
    console.log(`number of games left: ${roundNumber}`)
   

/*
// 5-round game; step 6

let playerSelection = prompt("Rock, paper, or scissors?");
let computerSelection = getComputerChoice();


// console.log(playRound(playerSelection, computerSelection));

function game () {
    for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
    }
}
console.log(game());

// Scoreboard 

let playerScore = 0;
let computerScore = 0;



/* 
ask user input
run playRound
print result
tabulate player and computer score
repeat x4


*/



