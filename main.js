const correctAnswer = true;

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect();
  }
  disableButtons();
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    showAnswerIsCorrect();
  } else {
    showAnswerIsIncorrect();
  }
  disableButtons();
};

function showAnswerIsCorrect() {
  const resultElement = document.createElement("p");
  resultElement.textContent = "Yay! It is correct :) ";
  resultElement.className = "correct";
  document.body.append(resultElement);
}

function showAnswerIsIncorrect() {
  const resultElement = document.createElement("p");
  resultElement.textContent = "Aww no, try again :(";
  resultElement.className = "incorrect";
  document.body.append(resultElement);
}

function disableButtons() {
  yesButton.disabled = true;
  noButton.disabled = true;
}
