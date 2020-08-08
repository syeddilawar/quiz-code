function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
  this.feedback;
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.guess = function (answer) {
  if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++;
    Correct();
  } else {
    Incorrect();
  }

  this.questionIndex++;
};

Quiz.prototype.isEnded = function () {
  return this.questionIndex === this.questions.length;
};

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
};

function populate() {
  if (quiz.isEnded()) {
    Initial();
  } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  var gameOverHTML = "";
  gameOverHTML +=
    "<h2 id='score'>your score: " +
    quiz.score +
    "<br><br>" +
    "Highes Score: 5" +
    "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}
function Initial() {
  document.getElementById("sec").innerHTML =
    "<html><head></head><body><center><form><br><br><br><br><strong>Your Score Is:" +
    quiz.score +
    "</strong><br>Initials<input><button onclick=showScores()>Submit</botton></form></center></body><html>";
}
function Correct() {
  var el1 = document.getElementById("target");
  el1.innerHTML = "<textarea readonly>Correct</textarea>";
}
function Incorrect() {
  var el1 = document.getElementById("target");
  el1.innerHTML = "<textarea readonly>Incorrect</textarea>";
  console.log(Incorrect);
}

// create questions here
var questions = [
  new Question(
    "Hyper Text Markup Language Stand For?",
    ["JavaScript", "XHTML", "CSS", "HTML"],
    "HTML"
  ),
  new Question(
    "Which language is used for styling web pages?",
    ["HTML", "JQuery", "CSS", "XML"],
    "CSS"
  ),
  new Question(
    "Which is not a JavaScript Framework?",
    ["Python Script", "JQuery", "Django", "NodeJS"],
    "Django"
  ),
  new Question(
    "Which is used for Connect To Database?",
    ["PHP", "HTML", "JS", "All"],
    "PHP"
  ),
  new Question(
    "Webdevtrick.com is about..",
    ["Web Design", "Graphic Design", "SEO & Development", "All"],
    "All"
  ),
];

// create quiz
var quiz = new Quiz(questions);
// display quiz
populate();
