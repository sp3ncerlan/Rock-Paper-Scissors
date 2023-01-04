// functions

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == ("rock") && computerSelection == ("paper")) {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == ("rock") && computerSelection == ("scissors")) {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == ("paper") && computerSelection == ("rock")) {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == ("paper") && computerSelection == ("scissors")) {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == ("scissors") && computerSelection == ("rock")) {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == ("scissors") && computerSelection == ("paper")) {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection == computerSelection) {
        return "It's a tie!"
    }
}

function game() {

    let yourPoints = 0;
    let opponentPoints = 0;


    let choice = prompt("Choose your fighter!");
    let track = playRound(choice, getComputerChoice());

    console.log(track);

    if (track.includes("Win")) {
        yourPoints++
    } else if (track.includes("Lose")) {
        opponentPoints++;
    }

    if (yourPoints == opponentPoints) {
        return "Best out of five: You tied!";
    } else if (yourPoints > opponentPoints) {
        return "Best out of five: You Win";
    } else {
        return "Best out of five: You Lose!";
    }
}

// javascript code

const rock = document.querySelector('rock');

console.log(rock);

