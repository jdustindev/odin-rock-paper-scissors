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

    console.log(winner);

    let winMessage;

    switch(winner) {
        case 'player':
            winMessage = `You Win! ${playerSelection} beats ${computerSelection}!`
            break;
        case 'computer':
            winMessage = `You Lose! ${computerSelection} beats ${playerSelection}!`
            break;
        case 'tie':
            winMessage = `It's a tie! You both picked ${playerSelection}!`;
            break;
        default:
            winMessage = "Error!"
    }

    return winMessage;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));