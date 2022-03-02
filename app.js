const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()

}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    // Draw Condition
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    // Lose Conditions
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'rock beats scissors nerd.'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'paper beats rock nerd.'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'paper beats rock nerd.'
    }
    //Win Conditions
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'Aww crap you won.'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'Really? You won again?'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'Im literally a computer, how are you winning dude.'
    }
    resultDisplay.innerHTML = result
}