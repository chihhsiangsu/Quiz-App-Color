console.log(document);
const bookmarkButton = document.querySelector('[data-js="bookmark-toggle"]');
const bookmarkImage = document.querySelector('[data-js="bookmark-image"]');
const showAnswerButton = document.querySelector(".card__answerclick");
const cardAnswer = document.querySelector(".card__answer");
const textAnswerClickButton = document.querySelector(".card__answerclick");

const darkBookmarkImage = "./assets/hearttwo.png";
const lightBookmarkImage = "./assets/heartone.png";

let isBookmarked = false;

bookmarkButton.addEventListener("click", () => {
  isBookmarked = !isBookmarked;
  bookmarkImage.src = isBookmarked ? lightBookmarkImage : darkBookmarkImage;
});

showAnswerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--reveal");

  if (cardAnswer.classList.contains("card__answer--reveal")) {
    textAnswerClickButton.textContent = "Hide Answer";
  } else {
    textAnswerClickButton.textContent = "Show Answer";
  }
});
