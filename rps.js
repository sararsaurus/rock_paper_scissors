
let playerScore = 0;
let computerScore = 0;
let roundNumber = 5;

// Computer's random choice generator

function getComputerChoice() {
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

// 5-round game, generating a new player & computer selection each time. 

function game() {
    for (let i = 0; i <5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        playRound (playerSelection, computerSelection);
    }       
} 

// Single round with scoreboard 
 function playRound (playerSelection, computerSelection) {

// Tie
    if (playerSelection === 'rock' && computerSelection === 'rock' || 
        playerSelection === 'paper' && computerSelection === 'paper' || 
        playerSelection === 'scissors' && computerSelection === 'scissors'){
       

            playerScore += 0;
            computerScore +=0;
            roundNumber -= 1;
            console.log("Tie!");
            console.log(`human: ${playerScore}`);
            console.log(`machine: ${computerScore}`);
            console.log(`number of games left: ${roundNumber}`)
            

// Player wins
        } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
            playerSelection === 'paper' && computerSelection === 'rock' || 
            playerSelection === 'scissors' && computerSelection === 'paper') {
            
                playerScore += 1;
                roundNumber -= 1;
                console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
                console.log(`human: ${playerScore}`);
                console.log(`machine: ${computerScore}`);
                console.log(`number of games left: ${roundNumber}`)

// Computer wins
        } else if (playerSelection === 'rock' && computerSelection === 'paper' || 
            playerSelection === 'paper' && computerSelection === 'scissors' || 
            playerSelection === 'scissors' && computerSelection === 'rock') {
         
                computerScore += 1;
                roundNumber -= 1;
                console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
                console.log(`human: ${playerScore}`);
                console.log(`machine: ${computerScore}`);
                console.log(`number of games left: ${roundNumber}`)
        }
    }

// Tabulate overall winner at the end
    function overallWinner (playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`Human wins!`); 
    } else if (computerScore > playerScore) {
        console.log(`Machines win!`);
    } else {
        console.log(`Tie!`);
    }
}

console.log(game());
console.log(overallWinner (playerScore, computerScore));
