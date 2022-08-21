'use strict';

let textInput;
let textUpperCase;
let textLowerCase;


function upperCase() {
textInput = document.getElementById("original-text").value;
textUpperCase = textInput.toUpperCase();
document.getElementById("original-text").value = textUpperCase;
}

function lowerCase() {
textInput = document.getElementById("original-text").value;
textLowerCase = textInput.toLowerCase();
document.getElementById("original-text").value = textLowerCase;
}