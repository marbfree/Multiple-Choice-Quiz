let homePage = document.querySelector(".homePage");
let question = document.querySelectorAll(".question");
let quizTitle = document.getElementById("quizName");
let titleQuestion = document.getElementById("question");
let answerKey = document.getElementsByClassName("button");
let quizStart = document.querySelector(".btn");
let scores = document.querySelector("header");
let countTimer = document.querySelector("#timer");
let gameStart = document.getElementsByClassName("homePage");
let timeLeft = 75;
let submitBtn = document.querySelectorAll(".submit")
let questions = document.querySelectorAll("h2");
let optionsContainer = document.querySelectorAll("#container");

window.addEventListener("contextmenu", e => e.preventDefault());

quizStart.addEventListener("click", function(){
  homePage.classList.replace("visible", "hidden");
  question[0].classList.replace("hidden", "visible");
  setTime();
});

function setTime(){
  let timerInterval = setInterval(function(){
    timeLeft--;
    countTimer.textContent = "Seconds Left: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);}
    }, 1000);
}

answerKey[3].addEventListener("click", function(){
  question[0].classList.replace("visible", "hidden");
  question[1].classList.replace("hidden", "visible")
});

answerKey[5].addEventListener("click", function(){
  question[1].classList.replace("visible", "hidden");
  question[2].classList.replace("hidden", "visible");
});

answerKey[11].addEventListener("click", function(){
  question[2].classList.replace("visible", "hidden");
  question[3].classList.replace("hidden", "visible");
});

answerKey[12].addEventListener("click", function(){
  question[3].classList.replace("visible", "hidden");
  question[4].classList.replace("hidden", "visible");
});

for (let i = 0; i < optionsContainer.length; i++){
optionsContainer[i].addEventListener("click", function(e){
  let selectedOption = e.target;
  console.log(selectedOption);
  let isCorrect = selectedOption.dataset.state;
  console.log(isCorrect);
  if (isCorrect === "true"){
    alert("Correct!");
  } else if (isCorrect === "false"){
    alert("Try Again!");
  }
});}

quizTitle.setAttribute("style", "border-bottom: solid 2px #FF7F50; margin: 30px; font-weight: bold; font-size: 50px; color: #00008b;");
countTimer.setAttribute("style", "color: #00008b;");
quizStart.setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b;");
scores.setAttribute("style", "color: #00008b; text-decoration: none;");
titleQuestion.setAttribute("style", "margin-bottom: 50px; font: bolder; font-size: 30px;");

for (let i = 0; i < answerKey.length; i++){
  answerKey[i].setAttribute("style", "padding-left: 20px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 25% 10%;");
};

for(let i = 0; i < submitBtn.length; i++){
submitBtn[i].setAttribute("style", "padding-left: 30px; padding-right: 30px; background-color: #00008b; color: white; border: solid #FF7F50 2px; margin-top: 50px;");
};

submitBtn[4].addEventListener("click", function(){
  console.log("button clicked");
});

function gotoLink(link){
  console.log(link.value);
  location.href="Assets/highscores.html";
}