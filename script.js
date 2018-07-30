const originText = document.querySelector("#origin-text p").innerHTML;
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const theTimer = document.querySelector(".timer");
const resetButton = document.querySelector("#reset");


// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
function timer() {

}

// Match the text entered with the provided text on the page:
function matchText(){
    let enteredText = testArea.value;
    console.log(enteredText);
}

// Start the timer:
function startTimer(){

}

// Reset everything:
function reset(){

}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", startTimer, false);
testArea.addEventListener("keyup", matchText, false);
resetButton.addEventListener("click", reset, false);
