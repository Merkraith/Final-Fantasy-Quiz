let startBtn = document.querySelector("#startBtn")
let startBox = document.querySelector("#startBox")
let questionDiv = document.getElementById("question");
let currentQuestion;
let currentChoices;
let timeLeft = 0;
let timer = document.querySelector("#timer");


// Hiding text and buttons that will be used for questions and choices

document.querySelector("#questionBox").style.display = "none";

// Start button is clicked, start screen is hidden and then quiz display shows up

function startQuiz() {
    document.querySelector("#startBox").style.display = "none";
    document.querySelector("#questionBox").style.display = "flex";
    quizgame();
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
        // button.addEventListener("click", verifyAnswer);
    }
    
}

