function getComputerChoice () { 

let choices = ["rock", "paper", "scissors"];
let index = Math.floor(Math.random() * choices.length);
let result = choices[index];
console.log(result);

}

getComputerChoice();