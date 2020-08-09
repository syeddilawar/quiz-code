let questionpointer = 0;
let score = 0;
var timeEl = document.querySelector(".time");
var secondsLeft = 60;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " : Quiz Timer.";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}
setTime();

let questioncontainerdiv = document.querySelector(".questioncontainer");
let currentquestion = document.getElementById("questionText");
let questions = [
  {
    questionText: "What are people who write computer code called?",
    answers: ["Graphic designer", "Professors", "Manufacturers", "Programmers"],
    correctAnswerIndex: "3",
  },
  {
    questionText: "What is computer coding?",
    answers: [
      "Telling a computer what to do",
      "A list of function",
      "A radio show",
      "A tv show",
    ],
    correctAnswerIndex: "0",
  },
  {
    questionText:
      "The action of doing something over and over again, repeating code.?",
    answers: ["Code", "Program", "Loop", "Bug"],
    correctAnswerIndex: "2",
  },
  {
    questionText:
      "What word describe the set of instructions that computer need to do work?",
    answers: ["Program", "Synopsis", "Blueprint", "Agenda"],
    correctAnswerIndex: "0",
  },
  {
    questionText: "what is grass colour?",
    answers: ["yellow", "green", "blue", "pink"],
    correctAnswerIndex: "1",
  },
];

function showQuestion() {
  currentquestion.innerText = questions[questionpointer].questionText;

  for (let i = 0; i < questions[questionpointer].answers.length; i++) {
    let $btn = document.createElement("button");
    $btn.innerText = questions[questionpointer].answers[i];
    $btn.setAttribute("id", i);
    $btn.setAttribute("data-id", i);
    $btn.addEventListener("click", checkanswers);
    questioncontainerdiv.appendChild($btn);
  }
}

function checkanswers(event) {
  if (event.target.id === questions[questionpointer].correctAnswerIndex) {
    //Score will be increased

    document.getElementById("feedback").innerHTML = "<strong>Correct!</strong>";
    score++;
  } else {
    document.getElementById("feedback").innerHTML =
      "<strong>InCorrect!</strong>";
  }

  let $btn = document.getElementById("0");
  questioncontainerdiv.removeChild($btn);

  $btn = document.getElementById("1");
  questioncontainerdiv.removeChild($btn);

  $btn = document.getElementById("2");
  questioncontainerdiv.removeChild($btn);

  $btn = document.getElementById("3");
  questioncontainerdiv.removeChild($btn);

  questionpointer++;
  //call this only when there are more question.
  showQuestion();
}

$(document).ready(function () {
  showQuestion();
  // quizTimer=setInterval()
});
