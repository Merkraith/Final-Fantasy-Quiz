//variables
let sec = 120
let question = document.querySelector("#question");
let choices = document.querySelector("#answer-buttons");
let answer = document.querySelector("#correct-wrong");


// quiz questions

let quizQuestions = [
    {
        question: "What genre of video games is Final Fantasy?",
        choices: ["FPS", "RTS", "RPG", "Sports"],
        answer: "RPG",
    }]

// Start Button is pressed, and removes the Start Button, other text, 


function startQuiz() {
    document.getElementById("start").style.display = "none";
    quizQuestions.innerHTML = "";


//     for (let i = 0; i < quizQuestions.length; i++) {
//         let quizQuestions = quizQuestions[i];
    
//         let h1 = document.createElement("h1");
//         h1.textContent = question;
//         question.appendChild(h1);
//     }
// }
// start box closes, quiz box displays


 
// After Question it answered, we need to go to the next question










// make a list of objects representing the quiz data
// remember that when we want to organize data in JS we typically use objects
// let Questions = [
//     {
//       question: "What genre of video games is Final Fantasy?",
//       choices: ["FPS", "RTS", "RPG", "Sports"],
//       answer: "RPG",
//     }]
//     // },
//     {
//       question: "Which Final Fantasy game has the character Cloud Strife?",
//       choices: ["FFI", "FFVII", "FFVIII", "FFXV"],
//       answer: "FFVII"
//     },
//     {
//       question: "What character name is used in most games?",
//       choices: ["Cid", "Terra", "Erdrick", "Bob"],
//       answer: "Cid"
//     },
//     {
//       question: "Final Fantasy III(snes) is really:",
//       choices: ["FFIV", "FFVI", "FFIX", FFIII],
//       answer: "FFVI"
//     },
//   ];
//   // keep track of the question we are currently on
//   let currentQuestion = 0;
//   function render() {
//     let questionData = Questions[currentQuestion];
//     $("#question").text(questionData.question);
//     $("#options").empty();
//     for (let choice of questionData.choices) {
//       $("#options").append($("<li>").text(choice))
//     }
//     currentQuestion += 1;
//     if (currentQuestion === questionData.length) {
//         currentQuestion = 0;
//     }
//   }
//   $("#submit").click(render)
// render()