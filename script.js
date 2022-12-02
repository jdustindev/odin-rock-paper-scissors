function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choiceNumber = Math.floor(Math.random() * 3);
    return choices[choiceNumber];
}

function playRound(playerSelection, computerSelection) {
    // compare strings (lowercased) to determine winner (Rock > Scissors > Paper > Rock)
    let winner = null;

    switch (playerSelection.toLowerCase()) {
        case 'rock':
            switch (computerSelection.toLowerCase()) {
                case 'rock':
                    winner = 'tie';
                    break;
                case 'paper':
                    winner = 'computer';
                    break;
                case 'scissors':
                    winner = 'player';
                    break;
            }
            break;
        
        case 'paper':
            switch (computerSelection.toLowerCase()) {
                case 'rock':
                    winner = 'player';
                    break;
                case 'paper':
                    winner = 'tie';
                    break;
                case 'scissors':
                    winner = 'computer';
                    break;
            }
            break;
        
        case 'scissors':
            switch (computerSelection.toLowerCase()) {
                case 'rock':
                    winner = 'computer';
                    break;
                case 'paper':
                    winner = 'player';
                    break;
                case 'scissors':
                    winner = 'tie';
                    break;
            }
            break;
    }

    return winner;
}

function game() {
    console.log("Welcome to ROCK PAPER SCISSORS! Five games will be played to determine a winner.")

    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {
        let playerInput = prompt("Please choose Rock, Paper, or Scissors: ", '')
        if (playerInput === null) {
            return;
        }
        let playerChoice = playerInput.toLowerCase();
        while (playerChoice != 'rock' && playerChoice != 'scissors' && playerChoice != 'paper') {
            playerInput = prompt("Invalid input. Please input Rock, Paper, or Scissors.")
            playerChoice = playerInput.toLowerCase();
        }
        const computerSelection = getComputerChoice()

        const winner = playRound(playerChoice, computerSelection);
        switch(winner) {
            case 'player':
                console.log(`You Win! ${playerChoice} beats ${computerSelection}!`);
                playerScore++;
                break;
            case 'computer':
                console.log(`You Lose! ${computerSelection} beats ${playerChoice}!`);
                computerScore++;
                break;
            case 'tie':
                console.log(`It's a tie! You both picked ${playerChoice}!`);
                ties++;
                break;
            default:
                console.log('Error: invalid winner');
        }
    }
    if (playerScore > computerScore) {
        console.log(`YOU WIN THE GAME! Player: ${playerScore}, Computer: ${computerScore}.`);
    } else if (computerScore > playerScore) {
        console.log(`YOU LOSE THE GAME! Player: ${playerScore}, Computer: ${computerScore}.`);
    } else {
        console.log(`It's a tie! Player: ${playerScore}, Computer: ${computerScore}.`)
    }
}

game();
