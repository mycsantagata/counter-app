document.addEventListener('DOMContentLoaded', function() {

    const counter = document.getElementById("counter-display");
    const incrementBtn = document.getElementById("increment-btn");
    const decrementBtn = document.getElementById("decrement-btn");
    const resetBtn = document.getElementById("reset-btn");

    let counterValue = 0;

    function updateCounterDisplay() {
        counter.textContent = counterValue;
    }

    function incrementCounter(){
        counterValue++;
        updateCounterDisplay();
    }

    function decrementCounter(){
        counterValue--;
        updateCounterDisplay();
    }

    function resetCounter(){
        counterValue = 0;
        updateCounterDisplay();
    }

    incrementBtn.addEventListener("click",incrementCounter);
    decrementBtn.addEventListener("click",decrementCounter);
    resetBtn.addEventListener("click",resetCounter);

});