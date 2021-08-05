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

let getPlayerSelection = prompt("Paper, scissors, rock?");

// Win counter.

let playerWins = 0;
let computerWins = 0;

// Round counter.

let roundsPlayed = 0;

//Plays a round.

function playRound(getPlayerSelection, getComputerSelection) {
    if (getPlayerSelection.toUpperCase() === getComputerSelection) {
        console.log("Player selects "+getPlayerSelection.toUpperCase())
        console.log("Computer selects "+getComputerSelection)
        roundsPlayed++
        return "It was a tie.";
    } else if (getPlayerSelection.toUpperCase() === "ROCK" && getComputerSelection === "SCISSORS") {
        playerWins++ 
        console.log("Player selects "+getPlayerSelection.toUpperCase())
        console.log("Computer selects "+getComputerSelection)
        roundsPlayed++
        return "You win! Rock beats scissors.";
    } else if (getPlayerSelection.toUpperCase() === "PAPER" && getComputerSelection === "ROCK") {
        playerWins++
        console.log("Player selects "+getPlayerSelection.toUpperCase())
        console.log("Computer selects "+getComputerSelection)
        roundsPlayed++
        return "You win! Paper beats rock.";
    } else if (getPlayerSelection.toUpperCase() === "SCISSORS" && getComputerSelection === "PAPER") {
        playerWins++
        console.log("Player selects "+getPlayerSelection.toUpperCase())
        console.log("Computer selects "+getComputerSelection)
        roundsPlayed++
        return "You win! Scissors beats paper.";
    } else if (getPlayerSelection.toUpperCase() === "SCISSORS" && getComputerSelection === "ROCK") {
        computerWins++
        console.log("Player selects "+getPlayerSelection.toUpperCase())
        console.log("Computer selects "+getComputerSelection)
        roundsPlayed++
        return "You lose! Rock beats scissors.";
    } else if (getPlayerSelection.toUpperCase() === "ROCK" && getComputerSelection === "PAPER") {
        computerWins++
        console.log("Player selects "+getPlayerSelection.toUpperCase())
        console.log("Computer selects "+getComputerSelection)
        roundsPlayed++
        return "You lose! Paper beats rock.";
    } else if (getPlayerSelection.toUpperCase() === "PAPER" && getComputerSelection === "SCISSORS") {
        computerWins++
        console.log("Player selects "+getPlayerSelection.toUpperCase())
        console.log("Computer selects "+getComputerSelection)
        roundsPlayed++
        return "You lose! Scissors beats papers.";
    }
}

// Five round game (not looped).

function game() {
    console.log(playRound(getPlayerSelection, getComputerSelection()))
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