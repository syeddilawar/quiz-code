let questionpointer = 0;
let quizTimer;
let score = 0;
//html controls
let questioncontainerdiv = document.querySelector(".questioncontainer");
let currentquestion = document.getElementById("questionText");
let questions = [
  {
    questionText: "Hyper Text Markup Language Stand For?",
    answers: ["JavaScript", "XHTML", "CSS", "HTML"],
    correctAnswerIndex: "3",
  },
  {
    questionText: "Which language is used for styling web pages?",
    answers: ["HTML", "JQuery", "CSS", "XML"],
    correctAnswerIndex: "2",
  },
  {
    questionText: "Which is not a JavaScript Framework?",
    answers: ["Python Script", "JQuery", "Django", "NodeJS"],
    correctAnswerIndex: "0",
  },
  {
    questionText: "Which is used for Connect To Database?",
    answers: ["PHP", "HTML", "JS", "All"],
    correctAnswerIndex: "2",
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
