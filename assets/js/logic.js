//assign elements selectors to variables
var startScreenDiv = document.querySelector('#start-screen');
var questionsDiv = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choicesOL = document.querySelector('#choices ol')
var feedbackDiv = document.querySelector('#feedback')


var currentQuestion = 0;

// function to hide start-screen div and disply quistion div
function startQuiz() {
    startScreenDiv.classList.add('hide');
    questionsDiv.classList.remove('hide');
    nextQuistion();
}
document.querySelector('#start').addEventListener('click', startQuiz);


//function to disply next quistion
function nextQuistion() {
    questionTitle.textContent = data[currentQuestion].question;
    choicesData = data[currentQuestion].choices;
    var answers = '';
    for (choice of choicesData) {
        answers += `<button><li data-correct=${choice.correct}>${choice.answer}</li></button>`;
    }

    choicesOL.innerHTML = answers;
}

// function evaluate the answer
choicesOL.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        feedbackDiv.classList.remove('hide');
        if (event.target.dataset.correct === 'true') {
            feedbackDiv.textContent = 'Correct!';
        } else {
            feedbackDiv.textContent = 'Wrong!';
        }
        currentQuestion++;
        nextQuistion()

        setTimeout(function () {
            feedbackDiv.classList.add('hide');
        }, 800)
    }
})