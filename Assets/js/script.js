let homePage = document.querySelector(".homePage");
let question = document.querySelectorAll(".question");
let quizTitle = document.getElementById("quizName");
let answerKey = document.getElementsByClassName("button");
let quizStart = document.querySelector(".btn");
let scoresLink = document.querySelector("header");
let countTimer = document.querySelector("#timer");
let timeLeft = 75;
let optionsContainer = document.querySelectorAll("#container");
let answerTrue = document.querySelector(".true");

// prevents right click
window.addEventListener("contextmenu", e => e.preventDefault());

// shows quesiton one and starts timer
quizStart.addEventListener("click", function(){
  homePage.classList.replace("visible", "hidden");
  question[0].classList.replace("hidden", "visible");
  setTime();
});

// sets the timer at 75 secomds and stops at 0, taking you to high scores when quiz runs out of time
function setTime(){
  let timerInterval = setInterval(function(){
    timeLeft--;
    countTimer.textContent = "Seconds Left: " + timeLeft;

    if (timeLeft === 0) {
      alert("Time's up!");
      location.href="Assets/highscores.html";
      clearInterval(timerInterval);}
    }, 1000);
}
// pseudo code:
// A)if false answer button is pressed, 5 seconds is removed from time
//    1.create function to remove 5000 from timer
// B)add 1 to score when a correct answer is chosen

// shows and hides each question and answer block by selecting the right answer
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

// confirming true/false for each question answered by a pop up alert
for (let i = 0; i < optionsContainer.length; i++){
optionsContainer[i].addEventListener("click", function(e){
  let selectedOption = e.target;
  console.log(selectedOption);
  let isCorrect = selectedOption.dataset.state;
  console.log(isCorrect);
  if (isCorrect === "true"){
    localStorage.setItem("answer", 1)
    alert("Correct!");
  } else if (isCorrect === "false"){
    alert("Wrong!");
    // localStorage.setItem("answer", isCorrect)
  }
});}

// function addUpScore(){
//   let score = localStoreage.getItem("answer");
//   locatio.textContent = score;

// }

// setting style for quiz title, the high score link, timer, and start button
quizTitle.setAttribute("style", "border-bottom: solid 2px #FF7F50; margin: 30px; font-weight: bold; font-size: 50px; color: #00008b;");
countTimer.setAttribute("style", "color: #00008b;");
quizStart.setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b;");
scoresLink.setAttribute("style", "color: #00008b; text-decoration: none;");

// sets styling for all answer buttons
for (let i = 0; i < answerKey.length; i++){
  answerKey[i].setAttribute("style", "padding-left: 20px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 25% 10%;");
};

// takes you to high scores at end of quiz via the correct answer
function gotoLink(link){
  console.log(link.value);
  location.href="Assets/highscores.html";
}


