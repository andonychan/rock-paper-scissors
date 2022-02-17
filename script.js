var myArray = ['Rock', 'Paper', 'Scissors'];

let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    const computerRandom = Math.floor(Math.random() * myArray.length);
    return myArray[computerRandom];
}

function singleRound() {

    const playerSelection = prompt('Rock, Paper or Scissors?').toUpperCase();

    if (['ROCK', 'PAPER', 'SCISSORS'].indexOf(playerSelection) < 0) {
        alert('Wrong input!');
        return;
    }
    const computerSelection = computerPlay().toUpperCase();

    if (playerSelection === computerSelection) {
        const result = 'Draw! | Player: ' + playerScore + ' | Computer: ' + computerScore;
        //console.log('Computer: ' + computerSelection);
        //console.log('Player: ' + playerSelection);
        return result;
    }
    else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || (playerSelection === 'PAPER' && computerSelection === 'ROCK')) {
        playerScore += 1;
        const result = 'You win! | Player: ' + playerScore + ' | Computer: ' + computerScore;
        //console.log('Computer: ' + computerSelection);
        //console.log('Player: ' + playerSelection);
        return result;
    }
    else {
        computerScore += 1;
        const result = 'You lose! | Player: ' + playerScore + ' | Computer: ' + computerScore;
        //console.log('Computer: ' + computerSelection);
        //console.log('Player: ' + playerSelection);
        return result;
    }
}

function game() {

    for (let i=0; i<Infinity; i++) {
        console.log(singleRound());

        if (playerScore == 5) {
            console.log('You won!');
            break;
        }

        else if (computerScore == 5) {
            console.log('You lost!');
            break;
        }
    }

}
