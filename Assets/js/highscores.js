let returnBtn = document.getElementsByClassName("btn");
let titleHS = document.querySelector("h1");
let subScore = document.querySelector("#subScore");
let showHighScores = document.querySelector(".display");
let enterEl = document.querySelector(".enterScore");
let displayScore = document.querySelector("#myScore");
let yourScore = document.querySelector("#scored");
let userInScore = localStorage.getItem("correct");
console.log(userInScore);
let userScoresArray = JSON.parse(localStorage.getItem("userInScore")) || []

// sets style to buttons and header
returnBtn[0].setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b; padding: 10px 10px;");
returnBtn[1].setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b; padding: 10px 10px; width: 10%;");

titleHS.setAttribute("style", "border-bottom: solid 2px #FF7F50; margin: 30px; font-weight: bold; font-size: 50px; color: #00008b;");

displayScore.textContent = "Your Score: " + localStorage.getItem("correct")

// takes you back to home page
function gotoLink(link){
    console.log(link.value);
    location.href="/index.html";
}

function displayHighScores(){
    for (let i = 0; i < userScoresArray.length; i++){
        let highscoreString = userScoresArray[i].initials + ": " + userScoresArray[i].userInScore;
        let highscoreEl = document.createElement("p");
        highscoreEl.textContent = highscoreString;
        document.querySelector("#highscores").appendChild(highscoreEl);
    }
}
displayHighScores()

// submit initials and score to the high scores
subScore.addEventListener("click", function(){
    let initials = document.getElementById("initials").value;
    displayScore.textContent = initials + " " + userInScore;
    userScoresArray.push({initials, userInScore})
    let logIt = localStorage.setItem("userInScore", JSON.stringify(userScoresArray));
    // displayScore.textContent = localStorage.getItem(logIt);
    let initialsNow = JSON.parse(localStorage.getItem(initials, localStorage.getItem("correct")));
    console.log(logIt);
    // displayScore.textContent = "Your Score " + initialsNow;
    console.log(initialsNow);


})