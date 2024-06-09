let inputElement = document.getElementById('input');
let outputElement = document.getElementById('output');

function appendValue(value) {
    if (inputElement.innerText === '0') {
        inputElement.innerText = '';
    }
    inputElement.innerText += value;
}

function deleteLast() {
    inputElement.innerText = inputElement.innerText.slice(0, -1);
    if (inputElement.innerText === '') {
        inputElement.innerText = '0';
    }
}

function clearDisplay() {
    inputElement.innerText = '0';
    outputElement.innerText = '0';
}

function calculateResult() {
    try {
        let input = inputElement.innerText;
        // Replace √ with Math.sqrt and handle other operations
        input = input.replace(/√/g, 'Math.sqrt');
        input = input.replace(/%/g, '/100');
        input = input.replace(/±/g, '-');
        let result = eval(input);
        outputElement.innerText = result;
    } catch (error) {
        outputElement.innerText = 'Error';
    }
}