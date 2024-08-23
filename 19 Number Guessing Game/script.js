const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const resultText = document.getElementById("resultText");
const guessTimes = document.getElementById("guessTimes");
const minNumber = 1;
const maxNumber = 100;
let guessCount = 0;
const computerAnswer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

// main function
submitBtn.onclick = function() {
    let number = userInput.value;
    number = Number(number);

    if (isNaN(number)) {
        resultText.textContent = "Please enter a valid number";
    } else if (number < minNumber || number > maxNumber) {
        resultText.textContent = "Please enter a number between 1 and 100";
    } else {
        guessCount++;
        if (number < computerAnswer) {
            resultText.textContent = "Your guess is too low! Try again";
        } else if (number > computerAnswer) {
            resultText.textContent = "Your guess is too high! Try again";
        } else {
            resultText.textContent = `Correct! The number is ${computerAnswer}`;
            guessTimes.textContent = `It took you ${guessCount} guesses`;
            // Optionally, disable further input after correct guess
            userInput.disabled = true;
            submitBtn.disabled = true;
        }
    }
}
