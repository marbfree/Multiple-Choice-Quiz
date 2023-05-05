let quizTitle = document.getElementById("quizName");
let titleQuestion = document.getElementById("question");
let answerKey = document.getElementsByClassName("button");
let quizStart = document.querySelector(".btn");
let scores = document.querySelector("header");
let countTimer = document.querySelector("#timer");
// let startGame = document.getElementsByClassName("homePage");
// let eachRound = document.getElementsByClassName("round")
let timeLeft = 76;

window.addEventListener("contextmenu", e => e.preventDefault());
// quizStart.addEventListener("click", showQuestion);
quizStart.addEventListener("click", setTime);

// quizStart.addEventListener("click", function hidePage(){
//   if (startGame.style.visibility === visible){
//   startGame.style.visibility = hidden;
//   } else
//   startGame.style.visibility = visible
// });

// quizStart.addEventListener("click", gameStart)

// function showQuestion() {
//   if (eachRound.style.display === "none") {
//     eachRound.style.display = "block";
//   } else {
//     eachRound.style.display = "none";
//   }
// };

function setTime(){
  let timerInterval = setInterval(function(){
    timeLeft--;
    countTimer.textContent = "Seconds Left: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);}
    }, 1000);
}



quizTitle.setAttribute("style", "border-bottom: solid 2px #FF7F50; margin: 30px; font-weight: bold; font-size: 50px; color: #00008b;");
countTimer.setAttribute("style", "color: #00008b;");
quizStart.setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b;");
// quizStart[1].setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b;");
scores.setAttribute("style", "color: #00008b; text-decoration: none;");

titleQuestion.setAttribute("style", "margin-bottom: 50px; font: bolder; font-size: 30px;");
answerKey[0].setAttribute("style", "padding-left: 10px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 25% 10%;");
answerKey[1].setAttribute("style", "padding-left: 10px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 10% 25%;");
answerKey[2].setAttribute("style", "padding-left: 10px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 25% 10%;");
answerKey[3].setAttribute("style", "padding-left: 10px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 10% 25%;");
answerKey[4].setAttribute("style", "padding-left: 30px; padding-right: 30px; background-color: #00008b; color: white; border: solid #FF7F50 2px;");


// function showQuestion(){
//   if 
// }

// quizStart.addEventListener("click", function(event){
//   var element = event.target;

//   if (element.matches(answerKey)){
//     var state = element.getAttribute("data-state");

//   if (state === "hidden"){
//     element.textContent = element.dataset.value;
//     element.dataset.state = "visible";
//   } else{
//     element.textContect="";
//     element.setAttribute("data-state", "hidden")
//   }
// }
// })

// when play button is clicked, i want to unhide the next question
// i want to keep the header, h1 and aside element on each page