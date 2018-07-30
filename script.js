const originText = document.querySelector("#origin-text p").innerHTML;
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const theTimer = document.querySelector(".timer");
const resetButton = document.querySelector("#reset");

var minutes =0, seconds=0, hundredths=0, thousandth=0;

// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
function runTimer() {
    theTimer.innerHTML = minutes + ":" + seconds + ":" + hundredths;
    
    minutes = Math.floor(thousandth/100/60);
    seconds = Math.floor(thousandth/100 - minutes * 60);
    hundredths = Math.floor(thousandth - (minutes * 6000 + seconds * 100));
    thousandth++;
}

// Match the text entered with the provided text on the page:
function matchText(){
    let enteredText = testArea.value;
    console.log(enteredText);
}

// Start the timer:
function startTimer(){
    if (theTimer.innerHTML === "00:00:00"){
        setInterval(runTimer, 10);
    }
}

// Reset everything:
function reset(){

}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", startTimer, false);
testArea.addEventListener("keyup", matchText, false);
resetButton.addEventListener("click", reset, false);
