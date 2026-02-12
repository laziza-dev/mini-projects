const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    console.log("Clicked:", playerChoice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";


    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "rock": 
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE"; 
                break;
            case "paper": 
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE"; 
                break;
            case "scissors": 
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE"; 
                break;
        }
    }
     const emojis = {
        rock: "✊",
        scissors: "✌️",
        paper: "✋"
    }

    playerDisplay.textContent = `Player: ${emojis[playerChoice]}`;
    computerDisplay.textContent = `Computer: ${emojis[computerChoice]}`;
    resultDisplay.textContent = result; 

    resultDisplay.classList.remove("green", "red");


    switch(result){
        case "YOU WIN":
             resultDisplay.classList.add("green");
             playerScore++;
             playerScoreDisplay.textContent = playerScore;
             break;
        case "YOU LOSE":
             resultDisplay.classList.add("red");
             computerScore++;
             computerScoreDisplay.textContent = computerScore;
             break;
    }
    console.log(computerScore);
}