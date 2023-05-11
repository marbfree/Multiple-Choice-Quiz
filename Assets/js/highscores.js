let returnBtn = document.getElementsByClassName("btn");
let titleHS = document.querySelector("h1");
// let subScore = document.querySelector("#subScore");
let showHighScores = document.querySelector(".display");
// let enterEl = document.querySelector(".enterScore");
let displayScore = document.querySelector("#myScore");
let yourScore = document.querySelector("#scored");
let userInScore = localStorage.getItem("correct");
console.log(userInScore);
let userScoresArray = JSON.parse(localStorage.getItem("userInScore")) || []


// sets style to buttons and header
returnBtn[0].setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b; padding: 10px 10px;");
titleHS.setAttribute("style", "border-bottom: solid 2px #FF7F50; margin: 30px; font-weight: bold; font-size: 50px; color: #00008b;");

// return to homepage button 
function gotoLink(link){
    console.log(link.value);
    location.href="index.html";
}

// displays high scores in a list
function displayHighScores(){
    for (let i = 0; i < userScoresArray.length; i++){
        let highscoreString = userScoresArray[i].initials + ": " + userScoresArray[i].userInScore;
        let highscoreEl = document.createElement("p");
        highscoreEl.textContent = highscoreString;
        document.querySelector("#highscores").appendChild(highscoreEl);
        if (i >= 5){
            userScoresArray=[];
        }
    }
}

displayHighScores()