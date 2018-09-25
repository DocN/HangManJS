const userScore = "User Score: ";
var score = 0;

var redX = 0;
var redY = 0;
var blueX = 0;
var blueY = 0;
var gameX = 0;
var gameY = 0;
const heightBut = 50;
const widthBut = 100;

function gainScore() {
    score = score + 1;
    updateScore();
}

function loseScore() {
    score = score - 1;
    updateScore();
}

function updateScore() {
    document.getElementById("score").innerHTML = userScore + score;
}

function updateFrame() {
    var gameframe = document.getElementById('gameframe'); //get #myDiv
    gameX = gameframe.clientWidth;
    gameY = gameframe.clientHeight;
    console.log(gameX + " " +  gameY);
}

function relocate(buttonName) {
    console.log(gameX + " " + gameY);
    let posX = getRandomGameX() + "px";
    let posY = getRandomGameY() + "px";
    console.log(posX + " " + posY);
    var button = document.getElementById(buttonName);
    button.style.top = posY;
    button.style.left = posX;
}

function getRandomGameX() {
    let val = Math.floor(Math.random() * gameX);
    if((val+widthBut) > gameX) {
        val = val - widthBut;
    }
    return val;
}

function getRandomGameY() {
    let val = Math.floor(Math.random() * gameY);
    if((val+heightBut) > gameY) {
        val = val - heightBut;
    }
    return val;
}

(function(){
    updateFrame();
    relocate('win');
    relocate('lose');
    // do some stuff
    setTimeout(arguments.callee, 1000);
})();
