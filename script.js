let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const message = document.getElementById("message");
const guessInput = document.getElementById("guess-input");
const submitButton = document.getElementById("submit-button");
const restartButton = document.getElementById("restart-button");
const attemptsDisplay = document.getElementById("attempts");

submitButton.addEventListener("click", function() {
    const userGuess = Number(guessInput.value);

    if( !userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "please enter number from 1 to 100";
        return;
    }
    attempts++;
    attemptsDisplay.textContent = attempts;

    if(userGuess === randomNumber){
        message.textContent = `congrats you guessed the number ${randomNumber}`;
        submitButton.style.display = "none";
        restartButton.style.display = "inline-block";
    } else if (userGuess < randomNumber) {
        message.textContent = "random number is greater that your guess";
    } else{
        message.textContent = "random number is less that your guess";
    }

    guessInput.value = "";
})

restartButton.addEventListener("click", function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0
    attemptsDisplay.textContent = attempts;
    message.textContent = "please enter number from 1 to 100";
    submitButton.style.display = "inline-box";
    restartButton.style.display = "none";
    guessInput.value = "";
})