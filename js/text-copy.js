'use strict';

let textToCopy;

function textCopier() {
    textToCopy = document.getElementById("original-text").value;
    navigator.clipboard.writeText(textToCopy);
}