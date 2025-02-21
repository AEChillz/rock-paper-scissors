let choices = ["rock", "paper", "scissors"];
function getComputerChoice () { 
//get random index from array
let index = Math.floor(Math.random() * choices.length);
//select random value from array
let result = choices[index];
return result;
}



function getHumanChoice () {
//get user input
  let humanPrompt = window.prompt("choose rock paper or scissors");
  return humanPrompt; 
}



const humanWon = "you have the highest score, you win!";
const computerWon = "compute has the highest score, computer wins!"
const humanWin = "human wins";
const computerWin = "computer wins";
const noWin = "no one wins.";

let humanScore = 0;
let computerScore = 0;
function playGame () {
 const playRounds = function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock") {
   console.log("both chose rock " + noWin + "");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("computer chose paper " + computerWin + "");
    computerScore += 1;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("computer chose scissors " + humanWin + "" );
    humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("computer chose rock " + humanWin + "");
    humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("both chose paper " + noWin + "" );
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("computer chose scissors " + computerWin + "");
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("computer chose rock " + computerWin + "" );
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("computer chose paper " + humanWin + "");
    humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("both chose scissors " + noWin + "" );
  }
  }  

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRounds(humanSelection, computerSelection); 


}
for (let i = 0; i < 5; i++) {
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
  playGame(i);
}
playGame();


let humanFinalScore =  humanScore;
let computerFinalScore = computerScore;

function gameWinner () {
  if (humanFinalScore >  computerFinalScore) {
    console.log("you win!");
  } else if (humanFinalScore < computerFinalScore) {
    console.log("computer wins!")
  } else {
   console.log("it's a tie!");
 }
}

gameWinner();


//PROBLEM: Loop runs infinitely, and cannot exit even using break.
//SOLUTION: do not run loop inside func, loop it outside and also loop playGame, not playRounds.

//PROBLEM: the score that is printed will always be 0 or 1, because the function and score resets every iteration.
//SOLUTION: log the scores in the loop, also use += instead of ++ to reassign score every time.







//array in both uppercase and lowercase
//const upperCase = choices.map(map => map.toUpperCase());
//const lowerCase = choices.map(map => map.toLowerCase());



