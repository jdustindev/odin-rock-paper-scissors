function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choiceNumber = Math.floor(Math.random() * 3);
    return choices[choiceNumber];
}