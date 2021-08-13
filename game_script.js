// Generates computer selection.

function getComputerSelection() {
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else if (randomNum === 2) {
        return "Scissors"; 
    }
}

// Win counter.

let playerWins = 0;
let computerWins = 0;

// Round counter.

let roundsPlayed = 0;

//Plays a round.

const container = document.querySelector('.score-container');
const selections = document.createElement('h2');

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        selections.textContent = `Computer selects ${computerSelection}`
        container.appendChild(selections);
        return "It was a tie.";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("Player selects "+playerSelection)
        console.log("Computer selects "+computerSelection)
        return "You win! Rock beats Scissors.";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("Player selects "+playerSelection)
        console.log("Computer selects "+computerSelection)
        return "You win! Paper beats Rock.";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("Player selects "+playerSelection)
        console.log("Computer selects "+computerSelection)
        return "You win! Scissors beats Paper.";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("Player selects "+playerSelection)
        console.log("Computer selects "+computerSelection)
        return "You lose! Rock beats Scissors.";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("Player selects "+playerSelection)
        console.log("Computer selects "+computerSelection)
        return "You lose! Paper beats Rock.";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("Player selects "+playerSelection)
        console.log("Computer selects "+computerSelection)
        return "You lose! Scissors beats Papers.";
    }
}

const btn = document.querySelectorAll('button');
btn.forEach(btn => btn.addEventListener('click', () => {
    console.log(playRound(btn.value, getComputerSelection()))
}));

// Five round game (not looped).

for (let i = 0; i <= 5; i++) {
    console.log("Player score = "+playerWins)
    console.log("Computer score = "+computerWins)
    if (roundsPlayed == 5 || playerWins + computerWins == 5) {
        if (playerWins > computerWins) {
            return "Player wins!"
        } else if (playerWins < computerWins) {
            return "Computer wins!"
        } else if (playerWins == computerWins) {
            return "It's a tie!"
        }
    }
}  