let returnBtn = document.getElementsByClassName("btn");
let titleHS = document.querySelector("h1");


returnBtn[0].setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b; padding: 10px 10px;");
returnBtn[1].setAttribute("style", "border: solid #00008b 2px; background-color: #FF7F50; border-radius: 10% / 50%; color: #00008b;");
titleHS.setAttribute("style", "border-bottom: solid 2px #FF7F50; margin: 30px; font-weight: bold; font-size: 50px; color: #00008b;");

function gotoLink(link){
    console.log(link.value);
    location.href="/index.html";
}

// returnBtn[1].addEventListener("click", 