let playerScore = 0;
let computerScore = 0;
let ties = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choiceNumber = Math.floor(Math.random() * 3);
    return choices[choiceNumber];
}

const rpsButtons = document.querySelectorAll(".rps-button");
const resultsDiv = document.querySelector('#results');
resultsDiv.id = 'results';
const playerDiv = document.createElement('div');
playerDiv.id = 'player';
const computerDiv = document.createElement('div');
computerDiv.id = 'computer';
const winnerDiv = document.createElement('div');
winnerDiv.id = 'winner';
const gameWinnerDiv = document.createElement('div');
gameWinnerDiv.id = 'gameWinner';
resultsDiv.appendChild(playerDiv);
resultsDiv.appendChild(computerDiv);
resultsDiv.appendChild(winnerDiv);
resultsDiv.appendChild(gameWinnerDiv);

function setScore(winner) {
    switch (winner) {
        case 'player':
            playerScore++;
            break;
        case 'computer':
            computerScore++;
            break;
        case 'tie':
            ties++;
            break;
    }
}

function displayWinner() {
    if (playerScore + computerScore + ties >= 5) {
        let gameWinner;
        if (playerScore > computerScore) {
            gameWinner = 'Player';
        } else if (computerScore > playerScore) {
            gameWinner = 'Computer';
        } else {
            gameWinner = 'Tie. No winner';
        }
        gameWinnerDiv.textContent = `GAME FINISHED! Player: ${playerScore} -
            Computer: ${computerScore} - Ties: ${ties} - WINNER: ${gameWinner}!`;
    }
}

rpsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const winner = playRound(button.id, computerChoice);
        playerDiv.textContent = `Player: ${button.id}`;
        computerDiv.textContent = `Computer: ${computerChoice}`;
        winnerDiv.textContent = `Winner: ${winner}`;
        setScore(winner);
        displayWinner();
    });
});

function playRound(playerSelection, computerSelection) {
    // compare strings (lowercased) to determine winner (Rock > Scissors > Paper > Rock)
    let winner = null;

    console.log(playerSelection, computerSelection);

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
