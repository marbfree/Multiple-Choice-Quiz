let homePage = document.querySelector(".homePage");
let question = document.querySelectorAll(".question");
let quizTitle = document.getElementById("quizName");
let answerKey = document.getElementsByClassName("button");
let quizStart = document.getElementsByClassName("btn");
let scoresLink = document.querySelector("header");
let countTimer = document.querySelector("#timer");
let timeLeft = 75;
let optionsContainer = document.querySelectorAll("#container");
let correctAnswers = 0
let timerInterval
let correct = 0
let enterInitials = document.querySelector(".enterScore");
let submitBtn = document.getElementById("subScore");
let displayScore = document.querySelector("#myScore");
let userScoresArray = JSON.parse(localStorage.getItem("userInScore")) || []
let userInScore = localStorage.getItem("correct");
let enterEl = document.querySelector(".enterScore");
let initials = document.getElementById("initials").value;
let userInitials = localStorage.setItem("userInit", initials);

// prevents right click
window.addEventListener("contextmenu", e => e.preventDefault());

// shows quesiton one and starts timer
quizStart[0].addEventListener("click", function(){
  localStorage.setItem("correct", correctAnswers);
   console.log(correctAnswers);
  homePage.classList.replace("visible", "hidden");
  question[0].classList.replace("hidden", "visible");
  setTime();
});

// sets the timer at 75 secomds and stops at 0, taking you to high scores when quiz runs out of time
function setTime(){
    timerInterval = setInterval(function(){
    timeLeft--;
    countTimer.textContent = "Seconds Left: " + timeLeft;

    if (timeLeft <= 0) {
      alert("Time's up! Try Again!");
      clearInterval(timerInterval); 
      window.location="index.html";
      }
    }, 1000);
}

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

// shows score and input for initials to add to high scores page
answerKey[18].addEventListener("click", function(){
  question[4].classList.replace("visible", "hidden");
  enterInitials.classList.replace("hidden", "visible")
  if (timeLeft > 0){
    clearInterval(timerInterval);
  }
});

// confirming true/false for each question answered by a pop up alert
for (let i = 0; i < optionsContainer.length; i++){
optionsContainer[i].addEventListener("click", function(e){
  let selectedOption = e.target;
  console.log(selectedOption);
  let isCorrect = selectedOption.dataset.state;
  console.log(isCorrect);
  if (isCorrect === "true"){
    correctAnswers++
    localStorage.setItem("correct", correctAnswers)
    alert("Correct!");
  } else if (isCorrect === "false"){
    timeLeft-=15;
    correctAnswers--
    alert("Wrong answer! Try again!");
  }
});}

displayScore.textContent = "Your Score: " + localStorage.getItem("correct")


// submit initials and score to the high scores
submitBtn.addEventListener("click", function(){
  userScoresArray.push({initials, userInScore})
  let logIt = localStorage.setItem("userInScore", JSON.stringify(userScoresArray));
  let initialsNow = JSON.parse(localStorage.getItem(initials, localStorage.getItem("correct")));
  enterEl.classList.replace("visible", "hidden");
  console.log(logIt);
  console.log(initialsNow);
  window.location="highscores.html";
});


// setting style for quiz title, the high score link, timer, and start button
quizTitle.setAttribute("style", "border-bottom: solid 2px #FF7F50; margin: 30px; font-weight: bold; font-size: 50px; color: #00008b;");
countTimer.setAttribute("style", "color: #00008b;");
quizStart[0].setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b;");
scoresLink.setAttribute("style", "color: #00008b; text-decoration: none;");
submitBtn.setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b; padding: 10px 10px; width: 20%;");

// sets styling for all answer buttons
for (let i = 0; i < answerKey.length; i++){
  answerKey[i].setAttribute("style", "padding-left: 20px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 25% 10%;");
};

