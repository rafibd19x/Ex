'use strict';

let textToCopy;
let textCopiedMessage = document.getElementById("text-copied-message");

function copiedReturnToNormal() {
    textCopiedMessage.style.visibility = "hidden";
}

function textCopier() {
    textToCopy = document.getElementById("original-text").value;

    if (textToCopy !== "") {
        navigator.clipboard.writeText(textToCopy);
        textCopiedMessage.innerText = "text copied!";
    } else {
        textCopiedMessage.innerText = "no text to copy";
    }

    textCopiedMessage.style.visibility = "visible";
    setTimeout(copiedReturnToNormal, 2000);
}

function textEraser() {
    document.getElementById("original-text").value = "";
}