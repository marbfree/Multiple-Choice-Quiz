let quizTitle = document.getElementById("quizName");
let eachQuestion = document.getElementById("question");
let answerKey = document.getElementsByClassName("button");
let submitBtn = document.getElementById("btn");
let scores = document.querySelector("header");
let countdown = document.querySelector("aside");

quizTitle.setAttribute("style", "border-bottom: solid 2px #FF7F50; margin: 30px; font-weight: bold; font-size: 50px; color: #00008b;");
eachQuestion.setAttribute("style", "margin-bottom: 50px; font: bolder; font-size: 30px;");
answerKey[0].setAttribute("style", "padding-left: 10px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 25% 10%;");
answerKey[1].setAttribute("style", "padding-left: 10px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 10px 100px / 120px;");
answerKey[2].setAttribute("style", "padding-left: 10px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 25% 10%;");
answerKey[3].setAttribute("style", "padding-left: 10px; padding-right: 20px; background-color: #00008b; color: white; border: solid #FF7F50 2px; border-radius: 10px 100px / 120px;");
submitBtn.setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%;");
scores.setAttribute("style", "color: #00008b;");
countdown.setAttribute("style", "color: #00008b;");