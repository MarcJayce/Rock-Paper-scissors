function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function getHumanChoice() {
        return prompt("Please enter: Rock, Paper, or Scissors");
    }

    function playRound(humanChoice, computerChoice) {
        // Ties
        if (humanChoice === computerChoice) {
            console.log("Tie");
            return;
        }

        // Human wins
        if (
            (humanChoice === "Scissors" && computerChoice === "Paper") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Rock" && computerChoice === "Scissors")
        ) {
            console.log("You win");
            humanScore++;
            return;
        }

        // Computer wins
        console.log("You lose");
        computerScore++;
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}:`);
        console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
    }

    // Declare the winner
    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, the computer wins this time.");
    } else {
        console.log("It's a tie overall!");
    }
}

// Start the game
playGame();
