var index = 0;
var quizData = {};

var pasos = document.querySelectorAll('.quiz .item');
var next = document.querySelectorAll('.quiz-controls .btn-success');
var prev = document.querySelectorAll('.quiz-controls .btn-dark');


function verifyPaso(){
    for(var i = 0; i <= pasos.length - 1; i++){
        if(index == i){
            pasos[i].style.display = "block";
            saveResp(i);
        } else {
            pasos[i].style.display = "none";
        }
    }
}

function nextPaso(){
    if(index == pasos.length){
        index = pasos.length;
    } else {
        index = index + 1;
        verifyPaso();
    }
}

function prevPaso(){
    if(index == 0){
        index = 0;
    } else {
        index = index - 1;
        verifyPaso();
    }
}

function saveResp(index){
    var quiz = pasos[index];
    var questions = quiz.querySelectorAll('input');
    
    for(var i = 0; i <= questions.length - 1; i++){
        questions[i].addEventListener('click', function(){
            quizData[index+1] = this.value;
            console.log(quizData)
            console.log(quizData[index+1]);
        })
    }
}

document.addEventListener('DOMContentLoaded', function(){
    verifyPaso();

    next.forEach(function(b){
        b.addEventListener('click', nextPaso)
    })

    prev.forEach(function(p){
        p.addEventListener('click', prevPaso)
    })
})