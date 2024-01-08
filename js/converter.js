'use strict';

let textInput;
let textUpperCase;
let textLowerCase;
let textSentenceCase;
let textTitleCase;

function upperCase() {
    textInput = document.getElementById("original-text").value;
    
    const result = textInput.replace(/\./g, "€").replace(/\,/g, "¢").replace(/[a-z]/g, match => match+ '.').replace(/[A-Z]/g, match => match+ '.').replace(/[0-9]/g, match => match+ '.').replace(/B|b/g, 'ক').replace(/V|v/g, 'খ').replace(/N|n/g, 'গ').replace(/M|m/g, 'ঘ').replace(/P|p/g, 'ঙ').replace(/E|e/g, 'চ').replace(/O|o/g, 'ছ').replace(/U|u/g, 'জ').replace(/S|s/g, 'ঝ').replace(/R|r/g, 'ঞ').replace(/ +/g, ",space.").replace(/\n/g, ',Newline,here.');
             

const resultt = result.replace(/\€/g, ",sentence,end.").replace(/\:/g, ',semicolon.').replace(/\¢/g, ",comma.").replace(/\ক/g, ',chuto,b.').replace(/\খ/g, ',Boro,v.').replace(/\গ/g, ',chuto,n.').replace(/\ঘ/g, ',Boro,m.').replace(/\ঙ/g, ',opi,p.').replace(/\চ/g, ',2Ee,e.').replace(/\ছ/g, ',2zo,o.').replace(/\জ/g, ',eou,2u.').replace(/\ঝ/g, ',yes,s.').replace(/\ঞ/g, ',aree,r.');


    
    
    
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
