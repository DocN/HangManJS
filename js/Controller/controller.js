var words = []; 
var tenWords = [];
const NUMBER_OF_WORDS = 10;
const NUMBER_OF_WORDS_TOTAL = 8080;
function button() {
    //repeat for all lettters
    for(let i =0; i < 26; i++) {
        let currentchar = String.fromCharCode('A'.charCodeAt() + i);
        let btn = document.createElement("BUTTON");
        let t = document.createTextNode(currentchar);
        btn.appendChild(t);
        btn.className = "btn btn-primary alphabetbox";
        //grab alphabet frame
        let element = document.getElementById("alphabetFrame");
        //add letter
        element.appendChild(btn);
    }
}

function onLoaded() {
    button();
    getWord();
    readTextFile();
    get10Words();
}

function readTextFile()
{
    let file = "http://localhost/hangyourself/data/words.txt";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                words = allText.split("\n");
            }
        }
    }
    rawFile.send(null);
}

function get10Words() {
    for(let i =0; i < NUMBER_OF_WORDS; i++) {
        let newWord = words[getRandomInt(NUMBER_OF_WORDS_TOTAL)];
        let newDef = definitionAPI(newWord, i);
        let currentWord = new Word(newWord, "");
        tenWords.push(currentWord);
        
    }

    for(let i =0; i < tenWords.length; i++) {

    }
}

function getWord() {
    let fucker = new Word("asdf","asd");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function definitionAPI(word, i) {
    const url = 'https://api.datamuse.com/words?sp=' + word + '&md=d';
    $.get(url, function(data, status){
        console.log(data[0].defs[0]);
        //tenWords[i].description = ;
    });
}

