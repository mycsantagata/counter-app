document.addEventListener('DOMContentLoaded', function() {

    const counterContainer = document.getElementById("counter-container");
    const buttonContainer = document.getElementById("button-container");

    let counterValue = 0;
    const counterDisplay = document.createElement('h2');
    counterDisplay.id = 'counter-display';
    counterDisplay.textContent = counterValue;
    counterContainer.appendChild(counterDisplay);

    function createButton(text, className, onClick) {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = className;
        button.addEventListener('click', onClick);
        return button;
    }

    function updateCounterDisplay() {
        counterDisplay.textContent = counterValue;
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

    buttonContainer.appendChild(createButton('-', 'btn btn-primary mr-2', decrementCounter));
    buttonContainer.appendChild(createButton('Reset', 'btn btn-primary mx-2', resetCounter));
    buttonContainer.appendChild(createButton('+', 'btn btn-primary ml-2', incrementCounter));

});