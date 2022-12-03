
var currentQuestion = 0;

// function to hide start-screen div and disply quistion div
function startQuiz() {

    // alert('hello');
    document.querySelector('#start-screen').classList.add('hide');
    document.querySelector('#questions').classList.remove('hide');

    var questionTitle = document.querySelector('#question-title');
    var choicesDiv = document.querySelector('#choices');

}

document.querySelector('#start').addEventListener('click', startQuiz);

