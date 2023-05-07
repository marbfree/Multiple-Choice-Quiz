let returnBtn = document.getElementsByClassName("btn");
let titleHS = document.querySelector("h1");
let subScore = document.getElementsByClassName("subScore");
let showHighScores = document.querySelector(".display");
let enterEl = document.querySelector(".enterScore");
let displayScore = document.querySelector("#myScore");

// sets style to buttons and header
returnBtn[0].setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b; padding: 10px 10px;");
returnBtn[1].setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b;");
titleHS.setAttribute("style", "border-bottom: solid 2px #FF7F50; margin: 30px; font-weight: bold; font-size: 50px; color: #00008b;");

// shows/hides two sections of html
subScore[0].addEventListener("click", function(){
    console.log("button clicked");
    enterEl.classList.replace("visible", "hidden");
    showHighScores.classList.replace("hidden", "visible");
});

// displays your initials and eventually your score and will stay there
function returnInitials(){
    let input = document.getElementById("initials").value;
    displayScore.textContent = input;
}

// takes you back to home page
function gotoLink(link){
    console.log(link.value);
    location.href="/index.html";
}

