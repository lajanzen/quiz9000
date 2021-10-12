const correctAnswer = true;

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === true) {
    const resultElement = document.createElement("p");
    resultElement.textContent = "Yay! It is correct.";
    resultElement.className = "correct";
    document.body.append(resultElement);
  } else {
    const resultElement = document.createElement("p");
    resultElement.textContent = "Aww man, that is not correct.";
    resultElement.className = "incorrect";
    document.body.append(resultElement);
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  if (correctAnswer === false) {
    const resultElement = document.createElement("p");
    resultElement.textContent = "Yay! It is correct.";
    resultElement.className = "correct";
    document.body.append(resultElement);
  } else {
    const resultElement = document.createElement("p");
    resultElement.textContent = "Aww man, that is not correct.";
    resultElement.className = "incorrect";
    document.body.append(resultElement);
  }
};
