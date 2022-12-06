var highscoresOL = document.querySelector('#highscores');
var clearButton = document.querySelector('#clear');

// get highscores from localStorage
var highscores = JSON.parse(localStorage.getItem("highscores"));

// sort scores descending
highscores.sort(function (a, b) {
    return b.score - a.score;
});

// display highscores
var OLContent = '';
highscores.forEach(function (item) {
    OLContent += `<li>${item.initials} - ${item.score}.</li>`
})
highscoresOL.innerHTML = OLContent;

// clear highscores
clearButton.addEventListener('click', function () {
    localStorage.setItem("highscores", JSON.stringify([]));
    highscoresOL.innerHTML = JSON.parse(localStorage.getItem("highscores"));
})

console.log(highscores);