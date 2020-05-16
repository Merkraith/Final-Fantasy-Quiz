let startBtn = document.querySelector("#startBtn")
let startBox = document.querySelector("#startBox")
let questionDiv = document.getElementById("question");
let correctMessage = document.querySelector("#correct");
let timerEl = document.querySelector("#timer");
let countdownEl = document.querySelector("#countdown");
let endMsg = document.querySelector("#endMsg")
let currentQuestion;
let currentChoices;
let currentIndex = 0;
let timeLeft = 0;
let timer = document.querySelector("#timer");
let timerInterval;
let score = 1
let scoreMessage = document.querySelector("#userScore")
let userInput = document.querySelector("#user-input")
let highscores = JSON.parse(localStorage.getItem("highscores"))

// Hiding text and buttons that will be used for questions and choices

document.querySelector("#questionBox").style.display = "none";
document.querySelector("#scoreBox").style.display = "none";
document.querySelector("#highscoreBox").style.display = "none";



// Start button is clicked, start screen is hidden and then quiz display shows up

function startQuiz() {
    document.querySelector("#startBox").style.display = "none";
    document.querySelector("#questionBox").style.display = "flex";
    startTimer();
    quizgame();
}

function startTimer() {

    timeLeft = 60;
    timerInterval = setInterval(function () {
        countdownEl.textContent = timeLeft;
        timeLeft--;
        (countdownEl.textContent = timeLeft);
        // console.log(timeLeft);
        if (timeLeft === 0) {
            endGame();
        }
    }, 1000);
}

// make a list of objects representing the quiz data
// remember that when we want to organize data in JS we typically use objects
let quizQuestions = [
    {
        question: "What genre of video games is Final Fantasy?",
        choices: ["FPS", "RTS", "RPG", "Sports"],
        answer: "RPG",
    },
    {
        question: "Which Final Fantasy game has the character Cloud Strife?",
        choices: ["FFI", "FFVII", "FFVIII", "FFXV"],
        answer: "FFVII"
    },
    {
        question: "What character name is used in most games?",
        choices: ["Cid", "Terra", "Erdrick", "Bob"],
        answer: "Cid"
    },
    {
        question: "Final Fantasy III(snes) is really:",
        choices: ["FFIV", "FFVI", "FFIX", "FFIII"],
        answer: "FFVI"
    },
];
// keep track of the question we are currently on

function quizgame() {
    if (quizQuestions.length === 0) {
        endGame();
    }
    currentQuestion = quizQuestions.shift()

    console.log(currentQuestion);

    currentQuestion.textContent = "";

    document.getElementById("choices").textContent = "";
    questionDiv.textContent = currentQuestion.question;

    for (i = 0; i < currentQuestion.choices.length; i++) {
        const button = document.createElement("button");

        button.textContent = currentQuestion.choices[i];

        document.getElementById("choices").appendChild(button);
        button.addEventListener("click", checkAnswer);
    }
}

function checkAnswer() {

    if (this.textContent === currentQuestion.answer) {
        correctMessage.textContent = "Correct!";
        quizgame();
    }
    else {
        correctMessage.textContent = "Wrong answer, you lose 10 seconds";
        timeLeft = timeLeft - 10;
        quizgame();
    }
}


function endGame() {
    console.log(timeLeft)

    clearInterval(timerInterval)
    document.querySelector("#questionBox").style.display = "none";
    document.querySelector("#scoreBox").style.display = "flex";
}

score = ((score) * (timeLeft));

let soundfile = "https://www.myinstants.com/media/sounds/final-fantasy-vii-victory-fanfare-1.mp3"

if (isNaN(score)) {
    endMsg.textContent = "Your final score is 0";
} else {
    endMsg.innerHTML = "You finished the quiz!";
    scoreMessage.innerHTML = "Your final score is: " + score;
}


function submitScore() {

document.querySelector("#scoreBox").style.display = "none";
document.querySelector("#highscoreBox").style.display = "flex";






}

function showHighScores() {
    document.querySelector("#startBox").style.display = "none";
    document.querySelector("#questionBox").style.display = "none";
    document.querySelector("#scoreBox").style.display = "none";
    document.querySelector("#highscoreBox").style.display = "flex";

}

function restartQuiz() {
    document.querySelector("#startBox").style.display = "block";
    document.querySelector("#questionBox").style.display = "none";
    document.querySelector("#scoreBox").style.display = "none";
    document.querySelector("#highscoreBox").style.display = "none";
}
