let returnBtn = document.getElementsByClassName("btn");
let titleHS = document.querySelector("h1");
// let subScore = document.getElementsByClassName("subScore");
let showHighScores = document.querySelector(".display");
let enterEl = document.querySelector(".enterScore");
let displayScore = document.querySelector("#myScore");
let yourScore = document.querySelector("#scored");

// sets style to buttons and header
returnBtn[0].setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b; padding: 10px 10px;");
// returnBtn[1].setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b;");
titleHS.setAttribute("style", "border-bottom: solid 2px #FF7F50; margin: 30px; font-weight: bold; font-size: 50px; color: #00008b;");

displayScore.textContent = localStorage.getItem("correct", correctAnswers)

// takes you back to home page
function gotoLink(link){
    console.log(link.value);
    location.href="/index.html";
}

returnBtn.addEventListener("click", gotoLink(link));
