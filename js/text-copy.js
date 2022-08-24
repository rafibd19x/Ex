'use strict';

let textToCopy;

function copiedReturnToNormal() {
    document.getElementById("text-copied-message").style.visibility = "hidden";
}

function textCopier() {
    textToCopy = document.getElementById("original-text").value;
    navigator.clipboard.writeText(textToCopy);
    document.getElementById("text-copied-message").style.visibility = "visible";
    setTimeout(copiedReturnToNormal, 2000);
}