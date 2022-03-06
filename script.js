var myArray = ['Rock', 'Paper', 'Scissors'];
let computerSelection;
let computerScore = 0;
let playerScore = 0;
//let winner = '';
let buttons = document.querySelectorAll('.button');

const container = document.querySelector('#container');

const myScore = document.createElement('div');
myScore.classList.add('myScore');
container.appendChild(myScore);

const compScore = document.createElement('div');
compScore.classList.add('compScore');
container.appendChild(compScore);

const winner = document.createElement('div');
winner.classList.add('winner');
container.appendChild(winner);

function computerPlay() {
    const computerRandom = Math.floor(Math.random() * myArray.length);
    return myArray[computerRandom].toUpperCase();
}

buttons.forEach((test) => {
    test.addEventListener('click', () => {
        playerSelection = test.id.toUpperCase();
        singleRound(playerSelection, computerSelection);
    })
})

function singleRound(playerSelection, computerSelection) {

    computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        const result = 'Draw! | Player: ' + playerScore + ' | Computer: ' + computerScore;
    }
    else if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || (playerSelection === 'PAPER' && computerSelection === 'ROCK')) {
        playerScore += 1;
        myScore.textContent = 'Your score: ' + playerScore;
        }
    else {
        computerScore += 1;
        compScore.textContent = 'Computer score: ' + computerScore;
    }

    scorecheck();
}

function scorecheck() {

            if (playerScore == 5) {
                console.log('You won!');
                winner.textContent = 'You won!'
            }

            else if (computerScore == 5) {
                console.log('You lost!');
                winner.textContent = 'You lost!'
            }

}
