const questionList = [
  "Are you a cat?",
  "Are you a fish?",
  "Are you a dog?",
  "Are you a camel?",
];
let questionIndex = 0;
let correctAnswer = true;

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questionList[0];

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect();
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect();
  }
};

function showAnswerIsCorrect() {
  const resultElement = document.createElement("p");
  resultElement.textContent = "Yay! It is correct :) ";
  resultElement.className = "correct";
  document.body.append(resultElement);
  setNewQuestion();
}

function showAnswerIsIncorrect() {
  const resultElement = document.createElement("p");
  resultElement.textContent = "Aww no, try again :(";
  resultElement.className = "incorrect";
  document.body.append(resultElement);
  disableButtons();
}

function disableButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}

function setNewQuestion() {
  questionIndex += 1;
  myQuestion.textContent = questionList[questionIndex];
  correctAnswer = false;
  document.body.removeChild(document.querySelector(".correct"));
}
