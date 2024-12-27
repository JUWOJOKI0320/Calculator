

function scrollTextbox() {
    text.scrollLeft = text.scrollWidth;
}

function solve() {
    const text = document.getElementById('text');
    const parts = text.value.match(/(\d+|\+|\/|\-|\x)/g);

    // Perform multiplication and division first
    for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i];
        const operand = parseFloat(parts[i + 1]); // Using parseFloat for decimal numbers

        if (operator === 'x') {
            parts[i - 1] *= operand; // Perform multiplication
            parts.splice(i, 2); // Remove the operator and operand from the array
            i -= 2; // Adjust the index
        } else if (operator === '/') {
            if (operand !== 0) {
                parts[i - 1] /= operand; // Perform division
                parts.splice(i, 2); // Remove the operator and operand from the array
                i -= 2; // Adjust the index
            } else {
                alert("Error: Division by zero!"); // Handling division by zero error
                return; // Exit the function
            }
        }
    }

    // Perform addition and subtraction
    let result = parseFloat(parts[0]);
    for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i];
        const operand = parseFloat(parts[i + 1]); // Using parseFloat for decimal numbers

        if (operator === '+') {
            result += operand;
        } else if (operator === '-') {
            result -= operand;
        }
    }

    text.value = result;
}

function pump(){
    const button = event.target; // Get the button element that was clicked
    button.classList.add("animated");

    // Remove the animation class after the animation completes
    setTimeout(function() {
        button.classList.remove("animated");
    }, 500); // Adjust the time to match the animation duration
}

function insert(value) {
    const text = document.getElementById('text');
    pump();
    text.style.color = "white";
    text.value += value;
    scrollTextbox();
}


function allclear() {
    const text = document.getElementById('text');
    pump();
    text.value = text.value.slice(0, 0);
}

function ce() {
    const text = document.getElementById('text');
    pump();
    text.value = text.value.slice(0, 0);
}

function c() {
    const text = document.getElementById('text');
    pump();
    text.value = text.value.slice(0, 0);
}

function back() {
    const text = document.getElementById('text');
    pump();
    text.value = text.value.slice(0, -1);
}

document.addEventListener('keydown', function(event) {
const text = document.getElementById('text');
    if(event.keyCode >47 && event.keyCode <91 && !isNaN(event.key)){
        text.value += event.key}
    else if(event.key === 'Backspace'){
        text.value = text.value.slice(0, -1);
    }
    else if(event.key === '-'){
        text.value += '-';
    }
    else if(event.key === '/'){
        text.value += '/';
    }
    else if(event.keyCode === 88){
        text.value += 'x';
    }
    else if(event.key === '+'){
        text.value += '+';
    }
    else if(event.key === '=' || event.key === 'Enter'){
        solve()
    }
});