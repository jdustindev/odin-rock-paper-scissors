function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choiceNumber = Math.floor(Math.random() * 3);
    return choices[choiceNumber];
}

const rpsButtons = document.querySelectorAll(".rps-button");
rpsButtons.forEach((button) => {
    console.log(button.id);
    button.addEventListener('click', () => {
        console.log(playRound(button.id, getComputerChoice()));
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
