const correctAnswer = true;

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

const yesButton = document.querySelector(".yes");
yesButton.onclick = function () {
  if (correctAnswer === false) {
    alert("Yay! :)");
  } else {
    alert("Aw man, that's not correct :(");
  }
};

const noButton = document.querySelector(".no");
noButton.onclick = function () {
  alert("Aw man, that's not correct :(");
};
