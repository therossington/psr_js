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
const selections = document.createElement('h3');
const result = document.createElement('h3');
const score = document.createElement('h3');
const playerScore = document.createElement('h3');
const winAnnounce = document.createElement('h1');

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        selections.textContent = `Computer selects ${computerSelection}`;
        container.appendChild(selections);
        result.textContent = "It was a tie.";
        container.appendChild(result);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        selections.textContent = `Computer selects ${computerSelection}`;
        container.appendChild(selections);   
        playerWins++;
        result.textContent = "You win! Rock beats Scissors.";
        container.appendChild(result);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        selections.textContent = `Computer selects ${computerSelection}`;
        container.appendChild(selections);
        playerWins++;
        result.textContent = "You win! Paper beats Rock.";
        container.appendChild(result);
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        selections.textContent = `Computer selects ${computerSelection}`
        container.appendChild(selections);
        playerWins++
        result.textContent = "You win! Scissors beats Paper.";
        container.appendChild(result);
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        selections.textContent = `Computer selects ${computerSelection}`
        container.appendChild(selections);
        computerWins++
        result.textContent = "You lose! Rock beats Scissors.";
        container.appendChild(result);
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        selections.textContent = `Computer selects ${computerSelection}`
        container.appendChild(selections);
        computerWins++
        result.textContent = "You lose! Paper beats Rock.";
        container.appendChild(result);
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        selections.textContent = `Computer selects ${computerSelection}`
        container.appendChild(selections);
        computerWins++
        result.textContent = "You lose! Scissors beats Papers.";
        container.appendChild(result);
    }
    playerScore.textContent = `Player score = ${playerWins}`
    score.textContent = `Computer score = ${computerWins}`
    container.appendChild(score);
    container.appendChild(playerScore);
    if (playerWins === 5) {
        winAnnounce.textContent = "Player wins!";
        container.appendChild(winAnnounce)
        } else if (computerWins === 5) {
            winAnnounce.textContent = "Computer wins!";
        } else if (playerWins === 5 && computerWins === 5) {
            winAnnounce.textContent = "It's a tie!";
            container.appendChild(winAnnounce)
        };
}

const btn = document.querySelectorAll('button');
btn.forEach(btn => btn.addEventListener('click', () => {
    console.log(playRound(btn.value, getComputerSelection()))
}));