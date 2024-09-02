let humanScore = 0;
let computerScore = 0;

// Get the computer choice  
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Get the human choice
document.querySelector('.rock').addEventListener('click', () => {
    playRound('rock');
});
document.querySelector('.paper').addEventListener('click', () => {
    playRound('paper');
});
document.querySelector('.scissors').addEventListener('click', () => {
    playRound('scissors');
});

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let messageResult = '';

    // Ties
    if (humanChoice === computerChoice) {   
        messageResult = 'Tie';
    } else if (
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        // Human wins
        messageResult = 'You win';
        humanScore++;
    } else {
        // Computer wins
        messageResult = 'You lose';
        computerScore++;
    }

    // Update result and score
    const resultp = document.querySelector('.result');
    resultp.textContent = `Human choice: ${humanChoice}. Computer choice: ${computerChoice}. ${messageResult}`;

    const scorePo = document.querySelector('.score');
    scorePo.textContent = `Human score: ${humanScore}. Computer score: ${computerScore}`;

    // Game of 5 winner declaration
    if (humanScore === 5) {
        resultp.textContent += " Congratulations! You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        resultp.textContent += " Sorry, the computer won the game.";
        disableButtons();
    }
}

// Disable buttons function
function disableButtons() {
    document.querySelector('.rock').disabled = true;
    document.querySelector('.paper').disabled = true;
    document.querySelector('.scissors').disabled = true;
}

  


