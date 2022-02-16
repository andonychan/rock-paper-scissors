var myArray = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    const computerRandom = Math.floor(Math.random() * myArray.length);
    return myArray[computerRandom];
}

const playerSelection = prompt('Rock, Paper or Scissors?').toUpperCase();
const computerSelection = computerPlay().toUpperCase();

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        const result = 'Draw';
        return result;
    }
    else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || (playerSelection === 'PAPER' && computerSelection === 'ROCK')) {
        const result = 'You win!';
        return result;
    }
    else {
        const result = 'You lose!';
        return result;
    }
}

console.log('computer '+ computerSelection);