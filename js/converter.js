'use strict';

let textInput;
let textUpperCase;
let textLowerCase;
let textSentenceCase;
let textTitleCase;

function upperCase() {
    textInput = document.getElementById("original-text").value;
    
    const result = textInput.replace(/\./g, "€").replace(/\,/g, "¢").replace(/[a-z]/g, match => match+ '.').replace(/[A-Z]/g, match => match+ '.').replace(/[0-9]/g, match => match+ '.').replace(/B|b/g, ',chuto,b.').replace(/V|v/g, ',Boro,v.').replace(/N|n/g, ',chuto,n.').replace(/M|m/g, ',Boro,m.').replace(/P|p/g, ',opi,p.').replace(/E|e/g, ',2Ee,e.').replace(/O|o/g, ',zo,o.').replace(/U|u/g, ',eou,u.').replace(/S|s/g, ',yes,s.').replace(/R|r/g, ',aree,r.').replace(/ +/g, ",space.").replace(/\n/g, ',Newline,here.');
             const resultt = result.replace(/\€/g, ",sentence,end.").replace(/\:/g, ',semicolon.').replace(/\¢/g, ",comma.");

    
    
    
    //textUpperCase = textInput.toUpperCase();
    document.getElementById("original-text").value = resultt;
}

function lowerCase() {
    textInput = document.getElementById("original-text").value;
    textLowerCase = textInput.toLowerCase();
    document.getElementById("original-text").value = textLowerCase;
}

function sentenceCase() {
    textInput = document.getElementById("original-text").value;
    textSentenceCase = textInput.toLowerCase();

    // Remove extra whitespace
    textSentenceCase = textSentenceCase.replace(/\s+/g, ' ').trim();

    // Capitalize after periods
    textSentenceCase = textSentenceCase.split(". ");
    for (var i = 0; i < textSentenceCase.length; i++) {
        textSentenceCase[i] = textSentenceCase[i].charAt(0).toUpperCase() + textSentenceCase[i].slice(1);
    }
    textSentenceCase = textSentenceCase.join(". ");

    // Capitalize after question marks
    textSentenceCase = textSentenceCase.split("? ");
    for (var i = 0; i < textSentenceCase.length; i++) {
        textSentenceCase[i] = textSentenceCase[i].charAt(0).toUpperCase() + textSentenceCase[i].slice(1);
    }
    textSentenceCase = textSentenceCase.join("? ");

    // Capitalize after exclamation points
    textSentenceCase = textSentenceCase.split("! ");
    for (var i = 0; i < textSentenceCase.length; i++) {
        textSentenceCase[i] = textSentenceCase[i].charAt(0).toUpperCase() + textSentenceCase[i].slice(1);
    }
    textSentenceCase = textSentenceCase.join("! ");

    document.getElementById("original-text").value = textSentenceCase;
}

function titleCase() {
    textInput = document.getElementById("original-text").value;
    textTitleCase = textInput.toLowerCase();
    textTitleCase = textTitleCase.split(' ');

    // Capitalize each word
    for (var i = 0; i < textTitleCase.length; i++) {
        textTitleCase[i] = textTitleCase[i].charAt(0).toUpperCase() + textTitleCase[i].slice(1);
    }
    textTitleCase = textTitleCase.join(' ');

    document.getElementById("original-text").value = textTitleCase;
}
