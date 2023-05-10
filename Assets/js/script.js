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



// prevents right click
window.addEventListener("contextmenu", e => e.preventDefault());

// shows quesiton one and starts timer
quizStart[0].addEventListener("click", function(){
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
      alert("Time's up!");
      clearInterval(timerInterval); 
      window.location="Assets/highscores.html"
      localStorage.setItem("correct", correctAnswers)}
    }, 1000);
}

// pseudo code:
// A) When time is up, the alert takes you to the enter your initials section
// B) show all scores on high scores page
// C) carry initials to high scores page
// D) figure out why high scores page is not logging the correct number




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
  location.href="Assets/highscores.html";
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
    timeLeft-=5;
    correctAnswers--
    alert("Wrong!");
  }
});}

// let falseNextQuest = document.querySelectorAll('.false');
// for (i of falseNextQuest) {
//   i.addEventListener('click', function(){
//     console.log(falseNextQuest)
//   });
// }

// setting style for quiz title, the high score link, timer, and start button
quizTitle.setAttribute("style", "border-bottom: solid 2px #FF7F50; margin: 30px; font-weight: bold; font-size: 50px; color: #00008b;");
countTimer.setAttribute("style", "color: #00008b;");
quizStart[0].setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b;");
// quizStart[1].setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b;");
scoresLink.setAttribute("style", "color: #00008b; text-decoration: none;");

// sets styling for all answer buttons
for (let i = 0; i < answerKey.length; i++){
  answerKey[i].setAttribute("style", "padding-left: 20px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 25% 10%;");
};

