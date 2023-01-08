// functions

let playerScore = 0
let computerScore = 0
let roundWinner = ""
const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")
const outcome = document.querySelector(".outcome")
const playerScoreSpan = document.querySelector(".player-score")
const computerScoreSpan = document.querySelector(".computer-score")

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"]
  return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()
  const p = document.createElement("p")

  if (playerSelection === computerSelection) {
    p.innerText = `You tied! You both picked ${playerSelection}`
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++
    p.innerText = "You won!"
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++
    p.innerText = "You lost!"
  }
  outcome.appendChild(p)
}

const checkForWinner = (playerScore, computerScore) => {
  const h2 = document.createElement("h2")

  if (playerScore === 5) {
    h2.classList.add("player-won")
    h2.innerText = `You won ${playerScore} to ${computerScore}, great job beating the computer!`
  }

  if (computerScore === 5) {
    h2.classList.add("computer-won")
    h2.innerText = `You lost ${playerScore} to ${computerScore}, better luck next time!`
  }
  outcome.append(h2)
}

const updateScores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`
  computerScoreSpan.innerText = `Player Score: ${computerScore}`
}

rockBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice()
  const playerSelection = "rock"
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore)
  checkForWinner(playerScore, computerScore)
})

paperBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice()
  const playerSelection = "paper"
  playRound(playerSelection, computerSelection)
  updateScores(playerScore, computerScore)
  checkForWinner(playerScore, computerScore)
})

scissorsBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice()
  const playerSelection = "scissors"
  playRound(playerSelection, computerSelection)
  checkForWinner(playerScore, computerScore)
})
