"use strict"


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