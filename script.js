let count = 0;

const display = document.getElementById("count");
const status = document.getElementById("status");

// Update counter display
function updateCounter() {

    display.innerText = count;

    if (count === 0) {
        display.style.color = "#32e6dc";
        status.innerText = "● ZERO STATE";
    } else {
        display.style.color = "#00d99a";
        status.innerText = "● COUNT IS POSITIVE";
    }
}

// Increase counter
document.getElementById("increase").addEventListener("click", function() {
    count++;
    updateCounter();
});

// Decrease counter
document.getElementById("decrease").addEventListener("click", function() {

    if (count > 0) {
        count--;
    }

    updateCounter();
});

// Increase by 5
document.getElementById("addFive").addEventListener("click", function() {
    count += 5;
    updateCounter();
});

// Reset counter
document.getElementById("reset").addEventListener("click", function() {
    count = 0;
    updateCounter();
});