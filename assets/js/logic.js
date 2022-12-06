//assign sound effect files to variables
var correctSound = new Audio('assets/sfx/correct.wav');
var incorrectSound = new Audio('assets/sfx/incorrect.wav');


//assign elements selectors to variables
var timeDev = document.querySelector('#time');
var startScreenDiv = document.querySelector('#start-screen');
var questionsDiv = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choicesOL = document.querySelector('#choices ol')
var feedbackDiv = document.querySelector('#feedback')
var endScreenDiv = document.querySelector('#end-screen')
var finalScoreDiv = document.querySelector('#final-score')
var submitButton = document.querySelector('#submit')
var initialsInput = document.querySelector('#initials')

// initialize the starting values
var currentQuestion = 0;
var score = 0;
var time = 75;
var timer;
var score = 0;
timeDev.textContent = time;


//function to set timer
function setTimer() {
    timer = setInterval(function () {
        time--;
        timeDev.textContent = time;
        if (time <= 0) {
            endGame();
        }
    }, 1000);

}

//function to disply quistions
function nextQuistion() {
    questionTitle.textContent = data[currentQuestion].question;
    choicesData = data[currentQuestion].choices;
    var answers = '';
    for (choice of choicesData) {
        answers += `<button><li data-iscorrect=${choice.isCorrect}>${choice.answer}</li></button>`;
    }

    choicesOL.innerHTML = answers;
}

// function to hide start-screen div and disply quistion div
function startQuiz() {
    startScreenDiv.classList.add('hide');
    questionsDiv.classList.remove('hide');
    nextQuistion();
    setTimer();
}
document.querySelector('#start').addEventListener('click', startQuiz);

// function evaluate the answer
choicesOL.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        if (currentQuestion < data.length - 1) {
            feedbackDiv.classList.remove('hide');
            if (event.target.dataset.iscorrect === 'true') {
                feedbackDiv.textContent = 'Correct!';
                correctSound.play();
            } else {
                feedbackDiv.textContent = 'Wrong!';
                incorrectSound.play();
                time -= 15; // reduce time if answer is wrong
            }
            // display next quistion
            currentQuestion++;
            nextQuistion();

            // hide feedback div after half a second
            setTimeout(function () {
                feedbackDiv.classList.add('hide');
            }, 500);
            console.log(time)
        } else {
            endGame();
        }
    }
})

// function to end the game
function endGame() {
    clearInterval(timer);
    questionsDiv.classList.add('hide');
    feedbackDiv.classList.add('hide');
    endScreenDiv.classList.remove('hide');
    score = time;
    finalScoreDiv.textContent = score;
}

// function to save the score to lical storge
var highscoresArr = [];

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    setHighscores()
})

function setHighscores() {
    // check if localStorage has highscores item if not, create it.
    if (!localStorage.getItem("highscores")) {
        localStorage.setItem("highscores", JSON.stringify(highscoresArr));
    } else {
        // validate user input
        var userInput = initialsInput.value;
        if (userInput.length !== 2) {
            alert("Please, enter initials (two chracters long).");
        } else {
            // create scoreObj with initials and score
            var scoreObj = {};
            scoreObj.initials = userInput;
            scoreObj.score = score;

            // get highscores from localStorage and assign it to highscoresArr
            highscoresArr = JSON.parse(localStorage.getItem("highscores"));

            highscoresArr.push(scoreObj);

            // overwrite highscores into localStorage
            localStorage.setItem("highscores", JSON.stringify(highscoresArr));

            location.replace("highscores.html")

            console.log(localStorage.getItem("highscores"))
        }

    }
}

