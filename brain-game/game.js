//const choices = document.getElementsByClassName(".choices");
const button = document.getElementById("btn");
let intervalId = null;

function start(){
     if (intervalId) {
        // If interval is running, stop it
        clearInterval(intervalId);
        intervalId = null;
        button.textContent = "Start"; // update button text
    } else {
        // If interval is not running, start it
        intervalId = setInterval(playGame, 1000);
        button.textContent = "Stop"; // update button text
    }
}

const choices = ["rock", "scissors", "paper"]
function playGame(){
    const first = document.getElementById("first");
    const second = document.getElementById("second");


    const firstChoice = choices[Math.floor(Math.random() * 3)];
    const secondChoice = choices[Math.floor(Math.random() * 3)];

    const emojis = {
    rock: "✊",
    scissors: "✌️",
    paper: "✋"
}

    first.textContent = emojis[firstChoice];
    second.textContent = emojis[secondChoice];

}
button.addEventListener("click", start);
document.addEventListener("keydown", event => {
        if(event.key === "Enter"){
            start();
        }
    });

