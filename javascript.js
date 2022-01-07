// variables //

const options = ['ROCK', 'PAPER', 'SCISSORS'];
let computerChoice; 
const playerChoices = document.querySelectorAll('.choice');
let gameNumber = 0;
let computerWinCount = 0;
let playerWinCount = 0;
const scoresDiv = document.getElementById('scoresDiv');
let playerChoice;
const restart = document.getElementById('restartBtn');
const roundsPlayed = document.getElementById('roundsPlayed');
const versusDiv = document.getElementById('versusDiv');
const outcomeDiv = document.getElementById('outcomeDiv');

// functions //


function computerPlay() {
   computerChoice = options[Math.floor(Math.random()*options.length)]; 
   console.log(`${computerChoice} is the computer choice`);
};

function playRound(computerChoice, playerChoice) {
    if (computerChoice ===  playerChoice) {
        console.log(`Its a time game! You both chose ${playerChoice}`);
        ++gameNumber;
        updateVersusDivTie();
        updateOutcomeDivTie();
        console.log(`Game Number: ${gameNumber}`);
        console.log(`Player Wins: ${playerWinCount}`);
        console.log(`Computer's Wins: ${computerWinCount}`);
    }
    else if ((computerChoice === 'ROCK' && playerChoice === 'SCISSORS') ||
            (computerChoice === 'PAPER' && playerChoice === 'ROCK') ||
            (computerChoice === 'SCISSORS' && playerChoice === 'PAPER')) {
                console.log(`Computer WINS!! ${computerChoice} beats ${playerChoice}`);
                ++gameNumber;
                ++computerWinCount;
                updateVersusDivLose();
                updateOutcomeDivLose();
                console.log(`Game Number: ${gameNumber}`);
                console.log(`Player Wins: ${playerWinCount}`);
                console.log(`Computer's Wins: ${computerWinCount}`);
            }
    else {
        console.log(`Player wins!! ${playerChoice} beats ${computerChoice}`);
        ++gameNumber;
        ++playerWinCount;
        updateVersusDivWin();
        updateOutcomeDivWin();
        console.log(`Game Number: ${gameNumber}`);
        console.log(`Player Wins: ${playerWinCount}`);
        console.log(`Computer's Wins: ${computerWinCount}`);
    }
};


function game() {
    if (playerWinCount === 5 ){
        outcomeDiv.innerHTML = `
        <h2 id='winOrLose' style='color:blue'>YOU WIN!! CONGRATS!!</h2>
        <h3 id='matchup'>Click the NEW GAME button to play again!</h3>
        `;
     console.log('GAME OVER'); 
     playerChoices.forEach(choice => choice.removeEventListener('click', mainFunction));
     restart.innerHTML = 'NEW GAME';
    } else if (computerWinCount === 5) {
        outcomeDiv.innerHTML = `
        <h2 id='winOrLose' style='color:red'>Sorry... You LOST!</h2>
        <h3 id='matchup'>Click the NEW GAME button to play again!</h3>
        `;
     console.log('GAME OVER'); 
     playerChoices.forEach(choice => choice.removeEventListener('click', mainFunction));
     restart.innerHTML = 'NEW GAME';
    }

}


  // Show score //
  function showScore() {
      if (scoresDiv === null) {
      } else {
        playerScore.textContent = `
        Player Score: ${playerWinCount}
        `;
        computerScore.textContent = `
        Computer Score: ${computerWinCount}
        `;
        roundsPlayed.innerHTML = `
        Rounds Played: ${gameNumber}`;
      }
  }

  function convertPlayerChoice() {
      playerChoice = playerChoice.toUpperCase();
  };


  function restartGame() {
      playerWinCount = 0;
      computerWinCount = 0;
      gameNumber = 0;
      playerScore.textContent = `
        Player Score: ${playerWinCount}
        `;
        computerScore.textContent = `
        Computer Score: ${computerWinCount}
        `;
    roundsPlayed.innerHTML = `Rounds Played: ${gameNumber}`;
    playerChoices.forEach(choice => choice.addEventListener('click', mainFunction));
    versusDiv.innerHTML = `
    <div class="fas fa-hand-${playerChoice.toLowerCase()} fa-7x" id='yourChoice'></div>
                <div id='versus'>
                    <h3>
                        <span style='color: red'>V</span>
                        <span style='color: white'>E</span>
                        <span style='color: blue'>R</span>
                        <span style='color: red'>S</span>
                        <span style='color: white'>U</span>
                        <span style='color: blue'>S</span>
                    </h3>
                </div>
                <div class="fas fa-hand-${computerChoice.toLowerCase()} fa-7x" id='computerChoice'></div>
    `;
    outcomeDiv.innerHTML = `
    <h2 id='winOrLose'>First to FIVE wins!!</h2>
    <h3 id='matchup'>Good Luck!!</h3>
    `;
    restartGameAuto();

  }

  function updateVersusDivTie() {
    versusDiv.innerHTML = `
    <div class="fas fa-hand-${playerChoice.toLowerCase()} fa-7x" id='yourChoice'></div>
                <div id='versus'>
                    <h3>
                        <span style='color: red'>V</span>
                        <span style='color: white'>E</span>
                        <span style='color: blue'>R</span>
                        <span style='color: red'>S</span>
                        <span style='color: white'>U</span>
                        <span style='color: blue'>S</span>
                    </h3>
                </div>
                <div class="fas fa-hand-${computerChoice.toLowerCase()} fa-7x" id='computerChoice'></div>
    `;
}

  function updateVersusDivWin() {
        versusDiv.innerHTML = `
        <div class="fas fa-hand-${playerChoice.toLowerCase()} fa-7x" id='yourChoice' style='color:blue'></div>
                    <div id='versus'>
                        <h3>
                            <span style='color: red'>V</span>
                            <span style='color: white'>E</span>
                            <span style='color: blue'>R</span>
                            <span style='color: red'>S</span>
                            <span style='color: white'>U</span>
                            <span style='color: blue'>S</span>
                        </h3>
                    </div>
                    <div class="fas fa-hand-${computerChoice.toLowerCase()} fa-7x" id='computerChoice'></div>
        `;
  }


  function updateVersusDivLose() {
    versusDiv.innerHTML = `
    <div class="fas fa-hand-${playerChoice.toLowerCase()} fa-7x" id='yourChoice'></div>
                <div id='versus'>
                    <h3>
                        <span style='color: red'>V</span>
                        <span style='color: white'>E</span>
                        <span style='color: blue'>R</span>
                        <span style='color: red'>S</span>
                        <span style='color: white'>U</span>
                        <span style='color: blue'>S</span>
                    </h3>
                </div>
                <div class="fas fa-hand-${computerChoice.toLowerCase()} fa-7x" id='computerChoice' style='color:red'></div>
    `;
}

  function updateOutcomeDivWin() {
    outcomeDiv.innerHTML = `
    <h2 id='winOrLose'>Nice choice! You won the round!</h2>
    <h3 id='matchup'>${playerChoice} beats ${computerChoice}</h3>
    `
  }

  function updateOutcomeDivLose() {
    outcomeDiv.innerHTML = `
    <h2 id='winOrLose'>Oh no! You lost the round!</h2>
    <h3 id='matchup'>${computerChoice} beats ${playerChoice}</h3>
    `;

    }

    function updateOutcomeDivTie() {
        outcomeDiv.innerHTML = `
        <h2 id='winOrLose'>Its a tie! Keep trying!</h2>
        <h3 id='matchup'>You can do it!</h3>
        `;
    
        }

// main function calling all others //

function mainFunction(e) {
 //   restart.innerHTML = 'Restart Game';
    playerChoice = e.target.id;
    convertPlayerChoice();
    console.log(`player choice: ${playerChoice}`);
    computerPlay();
    playRound(computerChoice, playerChoice);
    showScore();
    game();
};


  // Event listeners
playerChoices.forEach(choice => choice.addEventListener('click', mainFunction));
restart.addEventListener('click', restartGame);

// auto function 

function restartGameAuto() {
    restart.innerHTML = 'Restart Game';
}

