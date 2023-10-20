"use strict"

const lines = document.querySelector("#lines");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#header-menu").cloneNode(1);

lines.addEventListener("click", barHandler);

function barHandler(e){
    e.preventDefault();
    popup.classList.toggle("open");
    lines.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup(){
    popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link)=>{
    link.addEventListener ("click", closeOnClick);
}); 

function closeOnClick() {
    popup.classList.remove("open");
    lines.classList.remove("active");
    body.classList.remove("noscroll");
}


let qaBlocks = document.querySelectorAll('.qa__block')
let qaAnswers = document.querySelectorAll('.qa__answer')
let qaPlus = document.querySelectorAll('.qa__plus')


function openAnswer(){
    for (let i=0; i<qaBlocks.length; i++){
        qaBlocks[i].addEventListener('click', () =>{
            qaAnswers[i].classList.toggle('active');
            qaPlus[i].classList.toggle('active')
        });
    }
}

openAnswer()