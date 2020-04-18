let startButton = document.getElementById("start-btn")
let nextButton = document.getElementById("next-btn")
let questionContainerElement = document.getElementById("question-container")
let questionElement = document.getElementById("question")
let answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}
startButton.addEventListener("click", startGame)
// function setNextQuestion() {
//     resetState()
//     showQuestion(shuffledQuestions[currentQuestionIndex])
// }

function showQuestion(question) {
    questionElement.innertext = question.question
    question.answers.forEach(answer => {
        let button = document.createElement("button")
        button.innertext = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.datasat.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

let Questions = [
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
          choices: ["FFIV", "FFVI", "FFIX", FFIII],
          answer: "FFVI"
        },
      ];

// function resetState() {
//     nextButton.classList.add("hide")
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//     }
// }

// function selectAnswer(e) {
//     let selectedButton = e.target
//     let correct = selectedButton.datasat.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsElement.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
//     if (shuffledQuestions.length > currentQuestionIndex + 1) {
//         nextButton.classList.remove("hide")
//     } else {
//         startButton.innertext = "Restart"
//         startButton.classList.remove("hide")
//     }
// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add("correct")
//     } else {
//         element.classList.add("wrong")
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove("correct")
//     element.classList.remove("wrong")
// }
























// // // Set Variables

// let startQuiz = document.getElementById("start");
// // let startButton = document.getElementById("start");



// // // make a start button // clicking start button starts timer and starts first question
// startQuiz.addEventListener("click", function () {
//     getNewQuestion(currentQuestionIndex);
//   });

// function getNewQuestion()



// // // if question is answered it moves on to next  question, takes away time for each inncorrect timer

// //Psuedo code:
// // needs a call to action to "start quiz" (alert and button)


