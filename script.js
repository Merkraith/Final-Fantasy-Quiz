let countdown = document.querySelector("countdown");
let score = document.querySelector("score");
// Hiding text and buttons that will be used for questions and choices

document.getElementById("question").style.display = "none";
document.getElementById("buttons").style.display = "none";

// Start button is clicked, start screen is hidden and then quiz display shows up

function startQuiz() {
    document.getElementById("start").style.display = "none";
    document.getElementById("question").style.display = "flex";
    document.getElementById("buttons").style.display = "flex";
    populate();
}

function populate() {
    if (quiz.isEnded()) {
    }
    else {
        //show question
        let element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
    }
};

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

let questions = [
    new Question("What video game genre is Final Fantasy?", ["FPS", "RTS", "RPG", "Sports"], "RPG"),
    new Question("Which Final Fantasy game has the character Cloud Strife?", ["FFI", "FFVII", "FFVIII", "FFXV"], "FFVII"),
    new Question("What character name is used in most games?", ["Cid", "Terra", "Erdrick", "Bob"], "Cid"),
    new Question("Final Fantasy III(snes) is really:", ["FFIV", "FFVI", "FFIX", "FFIII"], "FFVI")
];

let quiz = new Quiz(questions);

populate();

// function showProgress() {
//     let currentQuestionNumber = quiz.quesitonIndex + 1;
//     let element = document.getElementById("progress");
//     element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;

// }

// function showScores() {
//     let gameOverHtml = "<h1>Result</h1>";
//     gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
//     let element = document.getElementById("quiz");
//     element.innerHTML = gameOverHtml;
// }

