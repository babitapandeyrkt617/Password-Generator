const passwordField = document.getElementById('password');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy'); 
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const lengthInput = document.getElementById('length');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=-[]{}|;:,.<>?/';

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyToClipboard); 

function generatePassword() {
    const length = +lengthInput.value;
    let characters = '';
    if (uppercaseCheckbox.checked) characters += uppercaseLetters;
    if (lowercaseCheckbox.checked) characters += lowercaseLetters;
    if (numbersCheckbox.checked) characters += numbers;
    if (symbolsCheckbox.checked) characters += symbols;
    passwordField.value = createPassword(length, characters);
}

function createPassword(length, characters) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function copyToClipboard() {
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}
