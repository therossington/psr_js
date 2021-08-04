// Generates computer selection.

function getComputerSelection() {
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum === 0) {
        return "ROCK";
    } else if (randomNum === 1) {
        return "PAPER";
    } else if (randomNum === 2) {
        return "SCISSORS"; 
    }
}

// Player selection.

let getPlayerSelection = 'rock';

//Plays a round.

function playRound(getPlayerSelection, getComputerSelection) {
    if (getPlayerSelection.toUpperCase() === getComputerSelection) {
        return "It was a tie.";
    } else if (getPlayerSelection.toUpperCase() === "ROCK" && getComputerSelection === "SCISSORS") {
        return "You win! Rock beats scissors.";
    } else if (getPlayerSelection.toUpperCase() === "PAPER" && getComputerSelection === "ROCK") {
        return "You win! Paper beats rock.";
    } else if (getPlayerSelection.toUpperCase() === "SCISSORS" && getComputerSelection === "PAPER") {
        return "You win! Scissors beats paper.";
    } else if (getPlayerSelection.toUpperCase() === "SCISSORS" && getComputerSelection === "ROCK") {
        return "You lose! Rock beats scissors.";
    } else if (getPlayerSelection.toUpperCase() === "ROCK" && getComputerSelection === "PAPER") {
        return "You lose! Paper beats rock.";
    } else if (getPlayerSelection.toUpperCase() === "PAPER" && getComputerSelection === "SCISSORS") {
        return "You lose! Scissors beats papers.";
    }
}