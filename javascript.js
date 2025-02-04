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

let humanScore = 0;
let computerScore = 0;

const humanWin = "human wins";
const computerWin = "computer wins";
const noWin = "no one wins.";
const humanWon = "you have the highest score, you win!";
const computerWon = "compute has the highest score, computer wins!"


function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock") {
   console.log("both chose rock " + noWin + "");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("computer chose paper " + computerWin + "");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("computer chose scissors " + humanWin + "" );
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("computer chose rock " + humanWin + "");
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("both chose paper" + noWin + "" );
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("computer chose scissors " + computerWin + "");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("computer chose rock " + computerWin + "" );
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("computer chose paper " + humanWin + "");
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("both chose scissors " + noWin + "" );
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("your score is " + humanScore + "");
console.log("computers score is " + computerScore + "");
let rounds = 0;

function playGame () {
   switch (rounds) {
    case 1:
    rounds++
    console.log(rounds)
    break;
    case 2:
    rounds++
    console.log(rounds)
    break;
    case 3:
    rounds++
    console.log(rounds)
    break;
    case 4:
    rounds++
    console.log(rounds)
    break;
    case 5:
    rounds++
    console.log(rounds)
    break;
   }
}




//array in both uppercase and lowercase
//const upperCase = choices.map(map => map.toUpperCase());
//const lowerCase = choices.map(map => map.toLowerCase());



