'use strict';

let textInput;
let textUpperCase;
let textLowerCase;
let textSentenceCase;
let textTitleCase;

function upperCase() {
    textInput = document.getElementById("original-text").value;
    
    const result = textInput.replace(/0008./g, "অ").replace(/\(/g, "আ").replace(/\)/g, "ই").replace(/\./g, "€").replace(/\,/g, "¢").replace(/[a-z]/g, match => match+ '.').replace(/[A-Z]/g, match => '₹'+match+ '.').replace(/[0-9]/g, match => match+ '.').replace(/B|b/g, 'ক').replace(/V|v/g, 'খ').replace(/N|n/g, 'গ').replace(/M|m/g, 'ঘ').replace(/P|p/g, 'ঙ').replace(/E|e/g, 'চ').replace(/O|o/g, 'ছ').replace(/U|u/g, 'জ').replace(/S|s/g, 'ঝ').replace(/R|r/g, 'ঞ').replace(/ +/g, ",space.").replace(/\n/g, ',Newline.here.');
             

const resultt = result.replace(/\€/g, ",fullstop.").replace(/\:/g, ',semicolon..').replace(/\¢/g, ",comma.").replace(/\ক/g, ',chuto,b.').replace(/\খ/g, ',Boro,v.').replace(/\গ/g, ',chuto,n.').replace(/\ঘ/g, ',Boro,m.').replace(/\ঙ/g, ',phhiie.').replace(/\চ/g, ',yiiiee.').replace(/\ছ/g, ',wo.').replace(/\জ/g, ',yiiuu.').replace(/\ঝ/g, ',ass.').replace(/\ঞ/g, ',arrrerr.').replace(/\₹/g, ',capital.').replace(/\অ/g, ',Answer to the question..Answer to question no..Answer to the question no..Answer to the question no..Answer to  the question no..Answer to  the question no..Answer to  the question no..semicolon..').replace(/\আ/g, ',first braket.').replace(/\ই/g, ',second braket.');

    //

     let newStrxz = resultt.split(/space/g).join("space₹");

let inputArray = newStrxz.split(/₹/);
   let resultArray = [];
   
  
inputArray.forEach((element, index) => {

    if (index % 3 === 2) {
      resultArray.push(element + "\n \n");
    } else {
      resultArray.push(element);
    }
  });

const herex= resultArray.join("")

    //
    
    
    
    //textUpperCase = textInput.toUpperCase();
    document.getElementById("original-text").value = herex;
}

function lowerCase() {
    textInput = document.getElementById("original-text").value;
    //textLowerCase = textInput.toLowerCase();

const inputet = textInput.replace(/\n{2,}/g, '\n').trim()

const arrayy = inputet.split("\n");
const arrayyx = arrayy.shift().split('@');
const group = arrayyx[0].trim();
const numberr = arrayyx[1].trim();
const inpute = arrayy.join('\n');

    
    function transformInput(inpute) {
  let words = inpute.split(/\n/g);
  
  let outpute = words.map((word, index) => ({
       
 word:word,number: index + 1
  }));
 const outputg = outpute.map(item => `${item.word} ${"="+item.number}`).join('\n');
//console.log(outputg)
 return outputg;
}
let outputx = transformInput(inpute);
//console.log(outputx);

   // {"a":"","e":"","g":[],"i":00,"l":0,"m":"বেতন, //মজুরি","mn":"","n":"","p":"","s":"","w":"Wage (ওয়েইজ)"}


const outputex = outputx.split('\n').map(line => {
    const [item1, item2,item3 ] = line.split('=');
      const add1='{"a":"","e":"","g":[],"i":' 
       const add2=',"l":0,"m":"'
       const add3='","mn":"","n":"","p":"","s":"","w":"'
       const add4='"},'
      const numberadd=(numberr )-(-item3)

    return [add1+numberadd+add2+item2+add3+item1+add4]
//.join(', ');
}).join('').slice(0, -1);

//console.log(outputex);

    
    document.getElementById("original-text").value = outputex;
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
