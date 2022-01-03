// variables //

let options = ['ROCK', 'PAPER', 'SCISSORS'];
let computerChoice; 
let playerChoice; 
let playerName;
let gameNumber = 0;
let computerWinCount = 0;
let playerWinCount = 0;

// function list //
function welcome() {
    playerName = prompt('Welcome to ROCK, PAPER, SCISSORS! What is your name??');
    playerName = playerName.toUpperCase();
    console.log(`Hi ${playerName}! Lets begin!!`)
}

function playerPlay() {
    playerChoice = prompt('What is your choice? Rock, Paper, or Scissors??');
    playerChoice = playerChoice.toUpperCase();
    if (playerChoice === 'ROCK' || playerChoice === 'PAPER' || playerChoice === 'SCISSORS') {
        console.log(`${playerChoice} is ${playerName}'s choice`);
    } else {
        console.log(`INVALID CHOICE of ${playerChoice} -- TRY AGAIN`);
        playerPlay();
    }
};

function computerPlay() {
   computerChoice = options[Math.floor(Math.random()*options.length)]; 
   console.log(`${computerChoice} is the computer choice`);
};

function playRound(computerChoice, playerChoice) {
    if (computerChoice ===  playerChoice) {
        console.log(`Its a time game! You both chose ${playerChoice}`);
        ++gameNumber;
        console.log(`Game Number: ${gameNumber}`);
        console.log(`${playerName}'s Wins: ${playerWinCount}`);
        console.log(`Computer's Wins: ${computerWinCount}`);
    }
    else if ((computerChoice === 'ROCK' && playerChoice === 'SCISSORS') ||
            (computerChoice === 'PAPER' && playerChoice === 'ROCK') ||
            (computerChoice === 'SCISSORS' && playerChoice === 'PAPER')) {
                console.log(`Computer WINS!! ${computerChoice} beats ${playerChoice}`);
                ++gameNumber;
                ++computerWinCount;
                console.log(`Game Number: ${gameNumber}`);
                console.log(`${playerName}'s Wins: ${playerWinCount}`);
                console.log(`Computer's Wins: ${computerWinCount}`);
            }
    else {
        console.log(`${playerName} wins!! ${playerChoice} beats ${computerChoice}`);
        ++gameNumber;
        ++playerWinCount;
        console.log(`Game Number: ${gameNumber}`);
        console.log(`${playerName}'s Wins: ${playerWinCount}`);
        console.log(`Computer's Wins: ${computerWinCount}`);
    }
};


function game() {
    if (gameNumber < 5) {
        playerPlay();
        computerPlay();
        playRound(computerChoice, playerChoice);
        game();
    } else {
        console.log(`5 games reached... `);
        if (playerWinCount > computerWinCount) {
            console.log(`${playerName} WINS!!! CONGRATS!!`)
        } else if (computerWinCount > playerWinCount) {
            console.log(`${playerName} loses... better luck next time!`)
        } else {
            console.log('Its a tie game! An even match up!')
        }
    }

}

// main function calling all others //

function mainFunction() {
    welcome();
    playerPlay();
    computerPlay();
    playRound(computerChoice, playerChoice);
    game();
};


// function calls //
mainFunction();

