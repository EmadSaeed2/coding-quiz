//assign elements selectors to variables
var startScreenDiv = document.querySelector('#start-screen');
var questionsDiv = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choicesDiv = document.querySelector('#choices');


var currentQuestion = 0;

// function to hide start-screen div and disply quistion div
function startQuiz() {

    // alert('hello');
    startScreenDiv.classList.add('hide');
    questionsDiv.classList.remove('hide');

}

document.querySelector('#start').addEventListener('click', startQuiz);

