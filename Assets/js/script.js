let quizTitle = document.getElementById("quizName");
let eachQuestion = document.getElementById("question");
let answerKey = document.getElementsByClassName("button");
let submitBtn = document.getElementById("btn");
let scores = document.querySelector("header");
let countTimer = document.getElementById("timer");

// window.confirm("You have 75 seconds to answer 5 questions.  \nAre you ready to Play?")

let timeLeft = 76;

function setTime(){
  let timerInterval = setInterval(function(){
    timeLeft--;
    countTimer.textContent = "Time Left: " + timeLeft;
    
    if(timeLeft === 0) {
      clearInterval(timerInterval);}
    }, 1000);
}

setTime();

window.addEventListener("contextmenu", e => e.preventDefault());

quizTitle.setAttribute("style", "border-bottom: solid 2px #FF7F50; margin: 30px; font-weight: bold; font-size: 50px; color: #00008b;");
eachQuestion.setAttribute("style", "margin-bottom: 50px; font: bolder; font-size: 30px;");
answerKey[0].setAttribute("style", "padding-left: 10px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 25% 10%;");
answerKey[1].setAttribute("style", "padding-left: 10px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 10px 100px / 120px;");
answerKey[2].setAttribute("style", "padding-left: 10px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 25% 10%;");
answerKey[3].setAttribute("style", "padding-left: 10px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 10px 100px / 120px;");
submitBtn.setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%;");
scores.setAttribute("style", "color: #00008b; text-decoration: none;");
countTimer.setAttribute("style", "color: #00008b;");

