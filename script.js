const originText = document.querySelector("#origin-text p").innerHTML;
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const theTimer = document.querySelector(".timer");
const resetButton = document.querySelector("#reset");

var minutes =0, seconds=0, hundredths=0, thousandth=0;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
    if (time <= 9){
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    theTimer.innerHTML = leadingZero(minutes) + ":" + leadingZero(seconds) + ":" + leadingZero(hundredths);
    
    minutes = Math.floor(thousandth/6000);
    seconds = Math.floor(thousandth/100 - minutes * 60);
    hundredths = Math.floor(thousandth - (minutes * 6000 + seconds * 100));
    thousandth++;
}

// Match the text entered with the provided text on the page:
function matchText(){
    let enteredText = testArea.value;
    let originTextPortion = originText.substring(0, enteredText.length);
    // display blue border if enteredText correct
    if (enteredText === originText){    
        testWrapper.setAttribute("style", "border-color: lightgreen");
    }
    // display orange border if enteredText wrong
    else if(enteredText === originTextPortion){
        testWrapper.setAttribute("style", "border-color: #65CCf3");
    }
    // display green border if entered Text exactly match
    else{
        testWrapper.setAttribute("style", "border-color: #E95D0F");
    }
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
