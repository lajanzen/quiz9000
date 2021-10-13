const questionList = [
  "Are you a cat?",
  "Are you a fish?",
  "Are you a dog?",
  "Are you human?",
];

const answers = [false, false, false, true];

let questionIndex = 0;
let correctAnswer = answers[questionIndex];

const myQuestion = document.querySelector(".question");
myQuestion.textContent = questionList[questionIndex];
updateProgress();

function updateProgress() {
  const progressElement = document.querySelector(".progress");
  progressElement.textContent = `Question ${questionIndex + 1}/${
    questionList.length
  }`;
}

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
  setTimeout(setNewQuestion, 1000);
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

function finishQuiz() {
  document.body.removeChild(document.querySelector(".questionCard"));
  const finishElement = document.createElement("p");
  finishElement.textContent = "Yay, you made it! 🎉";
  finishElement.className = "finishElement";
  document.body.append(finishElement);
}

function setNewQuestion() {
  questionIndex += 1;
  document.body.removeChild(document.querySelector(".correct"));

  if (questionIndex < questionList.length) {
    correctAnswer = answers[questionIndex];
    myQuestion.textContent = questionList[questionIndex];
    updateProgress();
  } else {
    finishQuiz();
  }
}
